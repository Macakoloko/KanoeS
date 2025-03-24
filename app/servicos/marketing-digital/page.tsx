import Image from "next/image"
import Link from "next/link"
import { Check, BarChart, TrendingUp, Users, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Aumento da visibilidade online",
  "Geração de leads qualificados",
  "Maior engajamento com o público",
  "Fortalecimento da marca",
  "Aumento das vendas e conversões",
  "ROI mensurável e transparente",
]

const strategies = [
  {
    title: "Marketing de Conteúdo",
    description: "Criamos conteúdo relevante e valioso para atrair, engajar e converter seu público-alvo.",
    icon: MessageSquare,
  },
  {
    title: "Marketing de Performance",
    description: "Campanhas focadas em resultados mensuráveis com otimização contínua para maximizar o ROI.",
    icon: TrendingUp,
  },
  {
    title: "Marketing de Mídia Social",
    description: "Estratégias personalizadas para cada plataforma social para aumentar o engajamento e conversões.",
    icon: Users,
  },
  {
    title: "Marketing Analítico",
    description: "Análise detalhada de dados para otimizar campanhas e estratégias com base em resultados reais.",
    icon: BarChart,
  },
]

export default function MarketingDigitalPage() {
  return (
    <PageTransition>
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
                Marketing <span className="text-kanoe-beige">Digital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Estratégias personalizadas para aumentar sua visibilidade online, atrair clientes qualificados e
                impulsionar seus resultados.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Marketing Digital"
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
            title="Benefícios do Marketing Digital"
            subtitle="Descubra como nossas estratégias de marketing digital podem transformar seu negócio e impulsionar seus resultados."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2506&auto=format&fit=crop"
                alt="Benefícios do Marketing Digital"
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

      {/* Strategies Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossas Estratégias"
            subtitle="Utilizamos uma abordagem integrada e personalizada para criar campanhas de marketing digital que geram resultados reais."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <strategy.icon className="h-7 w-7 text-kanoe-beige" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{strategy.title}</h3>
                <p className="text-gray-400">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo"
            subtitle="Trabalhamos de forma estruturada e transparente para garantir resultados consistentes e de alta qualidade."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Análise e Planejamento</h3>
                    <p className="text-gray-400">
                      Realizamos uma análise detalhada do seu negócio, mercado e concorrência para desenvolver uma
                      estratégia personalizada.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop"
                      alt="Análise e Planejamento"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">2. Implementação</h3>
                    <p className="text-gray-400">
                      Executamos a estratégia com precisão, utilizando as melhores práticas e ferramentas do mercado.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Implementação"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">3. Monitoramento e Análise</h3>
                    <p className="text-gray-400">
                      Monitoramos constantemente o desempenho das campanhas e analisamos os resultados para identificar
                      oportunidades de otimização.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Monitoramento e Análise"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Otimização e Escala</h3>
                    <p className="text-gray-400">
                      Com base nos dados coletados, otimizamos continuamente as campanhas para maximizar os resultados e
                      escalamos as estratégias de sucesso.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                      alt="Otimização e Escala"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para impulsionar seus resultados?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossas estratégias de marketing digital podem
              transformar seu negócio.
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
    </PageTransition>
  )
}

