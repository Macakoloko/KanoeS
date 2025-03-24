"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/components/ui/page-transition"

export default function PoliticaPrivacidadePage() {
  return (
    <PageTransition>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="flex items-center text-kanoe-beige mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para a Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-kanoe-beige">Privacidade</span>
            </h1>
            <p className="text-gray-300">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
        
        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      
      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-headings:text-kanoe-beige prose-a:text-kanoe-beige">
            <h2>1. Introdução</h2>
            <p>
              A Kanoê Digital ("nós", "nosso" ou "nossa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você visita nosso site kanoe.digital e utiliza nossos serviços.
            </p>
            <p>
              Ao utilizar nosso site e serviços, você concorda com a coleta e uso de informações de acordo com esta política.\

