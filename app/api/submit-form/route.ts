import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    console.log("Iniciando processamento do formulário...")
    
    // Validate request body
    if (!req.body) {
      throw new Error("Corpo da requisição vazio")
    }
    
    const data = await req.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'services', 'message']
    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Campo obrigatório faltando: ${field}`)
      }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      throw new Error("Formato de email inválido")
    }
    
    // Format services as comma-separated string
    const formattedData = {
      ...data,
      services: Array.isArray(data.services) ? data.services.join(", ") : data.services
    }
    
    console.log("Dados formatados:", formattedData)
    
    const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL
    if (!SCRIPT_URL) {
      throw new Error("Google Script URL não configurada")
    }

    console.log("Enviando dados para o Google Apps Script...")
    
    try {
      // Send data to Google Apps Script with timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
      
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Origin": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        },
        body: JSON.stringify(formattedData),
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        throw new Error(`Erro na resposta do servidor: ${response.status}`)
      }
      
      console.log("Requisição enviada com sucesso!")
      return NextResponse.json({ 
        success: true,
        message: "Dados enviados com sucesso"
      })
    } catch (fetchError) {
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        throw new Error("Tempo limite excedido ao enviar formulário")
      }
      throw fetchError
    }

  } catch (error) {
    console.error("Erro detalhado ao processar formulário:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Erro desconhecido ao processar formulário"
      },
      { status: 500 }
    )
  }
}

// Configuração do CORS para OPTIONS request
export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type, Origin',
    },
  })
} 