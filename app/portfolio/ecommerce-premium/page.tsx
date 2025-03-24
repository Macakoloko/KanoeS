"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "../../../components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "FashionStore",
  industry: "Moda e Varejo",
  services: ["Desenvolvimento Web", "Design UX/UI", "E-commerce", "SEO"],
  duration: "4 meses",
  year: "2023",
}

const results = [
  "Aumento de 200% nas vendas online",
  "Redução de 60% na taxa de abandono de carrinho",
  "Aumento de 120% no ticket médio",
  "Melhoria de 70% na experiência do usuário",
  "Crescimento de 150% no tráfego orgânico",
]

export default function EcommercePremiumPage() {
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
              E-commerce <span className="text-kanoe-beige">Premium</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvimento de uma plataforma de e-commerce premium para a FashionStore, com foco em experiência do
              usuário, conversão e performance.
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
                A FashionStore, uma marca de moda em ascensão, enfrentava desafios com sua plataforma de e-commerce
                básica, que limitava o crescimento das vendas online e não oferecia uma experiência premium aos clientes.
                A plataforma apresentava problemas de usabilidade, baixa taxa de conversão e limitações técnicas.
              </p>
              <p className="text-gray-300 mb-8">
                Nosso objetivo foi desenvolver uma plataforma de e-commerce premium, com design sofisticado, experiência
                de compra intuitiva e recursos avançados para impulsionar as vendas online e fortalecer a presença
                digital da marca.
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop"
                alt="E-commerce Premium"
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
              <p className="text-gray-300 mb-6">A FashionStore enfrentava diversos desafios com sua plataforma:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Plataforma básica com limitações técnicas e de design</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Experiência de compra confusa e pouco intuitiva</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Alta taxa de abandono de carrinho</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Falta de recursos avançados de e-commerce</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Dificuldade em escalar as operações online</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Nossa Solução</h2>
              <p className="text-gray-300 mb-6">
                Desenvolvemos uma solução completa para atender às necessidades da FashionStore:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Desenvolvimento de uma plataforma de e-commerce premium com design sofisticado
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Experiência de compra intuitiva e personalizada para diferentes perfis de clientes
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Implementação de recursos avançados como recomendações personalizadas e checkout otimizado
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Integração com sistemas de gestão, logística e pagamentos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Otimização para SEO e performance em dispositivos móveis
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
            subtitle="Seguimos uma metodologia estruturada para garantir o sucesso do desenvolvimento da plataforma de e-commerce premium da FashionStore."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">1. Análise</h3>
              <p className="text-gray-400">
                Realizamos uma análise detalhada do negócio, público-alvo e necessidades específicas da marca para
                definir os requisitos da plataforma.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">2. Design</h3>
              <p className="text-gray-400">
                Criamos wireframes, protótipos e designs visuais sofisticados, alinhados à identidade da marca e
                focados na experiência do usuário.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">3. Desenvolvimento</h3>
              <p className="text-gray-400">
                Implementamos a plataforma utilizando tecnologias modernas, com foco em performance, segurança e
                escalabilidade para suportar o crescimento do negócio.
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">4. Lançamento</h3>
              <p className="text-gray-400">
                Realizamos testes rigorosos, otimizações finais e lançamos a plataforma, com monitoramento contínuo para
                garantir resultados e melhorias constantes.
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
                O desenvolvimento da plataforma de e-commerce premium da FashionStore resultou em melhorias significativas em diversos
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
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop"
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
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop"
                  alt="Mariana Santos"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kanoe-beige">Mariana Santos</h3>
                <p className="text-kanoe-green-dark">Diretora de Marketing, FashionStore</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic">
              "A Kanoê superou todas as nossas expectativas com o desenvolvimento da nossa plataforma de e-commerce. O design sofisticado e a experiência de compra intuitiva transformaram completamente nosso negócio online. Vimos um aumento impressionante nas vendas e uma redução significativa na taxa de abandono de carrinho. A equipe foi extremamente profissional e atenciosa durante todo o processo."
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
              <p className="text-gray-300">Otimização SEO</p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio/otimizacao-seo">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para criar seu e-commerce premium?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos transformar seu negócio online.
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