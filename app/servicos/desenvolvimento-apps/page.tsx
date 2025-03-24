import Image from "next/image"
import Link from "next/link"
import { Check, Smartphone, ShoppingBag, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Aplicativos nativos de alta performance",
  "Design moderno e intuitivo",
  "Experiência do usuário otimizada",
  "Integração com sistemas existentes",
  "Suporte e manutenção contínua",
  "Soluções escaláveis e seguras",
]

const technologies = [
  {
    title: "iOS & Android",
    description: "Desenvolvimento nativo para as principais plataformas móveis.",
    icon: Smartphone,
  },
  {
    title: "E-commerce",
    description: "Soluções completas para vendas através de aplicativos.",
    icon: ShoppingBag,
  },
  {
    title: "Corporativo",
    description: "Aplicativos personalizados para processos empresariais.",
    icon: Building,
  },
]

export default function DesenvolvimentoAppsPage() {
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
                Desenvolvimento de <span className="text-kanoe-beige">Apps</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Criação de aplicativos móveis modernos, intuitivos e otimizados para proporcionar a melhor experiência aos seus usuários.
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop"
                  alt="Desenvolvimento de Apps"
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
            title="Benefícios do Desenvolvimento de Apps Profissional"
            subtitle="Descubra como nossos serviços de desenvolvimento de aplicativos podem transformar seu negócio."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2334&auto=format&fit=crop"
                alt="Benefícios do Desenvolvimento de Apps"
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
            title="Nossos Serviços de Desenvolvimento de Apps"
            subtitle="Oferecemos uma ampla gama de serviços de desenvolvimento de aplicativos móveis para atender às necessidades específicas do seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2334&auto=format&fit=crop"
                  alt="Apps para iOS e Android"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Apps para iOS e Android</h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvimento de aplicativos nativos para iOS e Android com foco em performance, usabilidade e experiência do usuário.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-apps/ios-android">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2370&auto=format&fit=crop"
                  alt="Apps de E-commerce"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Apps de E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  Criação de aplicativos de e-commerce completos com integração de pagamentos, gestão de estoque e experiência de compra otimizada.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-apps/e-commerce">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop"
                  alt="Apps Corporativos"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Apps Corporativos</h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvimento de aplicativos corporativos para otimizar processos internos, aumentar a produtividade e melhorar a comunicação.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-apps/corporativos">Saiba mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo de Desenvolvimento"
            subtitle="Seguimos uma metodologia estruturada para garantir que cada aplicativo seja entregue com a mais alta qualidade e dentro do prazo."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Planejamento e UX</h3>
                    <p className="text-gray-400">
                      Entendemos seus objetivos e necessidades para criar uma experiência de usuário intuitiva e eficiente.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop"
                      alt="Planejamento e UX"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">2. Design e Prototipagem</h3>
                    <p className="text-gray-400">
                      Criamos interfaces modernas e atraentes, com protótipos interativos para validação.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2370&auto=format&fit=crop"
                      alt="Design e Prototipagem"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">3. Desenvolvimento</h3>
                    <p className="text-gray-400">
                      Codificação nativa para cada plataforma, seguindo as melhores práticas e padrões de qualidade.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369&auto=format&fit=crop"
                      alt="Desenvolvimento"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Testes e Publicação</h3>
                    <p className="text-gray-400">
                      Testes rigorosos de qualidade e performance antes da publicação nas lojas de aplicativos.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Testes e Publicação"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">5. Suporte e Evolução</h3>
                    <p className="text-gray-400">
                      Monitoramento contínuo, atualizações regulares e suporte técnico para garantir o sucesso do seu aplicativo.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=2370&auto=format&fit=crop"
                      alt="Suporte e Evolução"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para criar seu aplicativo?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossos serviços de desenvolvimento de apps podem
              impulsionar seu negócio.
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

