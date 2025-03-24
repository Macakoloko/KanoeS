"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, BarChart, Globe, FileText, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Aumento do tráfego orgânico qualificado",
  "Melhoria no posicionamento nos resultados de busca",
  "Maior visibilidade online para sua marca",
  "Redução de custos com publicidade paga",
  "Aumento da credibilidade e autoridade no mercado",
  "Resultados sustentáveis a longo prazo",
]

const strategies = [
  {
    title: "SEO On-Page",
    description:
      "Otimização de elementos internos do site, como conteúdo, meta tags, estrutura de URLs e experiência do usuário.",
    icon: FileText,
  },
  {
    title: "SEO Off-Page",
    description:
      "Estratégias externas ao site, como construção de backlinks de qualidade e menções da marca em sites relevantes.",
    icon: Globe,
  },
  {
    title: "SEO Técnico",
    description:
      "Otimização da estrutura técnica do site, incluindo velocidade, mobile-friendly, indexação e rastreabilidade.",
    icon: Settings,
  },
  {
    title: "Análise e Monitoramento",
    description: "Acompanhamento contínuo de métricas e resultados para otimizar estratégias e maximizar o ROI.",
    icon: BarChart,
  },
]

export default function SEOPage() {
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
                <span className="text-kanoe-beige">SEO</span> - Otimização para Buscas
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Estratégias avançadas de otimização para mecanismos de busca para melhorar seu ranking e atrair tráfego
                orgânico qualificado.
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
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2374&auto=format&fit=crop"
                  alt="SEO"
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
            title="Benefícios do SEO Profissional"
            subtitle="Descubra como nossas estratégias de SEO podem transformar a presença online do seu negócio e impulsionar seus resultados."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?q=80&w=2273&auto=format&fit=crop"
                alt="Benefícios do SEO"
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
            subtitle="Utilizamos uma abordagem integrada e personalizada para criar estratégias de SEO que geram resultados reais e mensuráveis."
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Serviços de SEO"
            subtitle="Oferecemos uma ampla gama de serviços de SEO para atender às necessidades específicas do seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop"
                  alt="Auditoria de SEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Auditoria de SEO</h3>
                <p className="text-gray-400 mb-4">
                  Análise completa do seu site para identificar problemas e oportunidades de otimização para melhorar
                  seu ranking.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/fale-conosco">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2372&auto=format&fit=crop"
                  alt="Otimização de Conteúdo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Otimização de Conteúdo</h3>
                <p className="text-gray-400 mb-4">
                  Criação e otimização de conteúdo relevante e valioso para atrair tráfego orgânico e melhorar seu
                  posicionamento.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/fale-conosco">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                  alt="SEO Local"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">SEO Local</h3>
                <p className="text-gray-400 mb-4">
                  Estratégias específicas para melhorar sua visibilidade em buscas locais e atrair clientes da sua
                  região.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/fale-conosco">Saiba mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo de SEO"
            subtitle="Seguimos uma metodologia estruturada para garantir resultados consistentes e de alta qualidade para nossos clientes."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Análise e Auditoria</h3>
                    <p className="text-gray-400">
                      Realizamos uma análise detalhada do seu site, concorrência e mercado para identificar
                      oportunidades e desafios.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Análise e Auditoria"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">2. Estratégia e Planejamento</h3>
                    <p className="text-gray-400">
                      Desenvolvemos uma estratégia personalizada com base nos insights coletados na fase de análise.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop"
                      alt="Estratégia e Planejamento"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">3. Implementação</h3>
                    <p className="text-gray-400">
                      Executamos as otimizações técnicas, de conteúdo e off-page de acordo com a estratégia definida.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369&auto=format&fit=crop"
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
                  <div className="md:order-2 md:text-left md:pl-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Monitoramento e Análise</h3>
                    <p className="text-gray-400">
                      Monitoramos constantemente o desempenho das otimizações e analisamos os resultados para
                      identificar oportunidades de melhoria.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
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
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">5. Otimização Contínua</h3>
                    <p className="text-gray-400">
                      Com base nos dados coletados, otimizamos continuamente as estratégias para maximizar os resultados
                      e o ROI.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2506&auto=format&fit=crop"
                      alt="Otimização Contínua"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para melhorar seu posicionamento nas buscas?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossas estratégias de SEO podem transformar sua
              presença online.
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

