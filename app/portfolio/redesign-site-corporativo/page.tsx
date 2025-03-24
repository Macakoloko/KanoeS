import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "../../../components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "TechSolutions",
  industry: "Tecnologia",
  services: ["Desenvolvimento Web", "Design UX/UI", "SEO"],
  duration: "3 meses",
  year: "2023",
}

const results = [
  "Aumento de 150% nas conversões",
  "Redução de 40% na taxa de rejeição",
  "Aumento de 80% no tempo médio de permanência",
  "Melhoria de 60% na velocidade de carregamento",
  "Crescimento de 200% no tráfego orgânico",
]

export default function RedesignSiteCorporativoPage() {
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
              Redesign <span className="text-kanoe-beige">Site Corporativo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Transformação completa do site corporativo da TechSolutions, com foco em experiência do usuário, conversão
              e performance.
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
                A TechSolutions, empresa líder em soluções de tecnologia, enfrentava desafios com seu site corporativo
                antigo, que não refletia adequadamente a inovação e qualidade de seus produtos e serviços. O site
                apresentava problemas de usabilidade, baixa taxa de conversão e performance insatisfatória.
              </p>
              <p className="text-gray-300 mb-8">
                Nosso objetivo foi criar um novo site corporativo moderno, responsivo e otimizado para conversão, que
                refletisse a identidade da marca e proporcionasse uma experiência excepcional aos usuários.
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

            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop"
                alt="Redesign Site Corporativo"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">O Desafio</h2>
              <p className="text-gray-300 mb-6">A TechSolutions enfrentava diversos desafios com seu site antigo:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Design desatualizado que não refletia a identidade moderna da marca</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Experiência do usuário confusa e pouco intuitiva</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Baixa performance e tempo de carregamento lento</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Taxas de conversão abaixo do esperado</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Falta de otimização para dispositivos móveis</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Nossa Solução</h2>
              <p className="text-gray-300 mb-6">
                Desenvolvemos uma solução completa para atender às necessidades da TechSolutions:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Redesign completo com foco em design moderno e alinhado à identidade da marca
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Arquitetura de informação otimizada para melhorar a navegação e experiência do usuário
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Desenvolvimento responsivo para garantir uma experiência perfeita em todos os dispositivos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Otimização técnica para melhorar a performance e velocidade de carregamento
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Implementação de estratégias de SEO para aumentar a visibilidade nos mecanismos de busca
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo"
            subtitle="Seguimos uma metodologia estruturada para garantir o sucesso do projeto de redesign do site corporativo da TechSolutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">1. Descoberta</h3>
              <p className="text-gray-400">
                Realizamos uma análise detalhada do site existente, pesquisa de mercado e entrevistas com stakeholders
                para entender as necessidades e objetivos.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">2. Design</h3>
              <p className="text-gray-400">
                Criamos wireframes, protótipos e designs visuais modernos e alinhados à identidade da marca, com foco na
                experiência do usuário.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">3. Desenvolvimento</h3>
              <p className="text-gray-400">
                Implementamos o design aprovado utilizando tecnologias modernas, com foco em performance, segurança e
                escalabilidade.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">4. Lançamento</h3>
              <p className="text-gray-400">
                Realizamos testes rigorosos, otimizações finais e lançamos o novo site, com monitoramento contínuo para
                garantir resultados.
              </p>
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
                O redesign do site corporativo da TechSolutions resultou em melhorias significativas em diversos
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
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop"
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

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
                  alt="Ricardo Almeida"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kanoe-beige">Ricardo Almeida</h3>
                <p className="text-kanoe-green-dark">CEO, TechSolutions</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic">
              "A Kanoê transformou completamente nossa presença digital. O novo site não apenas reflete perfeitamente
              nossa identidade de marca, mas também melhorou significativamente nossa taxa de conversão e engajamento
              dos usuários. A equipe foi extremamente profissional e dedicada durante todo o processo, entregando um
              produto final que superou todas as nossas expectativas."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-kanoe-beige">Próximo Projeto</h2>
              <p className="text-gray-300">Campanha de Marketing Digital</p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio/campanha-marketing-digital">
                Ver Próximo Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kanoe-green-darker to-kanoe-brown/30"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para renovar seu site corporativo?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos transformar sua presença digital.
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

