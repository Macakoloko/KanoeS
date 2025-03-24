"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import SectionHeading from "@/components/ui/section-heading"

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate phone format
    if (formState.phone && !/^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/.test(formState.phone)) {
      return
    }
    
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (<div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-kanoe-green-darker/30 to-black"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="text-kanoe-beige">Contato</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Estamos prontos para ajudar a transformar seu negócio. Entre em contato conosco hoje mesmo.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Email</h3>
              <p className="text-gray-400 mb-4">Envie-nos um email e responderemos o mais breve possível.</p>
              <a href="mailto:contato@kanoe.digital" className="text-kanoe-beige hover:underline">
                contato@kanoe.digital
              </a>
            </motion.div>

            <motion.div
              className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <Phone className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Telefone</h3>
              <p className="text-gray-400 mb-4">Estamos disponíveis de segunda a sexta, das 9h às 18h.</p>
              <a href="tel:+351936356199" className="text-kanoe-beige hover:underline">
                +351 936 356 199
              </a>
            </motion.div>

            <motion.div
              className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-lg bg-kanoe-green-dark/20 flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-kanoe-beige" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-kanoe-beige">Localização</h3>
              <p className="text-gray-400 mb-4">Atendemos em todo território português.</p>
              <address className="text-kanoe-beige not-italic">
                Portugal
                <br />
                100% Digital
              </address>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                title="Envie-nos uma mensagem"
                subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível."
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-kanoe-beige">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-kanoe-beige">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Seu email"
                      required
                      className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-kanoe-beige">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Seu telefone"
                      className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-kanoe-beige">
                      Assunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      required
                      className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-kanoe-beige">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem"
                    required
                    rows={6}
                    className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>

                {isSuccess && (
                  <div className="bg-green-900/20 border border-green-500/30 text-green-400 p-4 rounded-md">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
              </form>
            </div>

            <div>
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2370&auto=format&fit=crop"
                  alt="Nosso Escritório"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-kanoe-beige">Siga-nos nas redes sociais</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-kanoe-beige transition-colors p-3 bg-kanoe-green-darker/30 rounded-full"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-kanoe-beige transition-colors p-3 bg-kanoe-green-darker/30 rounded-full"
                  >
                    <Facebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-kanoe-beige transition-colors p-3 bg-kanoe-green-darker/30 rounded-full"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-kanoe-beige transition-colors p-3 bg-kanoe-green-darker/30 rounded-full"
                  >
                    <Twitter className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Como Chegar"
            subtitle="Estamos localizados em uma região de fácil acesso no coração de São Paulo."
          />

          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2333&auto=format&fit=crop"
              alt="Mapa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-kanoe-green-dark/90 text-white p-6 rounded-lg max-w-md">
                <h3 className="text-xl font-bold mb-2">Kanoê Digital</h3>
                <p className="mb-4">Av. Paulista, 1000, São Paulo, SP, Brasil</p>
                <Button asChild className="bg-kanoe-beige text-kanoe-green-darker hover:bg-kanoe-beige/90">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Ver no Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
    </div>
  )}

