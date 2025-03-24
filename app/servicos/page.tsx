import Link from "next/link"
import { ArrowRight, BarChart, Globe, Smartphone, Search, Instagram, Megaphone, PenTool, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"
import ServiceCard from "@/components/ui/service-card"

const services = [
  {
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas para aumentar sua visibilidade online e atrair mais clientes qualificados para o seu negócio.",
    iconName: "Megaphone",
    color: "bg-gradient-to-br from-kanoe-green-dark to-kanoe-green-darker",
    link: "/servicos/marketing-digital",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de sites e aplicações web modernas, responsivas e otimizadas para conversão e experiência do usuário.",
    iconName: "Globe",
    color: "bg-gradient-to-br from-kanoe-brown to-black",
    link: "/servicos/desenvolvimento-web",
  },
  {
    title: "Desenvolvimento de Apps",
    description:
      "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android com foco em usabilidade e performance.",
    iconName: "Smartphone",
    color: "bg-gradient-to-br from-kanoe-green-darker to-black",
    link: "/servicos/desenvolvimento-apps",
  },
  {
    title: "SEO",
    description:
      "Otimização para mecanismos de busca para melhorar seu ranking e atrair tráfego orgânico qualificado para seu site.",
    iconName: "Search",
    color: "bg-gradient-to-br from-kanoe-brown to-kanoe-green-darker",
    link: "/servicos/seo",
  },
  {
    title: "Redes Sociais",
    description:
      "Gestão profissional de redes sociais para engajar seu público, fortalecer sua marca e gerar resultados concretos.",
    iconName: "Instagram",
    color: "bg-gradient-to-br from-kanoe-green-dark to-kanoe-brown",
    link: "/servicos/redes-sociais",
  },
  {
    title: "Análise de Dados",
    description:
      "Análise detalhada de métricas e comportamento do usuário para otimizar suas estratégias e maximizar resultados.",
    iconName: "BarChart",
    color: "bg-gradient-to-br from-kanoe-green-darker to-kanoe-green-dark",
    link: "/servicos/analise-dados",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendemos profundamente seu negócio, objetivos e desafios para criar soluções personalizadas.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Desenvolvemos um plano estratégico detalhado com base nos insights coletados na fase de descoberta.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Implementação",
    description: "Executamos a estratégia com precisão, utilizando as melhores práticas e tecnologias do mercado.",
    icon: Globe,
  },
  {
    number: "04",
    title: "Análise e Otimização",
    description: "Monitoramos constantemente os resultados e otimizamos as estratégias para maximizar o ROI.",
    icon: BarChart,
  },
]

export default function ServicosPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex justify-center items-center">
              Nossos <span className="text-kanoe-beige ml-2">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluções digitais completas para transformar seu negócio e impulsionar seus resultados online.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="O que oferecemos"
            subtitle="Combinamos estratégia, criatividade e tecnologia para oferecer soluções digitais completas que impulsionam o crescimento do seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                color={service.color}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nosso Processo"
            subtitle="Trabalhamos de forma estruturada e transparente para garantir resultados consistentes e de alta qualidade para nossos clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mr-4">
                      <step.icon className="h-6 w-6 text-kanoe-beige" />
                    </div>
                    <span className="text-4xl font-bold text-kanoe-green-dark/50">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-kanoe-green-dark/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kanoe-green-darker to-kanoe-brown/30"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
              >
                <Link href="/fale-conosco">Fale com um Especialista</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10 px-8 py-6 text-lg"
              >
                <Link href="/portfolio">Ver Nosso Portfólio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

