"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ChevronDown,
  ArrowRight,
  Instagram,
  BarChart,
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Users,
  Award,
  Clock,
  Target,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/ui/service-card"
import ProjectCard from "@/components/ui/project-card"
import SectionHeading from "@/components/ui/section-heading"

interface Service {
  title: string
  description: string
  icon: typeof Megaphone
  color: string
  link: string
}

const services: Service[] = [
  {
    title: "Marketing Digital",
    description:
      "Estratégias personalizadas para aumentar sua visibilidade online e atrair mais clientes qualificados para o seu negócio.",
    icon: Megaphone,
    color: "bg-gradient-to-br from-kanoe-green-dark to-kanoe-green-darker",
    link: "/servicos/marketing-digital",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "Criação de sites e aplicações web modernas, responsivas e otimizadas para conversão e experiência do usuário.",
    icon: Globe,
    color: "bg-gradient-to-br from-kanoe-brown to-black",
    link: "/servicos/desenvolvimento-web",
  },
  {
    title: "Desenvolvimento de Apps",
    description:
      "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android com foco em usabilidade e performance.",
    icon: Smartphone,
    color: "bg-gradient-to-br from-kanoe-green-darker to-black",
    link: "/servicos/desenvolvimento-apps",
  },
  {
    title: "SEO",
    description:
      "Otimização para mecanismos de busca para melhorar seu ranking e atrair tráfego orgânico qualificado para seu site.",
    icon: Search,
    color: "bg-gradient-to-br from-kanoe-brown to-kanoe-green-darker",
    link: "/servicos/seo",
  },
  {
    title: "Redes Sociais",
    description:
      "Gestão profissional de redes sociais para engajar seu público, fortalecer sua marca e gerar resultados concretos.",
    icon: Instagram,
    color: "bg-gradient-to-br from-kanoe-green-dark to-kanoe-brown",
    link: "/servicos/redes-sociais",
  },
  {
    title: "Análise de Dados",
    description:
      "Análise detalhada de métricas e comportamento do usuário para otimizar suas estratégias e maximizar resultados.",
    icon: BarChart,
    color: "bg-gradient-to-br from-kanoe-green-darker to-kanoe-green-dark",
    link: "/servicos/analise-dados",
  },
]

const projects = [
  {
    title: "Redesign Site Corporativo",
    category: "Desenvolvimento Web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop",
    link: "/portfolio/redesign-site-corporativo",
  },
  {
    title: "Campanha de Marketing Digital",
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2370&auto=format&fit=crop",
    link: "/portfolio/campanha-marketing-digital",
  },
  {
    title: "Estratégia de Redes Sociais",
    category: "Redes Sociais",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop",
    link: "/portfolio/estrategia-redes-sociais",
  },
]

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

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateMovement = (axis: "x" | "y", strength = 20) => {
    if (typeof window === 'undefined') return 0;
    
    const windowSize = axis === "x" ? window.innerWidth : window.innerHeight
    const mousePos = axis === "x" ? mousePosition.x : mousePosition.y
    const percentage = mousePos / windowSize - 0.5
    return percentage * strength
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Cursor follower */}
      <div
        className="fixed w-8 h-8 rounded-full bg-kanoe-beige/30 pointer-events-none blur-xl z-50 transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/40 to-black z-10" />

          <motion.div
            className="absolute -inset-[10%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-kanoe-green-dark/20 via-kanoe-green-darker/10 to-transparent"
            style={{
              x: calculateMovement("x", -30),
              y: calculateMovement("y", -30),
            }}
          />

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-kanoe-green-dark/10 blur-3xl"
            style={{
              x: calculateMovement("x", 40),
              y: calculateMovement("y", 40),
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-kanoe-brown/10 blur-3xl"
            style={{
              x: calculateMovement("x", -50),
              y: calculateMovement("y", -50),
            }}
          />
        </div>

        {/* Hero content */}
        <motion.div className="relative z-20 text-center px-4 max-w-4xl mx-auto" style={{ y, opacity }}>
          <motion.p
            className="text-kanoe-beige font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            É hora de transformar o teu negócio!
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block relative">
              <span className="relative z-10">Kanoê</span>
              <span className="absolute -inset-1 bg-kanoe-green-dark/20 blur-lg rounded-lg z-0"></span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transformamos sua presença digital com estratégias inovadoras, design impactante e tecnologia de ponta para
            impulsionar seu negócio.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
            >
              <Link href="/fale-conosco">
                Quero Transformar Meu Negócio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10 px-8 py-6 text-lg"
            >
              <Link href="/portfolio">Conheça Nossos Serviços</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ChevronDown className="h-8 w-8 text-kanoe-beige" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Como podemos transformar o teu negócio?"
            subtitle="É fato que, hoje mais do que nunca, o sucesso de qualquer negócio deve ser muito bem representado com uma forte presença digital. Mas estar online não é assim tão fácil e/ou suficiente – é preciso estratégia, conteúdo de qualidade e ferramentas que automatizam e potencializam as tuas vendas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  color={service.color}
                  link={service.link}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-4 bg-gradient-to-b from-black to-kanoe-green-darker/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Quem somos</h2>
              <p className="text-gray-300 mb-6">
                A Kanoê é uma agência digital focada em resultados. Combinamos estratégia, criatividade e tecnologia
                para transformar negócios através de soluções digitais inovadoras e eficazes.
              </p>
              <p className="text-gray-300 mb-8">
                Nossa equipe multidisciplinar trabalha em conjunto para criar experiências digitais que não apenas
                impressionam, mas também convertem. Acreditamos que o sucesso digital vem da combinação perfeita entre
                estética e funcionalidade.
              </p>
              <Button
                asChild
                className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
              >
                <Link href="/sobre">Conheça Nossa Equipe</Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-kanoe-green-dark/20 to-kanoe-brown/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2370&auto=format&fit=crop"
                  alt="Equipe Kanoê"
                  fill
                  className="object-cover mix-blend-overlay opacity-70"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-kanoe-green-dark/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-kanoe-brown/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Nossos Valores"
            subtitle="Os princípios que guiam nosso trabalho e nosso relacionamento com os clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-kanoe-beige" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10"
            >
              <Link href="/sobre">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-black to-kanoe-green-darker/30 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Nossos Projetos"
            subtitle="Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes a alcançarem seus objetivos digitais."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  link={project.link}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            >
              <Link href="/portfolio">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-kanoe-beige mb-2">10+</div>
              <div className="text-gray-400">Anos de Experiência</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-kanoe-beige mb-2">200+</div>
              <div className="text-gray-400">Projetos Concluídos</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-kanoe-beige mb-2">50+</div>
              <div className="text-gray-400">Clientes Satisfeitos</div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-kanoe-beige mb-2">15+</div>
              <div className="text-gray-400">Especialistas</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kanoe-green-darker to-kanoe-brown/30"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>

        <motion.div
          className="max-w-4xl mx-auto relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar sua presença digital.
          </p>
          <Button
            asChild
            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
          >
            <Link href="/fale-conosco">
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

