import Image from "next/image"
import Link from "next/link"
import { Check, Code, Layers, PenTool, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const benefits = [
  "Sites responsivos e otimizados para todos os dispositivos",
  "Design moderno e personalizado para sua marca",
  "Experiência do usuário intuitiva e agradável",
  "Otimização para mecanismos de busca (SEO)",
  "Integração com sistemas e plataformas existentes",
  "Soluções escaláveis que crescem com seu negócio",
]

const technologies = [
  {
    title: "Front-end",
    description: "Desenvolvimento de interfaces modernas e responsivas com as mais recentes tecnologias web.",
    icon: Code,
  },
  {
    title: "Back-end",
    description: "Criação de sistemas robustos e escaláveis para gerenciar dados e lógica de negócios.",
    icon: Database,
  },
  {
    title: "Design UX/UI",
    description: "Design de interfaces intuitivas e atraentes focadas na experiência do usuário.",
    icon: PenTool,
  },
  {
    title: "Arquitetura Web",
    description: "Estruturação de aplicações web complexas com foco em performance e escalabilidade.",
    icon: Layers,
  },
]

export default function DesenvolvimentoWebPage() {
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
                Desenvolvimento <span className="text-kanoe-beige">Web</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Criação de sites e aplicações web modernas, responsivas e otimizadas para conversão e experiência do
                usuário.
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
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop"
                  alt="Desenvolvimento Web"
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
            title="Benefícios do Desenvolvimento Web Profissional"
            subtitle="Descubra como nossos serviços de desenvolvimento web podem transformar a presença online do seu negócio."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop"
                alt="Benefícios do Desenvolvimento Web"
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossas Tecnologias"
            subtitle="Utilizamos as mais modernas tecnologias e frameworks para criar soluções web robustas, escaláveis e de alta performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <tech.icon className="h-7 w-7 text-kanoe-beige" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{tech.title}</h3>
                <p className="text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Serviços de Desenvolvimento Web"
            subtitle="Oferecemos uma ampla gama de serviços de desenvolvimento web para atender às necessidades específicas do seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop"
                  alt="Sites Institucionais"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Sites Institucionais</h3>
                <p className="text-gray-400 mb-4">
                  Criação de sites profissionais que representam a identidade da sua marca e comunicam sua proposta de
                  valor de forma eficaz.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-web/sites-institucionais">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop"
                  alt="E-commerce"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvimento de lojas virtuais completas, seguras e otimizadas para conversão, com integração de
                  pagamentos e gestão de estoque.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-web/e-commerce">Saiba mais</Link>
                </Button>
              </div>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden group hover:border-kanoe-beige/30 transition-colors">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2336&auto=format&fit=crop"
                  alt="Aplicações Web"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Aplicações Web</h3>
                <p className="text-gray-400 mb-4">
                  Criação de aplicações web complexas e sistemas personalizados para automatizar processos e melhorar a
                  eficiência do seu negócio.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10 w-full"
                >
                  <Link href="/servicos/desenvolvimento-web/aplicacoes-web">Saiba mais</Link>
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
            title="Nosso Processo de Desenvolvimento"
            subtitle="Seguimos uma metodologia estruturada para garantir que cada projeto seja entregue com a mais alta qualidade e dentro do prazo."
          />

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-kanoe-green-dark/30 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-kanoe-green-dark transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">1. Descoberta e Planejamento</h3>
                    <p className="text-gray-400">
                      Entendemos profundamente seus objetivos, público-alvo e requisitos para criar um plano detalhado
                      do projeto.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2370&auto=format&fit=crop"
                      alt="Descoberta e Planejamento"
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
                      Criamos wireframes e protótipos interativos para visualizar a estrutura, layout e fluxo de
                      navegação do site.
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
                      Transformamos os designs aprovados em código, utilizando as melhores práticas e tecnologias para
                      garantir performance e segurança.
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">4. Testes e Lançamento</h3>
                    <p className="text-gray-400">
                      Realizamos testes rigorosos para garantir compatibilidade, usabilidade e performance antes de
                      lançar o site ao público.
                    </p>
                  </div>
                  <div className="md:order-1 relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop"
                      alt="Testes e Lançamento"
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
                    <h3 className="text-2xl font-bold mb-3 text-kanoe-beige">5. Suporte e Manutenção</h3>
                    <p className="text-gray-400">
                      Oferecemos suporte contínuo e manutenção para garantir que seu site permaneça atualizado, seguro e
                      funcionando perfeitamente.
                    </p>
                  </div>
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=2370&auto=format&fit=crop"
                      alt="Suporte e Manutenção"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua presença online?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como nossos serviços de desenvolvimento web podem
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

