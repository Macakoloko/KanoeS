"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const features = [
  "Catálogo de produtos dinâmico",
  "Carrinho de compras intuitivo",
  "Múltiplos meios de pagamento",
  "Gestão de estoque em tempo real",
  "Notificações de pedidos",
  "Rastreamento de entregas",
  "Programa de fidelidade",
  "Analytics de vendas",
]

const benefits = [
  "Aumento das vendas online",
  "Melhor experiência de compra",
  "Gestão simplificada do negócio",
  "Alcance de novos mercados",
  "Fidelização de clientes",
  "Insights baseados em dados",
]

export default function EcommerceAppPage() {
  return (
    
      <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Link href="/servicos/desenvolvimento-apps" className="flex items-center text-kanoe-beige mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Desenvolvimento de Apps
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Apps de <span className="text-kanoe-beige">E-commerce</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Criação de aplicativos de e-commerce completos com integração de pagamentos, gestão de estoque e experiência de compra otimizada.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recursos Inclusos"
            subtitle="Desenvolvemos aplicativos de e-commerce com todos os recursos necessários para vender online."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-kanoe-beige" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-kanoe-beige">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Benefícios</h2>
              <p className="text-gray-300 mb-6">
                Um aplicativo de e-commerce bem desenvolvido traz diversos benefícios para seu negócio:
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                      <Check className="h-5 w-5 text-kanoe-beige" />
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                >
                  <Link href="/fale-conosco">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2370&auto=format&fit=crop"
                alt="Apps de E-commerce"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kanoe-green-darker to-kanoe-brown/30"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para vender através do seu próprio app?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a expandir seu negócio com um aplicativo de e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
              >
                <Link href="/fale-conosco">Fale Conosco</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10 px-8 py-6 text-lg"
              >
                <Link href="/portfolio">Ver Projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
} 