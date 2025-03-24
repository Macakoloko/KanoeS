"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"

const categories = [
  "Todos",
  "Marketing Digital",
  "Desenvolvimento Web",
  "Desenvolvimento de Apps",
  "SEO",
  "Redes Sociais",
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
  {
    title: "E-commerce Premium",
    category: "Desenvolvimento Web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop",
    link: "/portfolio/ecommerce-premium",
  },
  {
    title: "Otimização SEO",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2374&auto=format&fit=crop",
    link: "/portfolio/otimizacao-seo",
  },
  {
    title: "Aplicativo Mobile",
    category: "Desenvolvimento de Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop",
    link: "/portfolio/aplicativo-mobile",
  },
  {
    title: "Campanha de Mídia Paga",
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    link: "/portfolio/campanha-midia-paga",
  },
  {
    title: "Plataforma de Cursos Online",
    category: "Desenvolvimento Web",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2374&auto=format&fit=crop",
    link: "/portfolio/plataforma-cursos-online",
  },
  {
    title: "App de Delivery",
    category: "Desenvolvimento de Apps",
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2274&auto=format&fit=crop",
    link: "/portfolio/app-delivery",
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    
      <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nosso <span className="text-kanoe-beige">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes a alcançarem seus objetivos
              digitais.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category === activeCategory ? "default" : "outline"}
                className={
                  category === activeCategory
                    ? "bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker"
                    : "border-kanoe-green-dark/30 text-gray-300 hover:bg-kanoe-green-dark/10 hover:text-kanoe-beige"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="O que nossos clientes dizem"
            subtitle="Veja o que nossos clientes têm a dizer sobre nosso trabalho e os resultados que alcançamos juntos."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop"
                    alt="Cliente"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kanoe-beige">Ricardo Almeida</h3>
                  <p className="text-kanoe-green-dark text-sm">CEO, TechSolutions</p>
                </div>
              </div>
              <p className="text-gray-400 italic">
                "A Kanoê transformou completamente nossa presença digital. O novo site e as estratégias de marketing
                implementadas resultaram em um aumento de 150% nas conversões em apenas 3 meses."
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop"
                    alt="Cliente"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kanoe-beige">Mariana Santos</h3>
                  <p className="text-kanoe-green-dark text-sm">Diretora de Marketing, FashionStore</p>
                </div>
              </div>
              <p className="text-gray-400 italic">
                "Trabalhar com a Kanoê foi uma experiência incrível. A equipe é extremamente profissional e dedicada.
                Nosso e-commerce teve um aumento de 200% nas vendas após a implementação das estratégias recomendadas."
              </p>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop"
                    alt="Cliente"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-kanoe-beige">Fernando Costa</h3>
                  <p className="text-kanoe-green-dark text-sm">Fundador, AppMaster</p>
                </div>
              </div>
              <p className="text-gray-400 italic">
                "O aplicativo desenvolvido pela Kanoê superou todas as nossas expectativas. A equipe entendeu
                perfeitamente nossas necessidades e entregou um produto de alta qualidade no prazo e dentro do
                orçamento."
              </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar a impulsionar sua presença digital.
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
                <Link href="/servicos">Conheça Nossos Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

