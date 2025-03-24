import Image from "next/image"
import Link from "next/link"
import { Users, Award, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageTransition from "@/components/ui/page-transition"
import SectionHeading from "@/components/ui/section-heading"

const values = [
  {
    title: "Inovação",
    description: "Buscamos constantemente novas ideias e soluções criativas para os desafios dos nossos clientes.",
    icon: Target,
  },
  {
    title: "Excelência",
    description:
      "Comprometidos com a qualidade e a entrega de resultados excepcionais em todos os projetos que realizamos.",
    icon: Award,
  },
  {
    title: "Transparência",
    description: "Mantemos uma comunicação clara e honesta com nossos clientes em todas as etapas do processo.",
    icon: Users,
  },
  {
    title: "Agilidade",
    description: "Trabalhamos com metodologias ágeis para entregar resultados rápidos e eficientes.",
    icon: Clock,
  },
]

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "200+", label: "Projetos Concluídos" },
  { value: "50+", label: "Clientes Satisfeitos" },
  { value: "15+", label: "Especialistas" },
]

const team = [
  {
    name: "Ana Cecília",
    role: "CEO & Fundadora",
    image: "https://res.cloudinary.com/djzjuvfzr/image/upload/v1742573090/images/Equipe/ana%20cecilia-estrategia-e-desenvolvimento-da-marca.webp",
    bio: "Com mais de 15 anos de experiência em marketing digital e desenvolvimento de negócios, Ana lidera a Kanoê com visão estratégica e paixão por inovação.",
  },
  {
    name: "Gabriel Ferreira",
    role: "Diretor de Tecnologia",
    image: "https://res.cloudinary.com/djzjuvfzr/image/upload/v1742573091/images/Equipe/Gabriel-Ferreira-FundadoreTecnologia-e-webdesign.webp",
    bio: "Especialista em desenvolvimento web e mobile, Gabriel traz mais de 10 anos de experiência em tecnologias de ponta para os projetos da Kanoê.",
  },
  {
    name: "Alexandra Fernandes",
    role: "Copywriting & Vendas",
    image: "https://res.cloudinary.com/djzjuvfzr/image/upload/v1742573089/images/Equipe/alexandra-Fernandes-Copywriting-e-vendas.webp",
    bio: "Com formação em Marketing Digital e MBA em Gestão de Negócios, Alexandra lidera as estratégias de marketing com foco em resultados mensuráveis.",
  },
  {
    name: "Anderson Prestes",
    role: "Designer Gráfico",
    image: "https://res.cloudinary.com/djzjuvfzr/image/upload/v1742573091/images/Equipe/anderson-prestes-designer.png",
    bio: "Designer premiado com mais de 12 anos de experiência, Anderson é responsável pela identidade visual e experiência do usuário nos projetos da Kanoê.",
  },
]

export default function SobrePage() {
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
                Sobre a <span className="text-kanoe-beige">Kanoê</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Somos uma agência de marketing digital e desenvolvimento focada em resultados. Combinamos estratégia,
                criatividade e tecnologia para transformar negócios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                >
                  <Link href="/portfolio">Conheça Nosso Trabalho</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10"
                >
                  <Link href="/contato">Entre em Contato</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop"
                  alt="Equipe Kanoê"
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

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossa História"
            subtitle="Conheça a trajetória da Kanoê e como nos tornamos referência em marketing digital e desenvolvimento."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2370&auto=format&fit=crop"
                alt="Nossa História"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
            </div>

            <div>
              <p className="text-gray-300 mb-6">
                Fundada em 2013, a Kanoê nasceu da paixão por criar soluções digitais inovadoras que realmente geram
                resultados. O que começou como um pequeno estúdio de design e desenvolvimento web, rapidamente se
                expandiu para uma agência de marketing digital completa.
              </p>
              <p className="text-gray-300 mb-6">
                Ao longo dos anos, construímos uma equipe multidisciplinar de especialistas em marketing, design,
                desenvolvimento e estratégia de negócios, todos compartilhando o mesmo compromisso com a excelência e a
                inovação.
              </p>
              <p className="text-gray-300 mb-6">
                Hoje, a Kanoê é reconhecida como uma das principais agências de marketing digital do Brasil, ajudando
                empresas de todos os tamanhos a transformar sua presença digital e alcançar resultados excepcionais.
              </p>
              <p className="text-gray-300">
                Nossa missão é simples: transformar negócios através de soluções digitais inovadoras e estratégias de
                marketing eficientes, sempre com foco em resultados mensuráveis e crescimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossos Valores"
            subtitle="Os princípios que guiam nosso trabalho e nosso relacionamento com os clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-kanoe-beige" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-kanoe-beige mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nossa Equipe"
            subtitle="Conheça os especialistas por trás da Kanoê que trabalham para transformar seu negócio."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl overflow-hidden hover:border-kanoe-beige/30 transition-colors"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-kanoe-beige">{member.name}</h3>
                  <p className="text-kanoe-green-dark mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos trabalhar juntos?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a transformar seu negócio.
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
                <Link href="/portfolio">Ver Nosso Portfólio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

