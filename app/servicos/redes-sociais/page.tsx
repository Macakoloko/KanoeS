"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Instagram, Facebook, Linkedin, Twitter, Users, TrendingUp, BarChart, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Aumento do engajamento com seu público-alvo",
  "Fortalecimento da presença da marca nas redes sociais",
  "Geração de leads qualificados e aumento das conversões",
  "Construção de relacionamento com clientes e prospects",
  "Monitoramento da reputação online da marca",
  "Análise de resultados e otimização contínua das estratégias",
]

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-gradient-to-br from-blue-600 to-blue-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    color: "bg-gradient-to-br from-blue-700 to-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "bg-gradient-to-br from-blue-400 to-blue-500",
  },
]

const services = [
  {
    title: "Gestão de Redes Sociais",
    description:
      "Gerenciamento completo das suas redes sociais, incluindo criação de conteúdo, publicação e interação com seguidores.",
    icon: Users,
  },
  {
    title: "Criação de Conteúdo",
    description:
      "Produção de conteúdo relevante e engajador para suas redes sociais, incluindo textos, imagens e vídeos de alta qualidade que representam sua marca.",
    icon: Camera,
  },
  {
    title: "Campanhas Pagas",
    description:
      "Criação e gestão de campanhas publicitárias nas redes sociais para ampliar o alcance e gerar resultados mensuráveis.",
    icon: TrendingUp,
  },
  {
    title: "Análise de Resultados",
    description:
      "Monitoramento e análise detalhada do desempenho das suas redes sociais para otimizar estratégias e maximizar resultados.",
    icon: BarChart,
  },
]

export default function RedesSociaisPage() {
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
                Gestão de <span className="text-kanoe-beige">Redes Sociais</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Estratégias personalizadas para engajar seu público, fortalecer sua marca e gerar resultados concretos
                nas redes sociais.
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
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop"
                  alt="Redes Sociais"
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

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Plataformas que Trabalhamos"
            subtitle="Desenvolvemos estratégias personalizadas para as principais redes sociais, adaptadas às necessidades específicas do seu negócio."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${platform.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <platform.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-kanoe-beige">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefícios da Gestão Profissional de Redes Sociais"
            subtitle="Descubra como nossas estratégias de redes sociais podem transformar a presença online do seu negócio e impulsionar seus resultados."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2370&auto=format&fit=crop"
                alt="Benefícios das Redes Sociais"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Serviços de Redes Sociais"
            subtitle="Oferecemos uma ampla gama de serviços para maximizar sua presença nas redes sociais e alcançar seus objetivos de negócio."
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo"
            subtitle="Seguimos uma metodologia estruturada para garantir resultados consistentes e de alta qualidade para nossos clientes."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Análise e Diagnóstico</h3>
                    <p className="text-gray-400">
                      Analisamos sua presença atual nas redes sociais, concorrência e mercado para identificar
                      oportunidades e desafios.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Análise e Diagnóstico"
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
                      Desenvolvemos uma estratégia personalizada e um calendário editorial alinhados aos seus objetivos
                      de negócio.
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">3. Criação de Conteúdo</h3>
                    <p className="text-gray-400">
                      Produzimos conteúdo relevante e engajador para suas redes sociais, incluindo textos, imagens e
                      vídeos.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop"
                      alt="Criação de Conteúdo"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Gestão e Monitoramento</h3>
                    <p className="text-gray-400">
                      Gerenciamos suas redes sociais, publicamos conteúdo, interagimos com seguidores e monitoramos
                      menções à sua marca.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                      alt="Gestão e Monitoramento"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">5. Análise e Otimização</h3>
                    <p className="text-gray-400">
                      Analisamos o desempenho das suas redes sociais e otimizamos continuamente as estratégias para
                      maximizar os resultados.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2506&auto=format&fit=crop"
                      alt="Análise e Otimização"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua presença nas redes sociais?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossas estratégias de redes sociais podem impulsionar
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

