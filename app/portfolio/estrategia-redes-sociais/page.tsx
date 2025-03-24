"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "SocialBrand",
  industry: "Marketing Digital",
  services: ["Gestão de Redes Sociais", "Criação de Conteúdo", "Análise de Dados", "Engajamento"],
  duration: "6 meses",
  year: "2023",
}

const results = [
  "Aumento de 300% no engajamento",
  "Crescimento de 200% na base de seguidores",
  "Melhoria de 150% na taxa de conversão",
  "Aumento de 180% no alcance orgânico",
  "Crescimento de 250% nas menções da marca",
]

export default function EstrategiaRedesSociaisPage() {
  return (<div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Link href="/portfolio" className="flex items-center text-kanoe-beige mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para o Portfólio
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Estratégia de <span className="text-kanoe-beige">Redes Sociais</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvimento de estratégia completa de redes sociais para a SocialBrand, com foco em engajamento,
              crescimento e conversão.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop"
                alt="Estratégia de Redes Sociais"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Visão Geral do Projeto</h2>
              <p className="text-gray-300 mb-6">
                A SocialBrand, empresa de produtos de beleza, enfrentava desafios significativos com sua presença nas
                redes sociais. Apesar de ter uma base de seguidores considerável, a empresa não conseguia gerar
                engajamento significativo e converter seguidores em clientes.
              </p>
              <p className="text-gray-300 mb-8">
                Nosso objetivo foi desenvolver e implementar uma estratégia abrangente de redes sociais para aumentar
                o engajamento, fortalecer o relacionamento com o público e melhorar significativamente as taxas de
                conversão.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-kanoe-beige">Cliente</h3>
                  <p className="text-gray-400">{projectDetails.client}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-kanoe-beige">Indústria</h3>
                  <p className="text-gray-400">{projectDetails.industry}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-kanoe-beige">Serviços</h3>
                  <ul className="text-gray-400">
                    {projectDetails.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-kanoe-beige">Duração</h3>
                  <p className="text-gray-400">{projectDetails.duration}</p>
                  <h3 className="text-lg font-bold mb-2 mt-4 text-kanoe-beige">Ano</h3>
                  <p className="text-gray-400">{projectDetails.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Resultados Alcançados"
            subtitle="Nossa estratégia gerou resultados expressivos para a SocialBrand"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <LineChart className="h-7 w-7 text-kanoe-beige" />
                </div>
                <p className="text-gray-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-kanoe-green-darker/30 to-black/50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para impulsionar sua presença nas redes sociais?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Vamos criar uma estratégia personalizada para sua marca alcançar resultados extraordinários nas redes sociais.
            </p>
            <Button size="lg" className="bg-kanoe-beige text-black hover:bg-kanoe-beige/90">
              Iniciar Projeto
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    
  )
    </div>
  )}