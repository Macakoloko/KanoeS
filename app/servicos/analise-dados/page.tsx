"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, BarChart, PieChart, TrendingUp, LineChart, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Tomada de decisões baseada em dados concretos",
  "Identificação de tendências e oportunidades de mercado",
  "Otimização de campanhas de marketing e vendas",
  "Melhor compreensão do comportamento do cliente",
  "Aumento do ROI em investimentos de marketing",
  "Vantagem competitiva através de insights estratégicos",
]

const services = [
  {
    title: "Análise de Performance Digital",
    description:
      "Análise detalhada do desempenho do seu site, campanhas de marketing e presença digital para identificar oportunidades de melhoria.",
    icon: BarChart,
  },
  {
    title: "Análise de Comportamento do Usuário",
    description:
      "Estudo do comportamento dos usuários no seu site para otimizar a experiência e aumentar as conversões.",
    icon: LineChart,
  },
  {
    title: "Análise de Concorrência",
    description:
      "Monitoramento e análise das estratégias digitais dos seus concorrentes para identificar oportunidades e ameaças.",
    icon: PieChart,
  },
  {
    title: "Dashboards e Relatórios",
    description:
      "Criação de dashboards personalizados e relatórios detalhados para acompanhamento de KPIs e métricas importantes.",
    icon: Database,
  },
]

export default function AnaliseDadosPage() {
  return (
    
      <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Análise de <span className="text-kanoe-beige">Dados</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforme dados em insights estratégicos para otimizar suas estratégias digitais e maximizar
                resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                >
                  <Link href="/fale-conosco">Solicitar Proposta</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10"
                >
                  <Link href="/portfolio">Ver Cases de Sucesso</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                  alt="Análise de Dados"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-kanoe-brown/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefícios da Análise de Dados"
            subtitle="Descubra como a análise de dados pode transformar seu negócio e impulsionar seus resultados digitais."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                alt="Benefícios da Análise de Dados"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>

            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                      <Check className="h-5 w-5 text-kanoe-beige" />
                    </div>
                    <p className="text-lg text-gray-300">{benefit}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                >
                  <Link href="/fale-conosco">Fale com um Especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Serviços de Análise de Dados"
            subtitle="Oferecemos uma ampla gama de serviços de análise de dados para atender às necessidades específicas do seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-kanoe-beige" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Ferramentas que Utilizamos"
            subtitle="Trabalhamos com as melhores ferramentas de análise de dados do mercado para entregar insights precisos e acionáveis."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://www.google.com/images/about/analytics-icon.svg"
                  alt="Google Analytics"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-kanoe-beige">Google Analytics</h3>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://www.google.com/images/about/data-studio-icon.svg"
                  alt="Google Data Studio"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-kanoe-beige">Data Studio</h3>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kanoe-beige">SEMrush</h3>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-kanoe-beige">Hotjar</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo de Análise"
            subtitle="Seguimos uma metodologia estruturada para transformar dados brutos em insights acionáveis e estratégias eficazes."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Coleta de Dados</h3>
                    <p className="text-gray-400">
                      Coletamos dados relevantes de diversas fontes, incluindo seu site, redes sociais, campanhas de
                      marketing e ferramentas de análise.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Coleta de Dados"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">2. Processamento e Análise</h3>
                    <p className="text-gray-400">
                      Processamos e analisamos os dados coletados para identificar padrões, tendências e insights
                      relevantes para o seu negócio.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Processamento e Análise"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">3. Interpretação e Insights</h3>
                    <p className="text-gray-400">
                      Interpretamos os resultados da análise para extrair insights acionáveis que podem ser aplicados à
                      sua estratégia digital.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Interpretação e Insights"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Recomendações Estratégicas</h3>
                    <p className="text-gray-400">
                      Com base nos insights obtidos, desenvolvemos recomendações estratégicas personalizadas para
                      melhorar seu desempenho digital.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Recomendações Estratégicas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">5. Implementação e Monitoramento</h3>
                    <p className="text-gray-400">
                      Implementamos as recomendações e monitoramos continuamente os resultados para otimizar as
                      estratégias e maximizar o ROI.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Implementação e Monitoramento"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar dados em resultados?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossos serviços de análise de dados podem impulsionar
              seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
              >
                <Link href="/fale-conosco">Solicitar Proposta</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10 px-8 py-6 text-lg"
              >
                <Link href="/portfolio">Ver Cases de Sucesso</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

