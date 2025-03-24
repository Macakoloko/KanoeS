import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Search, BarChart, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "TechStore",
  industry: "E-commerce de Tecnologia",
  services: ["SEO Técnico", "Otimização de Conteúdo", "Link Building", "SEO Local"],
  duration: "6 meses",
  year: "2023",
}

const results = [
  "Aumento de 500% no tráfego orgânico em 24 meses",
  "Melhoria de 85% nas posições para palavras-chave principais",
  "Crescimento de 300% nas conversões orgânicas",
  "Redução de 60% no custo de aquisição de clientes",
  "Aumento de 250% na visibilidade da marca",
]

export default function OtimizacaoSEOPage() {
  return (
    <PageTransition>
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
              Otimização <span className="text-kanoe-beige">SEO</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Estratégia completa de SEO para a TechStore, resultando em um aumento expressivo no tráfego orgânico e nas conversões.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Visão Geral do Projeto</h2>
              <p className="text-gray-300 mb-6">
                A TechStore, uma loja online de produtos tecnológicos, enfrentava desafios para aumentar sua visibilidade
                orgânica e atrair mais clientes qualificados através das buscas. O site tinha bons produtos e preços
                competitivos, mas não estava bem posicionado nos resultados de pesquisa.
              </p>
              <p className="text-gray-300 mb-8">
                Nosso objetivo foi desenvolver e implementar uma estratégia abrangente de SEO, focando em otimização
                técnica, conteúdo relevante e construção de autoridade para melhorar o posicionamento do site e aumentar
                o tráfego orgânico qualificado.
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Resultados</h2>
              <p className="text-gray-300 mb-6">
                A implementação da estratégia de SEO resultou em melhorias significativas em diversos
                indicadores-chave:
              </p>
              <ul className="space-y-4">
                {results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                      <Check className="h-5 w-5 text-kanoe-beige" />
                    </div>
                    <p className="text-gray-300">{result}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                >
                  <Link href="/fale-conosco">Quero um Projeto Como Este</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Resultados do Projeto"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para melhorar seu posicionamento?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a aumentar sua visibilidade orgânica e atrair mais clientes qualificados.
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
                <Link href="/portfolio">Ver Mais Projetos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}