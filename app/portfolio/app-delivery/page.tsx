import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Globe, Zap, Users, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "../../../components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const projectDetails = {
  client: "FoodExpress",
  industry: "Alimentação e Delivery",
  services: ["Desenvolvimento de Apps", "Design UX/UI", "Sistemas de Gestão", "Integrações"],
  duration: "4 meses",
  year: "2023",
}

const results = [
  "Aumento de 350% no número de pedidos online",
  "Redução de 60% no tempo de entrega",
  "Crescimento de 220% na base de clientes ativos",
  "Melhoria de 80% na satisfação dos clientes",
  "Expansão para 5 novas cidades em 3 meses",
]

export default function AppDeliveryPage() {
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
              App de <span className="text-kanoe-beige">Delivery</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Desenvolvimento de um aplicativo de delivery completo para a FoodExpress, com foco em experiência do
              usuário, eficiência operacional e escalabilidade.
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
                src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2274&auto=format&fit=crop"
                alt="App de Delivery"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">O Desafio</h2>
              <p className="text-gray-300 mb-6">A FoodExpress enfrentava diversos desafios com seu sistema de delivery:</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Sistema baseado em pedidos por telefone, ineficiente e propenso a erros</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Alta dependência de plataformas de terceiros com taxas elevadas</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Dificuldade em gerenciar pedidos em horários de pico</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Falta de dados para análise e tomada de decisões estratégicas</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">Limitações para expansão geográfica e crescimento do negócio</p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-kanoe-beige">Nossa Solução</h2>
              <p className="text-gray-300 mb-6">
                Desenvolvemos uma solução completa para atender às necessidades da FoodExpress:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Aplicativo de delivery próprio para iOS e Android com design atraente e intuitivo
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Painel administrativo completo para gerenciamento de pedidos, cardápios e entregas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Sistema de rastreamento em tempo real para clientes e gestores
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Integração com sistemas de pagamento, gestão de estoque e financeiro
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-kanoe-green-dark/20 rounded-full p-1">
                    <Check className="h-5 w-5 text-kanoe-beige" />
                  </div>
                  <p className="text-gray-300">
                    Dashboard analítico com métricas e insights para tomada de decisões
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
            subtitle="Seguimos uma metodologia estruturada para garantir o sucesso do desenvolvimento do aplicativo de delivery da FoodExpress."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">1. Descoberta</h3>
              <p className="text-gray-400">
                Realizamos uma análise detalhada do negócio, fluxos operacionais e necessidades específicas da
                empresa para definir os requisitos do aplicativo.
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
                Realizamos testes rigorosos, otimizações finais e lançamos o aplicativo, com monitoramento
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
                O desenvolvimento do aplicativo de delivery da FoodExpress resultou em melhorias significativas em diversos
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
                src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2274&auto=format&fit=crop"
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
                  alt="Roberto Silva"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-kanoe-beige">Roberto Silva</h3>
                <p className="text-kanoe-green-dark">CEO, FoodExpress</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-300 italic">
              "O aplicativo de delivery desenvolvido pela Kanoê transformou completamente nosso negócio. Conseguimos reduzir nossa dependência de plataformas de terceiros, melhorar a experiência dos nossos clientes e aumentar significativamente nossas vendas. A equipe foi extremamente profissional e atenciosa durante todo o processo, entregando um produto que superou todas as nossas expectativas."
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
              <p className="text-gray-300">Redesign Site Corporativo</p>
            </div>
            <Button
              asChild
              className="mt-4 md:mt-0 bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio/redesign-site-corporativo">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para desenvolver seu aplicativo de delivery?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar seu negócio com uma solução personalizada.
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