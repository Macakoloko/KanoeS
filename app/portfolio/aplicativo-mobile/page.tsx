"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "MobiTech",
  industry: "Tecnologia",
  services: ["Desenvolvimento de Apps", "Design UX/UI", "Testes", "Manutenção"],
  duration: "5 meses",
  year: "2023",
}

const results = [
  "Mais de 50.000 downloads nos primeiros 3 meses",
  "Avaliação média de 4.8/5 nas lojas de aplicativos",
  "Aumento de 300% na retenção de usuários",
  "Redução de 70% no tempo de execução de tarefas",
  "Crescimento de 250% na receita mensal",
]

export default function AplicativoMobilePage() {
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
            <Link href="/portfolio" className="flex items-center text-kanoe-beige mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para o Portfólio
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Aplicativo <span className="text-kanoe-beige">Mobile</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvimento de um aplicativo mobile inovador para a MobiTech, com foco em experiência do usuário,
              performance e escalabilidade.
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop"
                alt="Aplicativo Mobile"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">O Desafio</h2>
              <p className="text-gray-300 mb-6">A MobiTech enfrentava diversos desafios com seus processos:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Processos internos ineficientes e comunicação fragmentada</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Dificuldade em acompanhar projetos e atender clientes em tempo real</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Sistemas legados com limitações de mobilidade e acessibilidade</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Necessidade de uma solução escalável para acompanhar o crescimento da empresa</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Experiência do usuário inconsistente entre diferentes plataformas</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Nossa Solução</h2>
              <p className="text-gray-300 mb-6">
                Desenvolvemos uma solução completa para atender às necessidades da MobiTech:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Aplicativo mobile nativo para iOS e Android com design moderno e intuitivo
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Integração perfeita com sistemas existentes e APIs de terceiros
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Funcionalidades avançadas como notificações em tempo real, modo offline e sincronização automática
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Painel administrativo web para gerenciamento centralizado
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Arquitetura escalável e segura para suportar o crescimento futuro
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
            subtitle="Seguimos uma metodologia estruturada para garantir o sucesso do desenvolvimento do aplicativo mobile da MobiTech."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">1. Descoberta</h3>
              <p className="text-gray-400">
                Realizamos uma análise detalhada dos requisitos, entrevistas com stakeholders e pesquisa de usuários para
                entender as necessidades e objetivos do aplicativo.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">2. Design</h3>
              <p className="text-gray-400">
                Criamos wireframes, protótipos interativos e designs visuais modernos, com foco na experiência do usuário
                e na identidade da marca.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">3. Desenvolvimento</h3>
              <p className="text-gray-400">
                Implementamos o aplicativo utilizando tecnologias modernas, com foco em performance, segurança e
                escalabilidade, seguindo metodologias ágeis.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">4. Lançamento</h3>
              <p className="text-gray-400">
                Realizamos testes rigorosos, otimizações finais e lançamos o aplicativo nas lojas, com monitoramento
                contínuo e atualizações regulares.
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
                O desenvolvimento do aplicativo mobile da MobiTech resultou em melhorias significativas em diversos
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop"
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
                  alt="Carlos Mendes"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kanoe-beige">Carlos Mendes</h3>
                <p className="text-kanoe-green-dark">CTO, MobiTech</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic">
              "A Kanoê entregou um aplicativo que superou todas as nossas expectativas. A equipe demonstrou um profundo conhecimento técnico e uma compreensão excepcional das nossas necessidades de negócio. O aplicativo não apenas melhorou significativamente nossos processos internos, mas também transformou a maneira como nos comunicamos com nossos clientes. A qualidade do código e do design é impressionante."
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
              <p className="text-gray-300">Campanha de Mídia Paga</p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio/campanha-midia-paga">
                Ver Próximo Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}