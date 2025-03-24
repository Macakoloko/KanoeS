"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "../../../components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "EduTech",
  industry: "Educação",
  services: ["Desenvolvimento Web", "Design UX/UI", "E-learning", "Sistemas de Gestão"],
  duration: "6 meses",
  year: "2023",
}

const results = [
  "Aumento de 280% no número de alunos matriculados",
  "Redução de 65% no tempo de administração de cursos",
  "Crescimento de 190% na receita mensal",
  "Melhoria de 85% na satisfação dos usuários",
  "Expansão para 3 novos mercados internacionais",
]

export default function PlataformaCursosOnlinePage() {
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
              Plataforma de <span className="text-kanoe-beige">Cursos Online</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvimento de uma plataforma completa de cursos online para a EduTech, com foco em experiência do
              usuário, escalabilidade e gestão eficiente.
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
                A EduTech, empresa especializada em educação online, enfrentava desafios com sua plataforma de cursos
                limitada, que não suportava o crescimento da empresa e oferecia uma experiência de aprendizado abaixo
                do ideal. A empresa precisava de uma solução robusta que permitisse escalar suas operações e oferecer
                uma experiência de aprendizado excepcional.
              </p>
              <p className="text-gray-300 mb-8">
                Nosso objetivo foi desenvolver uma plataforma de cursos online completa, com design moderno, experiência
                de usuário intuitiva e recursos avançados de gestão, para impulsionar o crescimento da EduTech e
                melhorar a experiência de aprendizado dos alunos.
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
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2374&auto=format&fit=crop"
                alt="Plataforma de Cursos Online"
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
              <p className="text-gray-300 mb-6">A EduTech enfrentava diversos desafios com sua plataforma:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Plataforma limitada que não suportava o crescimento da empresa</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Experiência de aprendizado abaixo do ideal para os alunos</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Processos administrativos manuais e ineficientes</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Falta de recursos avançados de e-learning e engajamento</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Dificuldade em escalar para novos mercados e idiomas</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Nossa Solução</h2>
              <p className="text-gray-300 mb-6">
                Desenvolvemos uma solução completa para atender às necessidades da EduTech:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Plataforma de cursos online robusta e escalável com arquitetura moderna
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Interface intuitiva e responsiva para alunos e professores
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Sistema avançado de gestão de cursos, alunos e pagamentos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Recursos de e-learning como gamificação, certificados e avaliações automáticas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Suporte para múltiplos idiomas e integração com ferramentas de terceiros
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
            subtitle="Seguimos uma metodologia estruturada para garantir o sucesso do desenvolvimento da plataforma de cursos online da EduTech."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">1. Descoberta</h3>
              <p className="text-gray-400">
                Realizamos uma análise detalhada das necessidades educacionais, entrevistas com stakeholders e pesquisa
                com usuários para entender os requisitos da plataforma.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">4. Lançamento</h3>
              <p className="text-gray-400">
                Realizamos testes rigorosos, otimizações finais e lançamos a plataforma, com monitoramento
                contínuo e atualizações regulares para garantir a melhor experiência aos usuários.
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
                O desenvolvimento da plataforma de cursos online da EduTech resultou em melhorias significativas em diversos
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
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2374&auto=format&fit=crop"
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
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
                  alt="Paulo Mendes"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kanoe-beige">Paulo Mendes</h3>
                <p className="text-kanoe-green-dark">CEO, EduTech</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic">
              "A plataforma de cursos online desenvolvida pela Kanoê superou todas as nossas expectativas. A equipe entendeu perfeitamente nossas necessidades e entregou uma solução que não apenas melhorou a experiência de aprendizado dos nossos alunos, mas também simplificou significativamente nossos processos administrativos. O crescimento que experimentamos desde o lançamento da plataforma é prova do excelente trabalho realizado."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-kanoe-beige">Próximo Projeto</h2>
              <p className="text-gray-300">App de Delivery</p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio/app-delivery">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para criar sua plataforma de cursos online?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar sua visão em realidade.
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
    
  )
    </div>
  )}