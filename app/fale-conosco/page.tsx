"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, Send, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Popup } from "@/components/ui/popup"
import SectionHeading from "@/components/ui/section-heading"

const services = [
  "Marketing Digital",
  "Desenvolvimento Web",
  "Desenvolvimento de Apps",
  "SEO",
  "Redes Sociais",
  "Análise de Dados",
  "Outro",
]

const budgetRanges = ["Até €5.000", "€5.000 - €10.000", "€10.000 - €20.000", "€20.000 - €50.000", "Acima de €50.000"]

const howDidYouFindUs = ["Pesquisa no Google", "Redes Sociais", "Indicação", "Evento", "Outro"]

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  clientName: string
  description: string
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, clientName, description }) => {
  return (<div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors">
      <h3 className="text-lg font-bold mb-4 text-kanoe-beige">{clientName}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-md font-semibold text-gray-300 mb-2">Antes</h4>
          <Image
            src={beforeImage || "/placeholder.svg"}
            alt="Antes"
            width={500}
            height={300}
            className="rounded-md object-cover aspect-video"
          />
        </div>
        <div>
          <h4 className="text-md font-semibold text-gray-300 mb-2">Depois</h4>
          <Image
            src={afterImage || "/placeholder.svg"}
            alt="Depois"
            width={500}
            height={300}
            className="rounded-md object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  )
}

export default function FaleConoscoPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    message: "",
    howDidYouFindUs: "",
    newsletter: false,
    termsAccepted: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleRadioChange = (value: string, field: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))

    // Clear error when field is edited
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (checked: boolean, field: string) => {
    setFormState((prev) => ({ ...prev, [field]: checked }))

    // Clear error when field is edited
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleServiceChange = (checked: boolean, service: string) => {
    setFormState((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, service]
        : prev.services.filter((s) => s !== service),
    }))

    // Clear error when field is edited
    if (errors.services) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.services
        return newErrors
      })
    }
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 1) {
      if (!formState.name.trim()) newErrors.name = "Nome é obrigatório"
      if (!formState.email.trim()) newErrors.email = "Email é obrigatório"
      else if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = "Email inválido"
      if (!formState.phone.trim()) newErrors.phone = "Telefone é obrigatório"
      else if (!/^(?:\+351|00351)?(?:2[0-9]{8}|9[1236][0-9]{7})$/.test(formState.phone.replace(/\s+/g, ''))) {
        newErrors.phone = "Formato de telefone inválido. Use formato português: 2xx xxx xxx ou 9xx xxx xxx"
      }
    }

    if (step === 2) {
      if (formState.services.length === 0) newErrors.services = "Selecione pelo menos um serviço"
      if (!formState.budget) newErrors.budget = "Selecione um orçamento"
    }

    if (step === 3) {
      if (!formState.message.trim()) newErrors.message = "Mensagem é obrigatória"
      if (!formState.termsAccepted) newErrors.termsAccepted = "Você precisa aceitar os termos"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(3)) return

    setIsSubmitting(true)

    try {
      console.log("Enviando formulário...", formState)
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erro ao enviar formulário")
      }

      console.log("Formulário enviado com sucesso!")
      setIsSuccess(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setCurrentStep(1)
        setErrors({})
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          services: [],
          budget: "",
          timeline: "",
          message: "",
          howDidYouFindUs: "",
          newsletter: false,
          termsAccepted: false,
        })
      }, 5000)
    } catch (error) {
      console.error("Erro detalhado ao enviar formulário:", error)
      alert(`Erro ao enviar formulário: ${error instanceof Error ? error.message : "Erro desconhecido"}. Por favor, tente novamente.`)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              Fale <span className="text-kanoe-beige">Conosco</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vamos conversar sobre como podemos ajudar a transformar seu negócio com nossas soluções digitais.
            </p>
          </div>
        </div>

        <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 md:p-12">
              {!isSuccess ? (
                <div>
                  <div className="flex justify-between mb-8">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                            currentStep >= step ? "bg-kanoe-green-dark text-kanoe-beige" : "bg-gray-800 text-gray-400"
                          }`}
                        >
                          {currentStep > step ? <Check className="h-5 w-5" /> : step}
                        </div>
                        <span className={`text-sm ${currentStep >= step ? "text-kanoe-beige" : "text-gray-400"}`}>
                          {step === 1 ? "Informações" : step === 2 ? "Projeto" : "Mensagem"}
                        </span>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold mb-6 text-kanoe-beige">Informações Pessoais</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-kanoe-beige flex items-center">
                              Nome Completo <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Seu nome completo"
                              className={`bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige ${
                                errors.name ? "border-red-500" : ""
                              }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-kanoe-beige flex items-center">
                              Email <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="Seu email"
                              className={`bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige ${
                                errors.email ? "border-red-500" : ""
                              }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-kanoe-beige flex items-center">
                              Telefone <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="Seu telefone"
                              className={`bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige ${
                                errors.phone ? "border-red-500" : ""
                              }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-kanoe-beige">
                              Empresa
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              placeholder="Nome da sua empresa"
                              className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website" className="text-kanoe-beige">
                            Website
                          </Label>
                          <Input
                            id="website"
                            name="website"
                            value={formState.website}
                            onChange={handleChange}
                            placeholder="https://seusite.com"
                            className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-kanoe-beige">Como nos encontrou?</Label>
                          <RadioGroup
                            value={formState.howDidYouFindUs}
                            onValueChange={(value) => handleRadioChange(value, "howDidYouFindUs")}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                          >
                            {howDidYouFindUs.map((option) => (
                              <div key={option} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={option}
                                  id={`howDidYouFindUs-${option}`}
                                  className="border-kanoe-green-dark text-kanoe-beige"
                                />
                                <Label htmlFor={`howDidYouFindUs-${option}`} className="text-gray-300">
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                          >
                            Próximo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-4">
                          <Label>Quais serviços você está procurando?</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <div key={service} className="flex items-center space-x-2">
                                <Checkbox
                                  id={service}
                                  checked={formState.services.includes(service)}
                                  onCheckedChange={(checked) => handleServiceChange(checked as boolean, service)}
                                />
                                <Label htmlFor={service} className="cursor-pointer">
                                  {service}
                                </Label>
                              </div>
                            ))}
                          </div>
                          {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
                        </div>

                        <div className="space-y-4">
                          <Label className="text-kanoe-beige flex items-center">
                            Qual é o seu orçamento aproximado? <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <RadioGroup
                            value={formState.budget}
                            onValueChange={(value) => handleRadioChange(value, "budget")}
                            className="grid grid-cols-1 md:grid-cols-2 gap-3"
                          >
                            {budgetRanges.map((range) => (
                              <div key={range} className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value={range}
                                  id={`budget-${range}`}
                                  className="border-kanoe-green-dark text-kanoe-beige"
                                />
                                <Label htmlFor={`budget-${range}`} className="text-gray-300">
                                  {range}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timeline" className="text-kanoe-beige">
                            Prazo para o projeto
                          </Label>
                          <Input
                            id="timeline"
                            name="timeline"
                            value={formState.timeline}
                            onChange={handleChange}
                            placeholder="Ex: 3 meses, até dezembro, etc."
                            className="bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige"
                          />
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10"
                          >
                            Voltar
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                          >
                            Próximo
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-2xl font-bold mb-6 text-kanoe-beige">Detalhes do Projeto</h2>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-kanoe-beige flex items-center">
                            Conte-nos mais sobre o seu projeto <span className="text-red-500 ml-1">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Descreva seu projeto, objetivos, prazos e outras informações relevantes..."
                            rows={8}
                            className={`bg-black/50 border-kanoe-green-dark/30 focus:border-kanoe-beige ${
                              errors.message ? "border-red-500" : ""
                            }`}
                          />
                          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="newsletter"
                            checked={formState.newsletter}
                            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, "newsletter")}
                            className="border-kanoe-green-dark data-[state=checked]:bg-kanoe-green-dark data-[state=checked]:text-kanoe-beige"
                          />
                          <Label htmlFor="newsletter" className="text-gray-300">
                            Desejo receber a newsletter com novidades e conteúdos exclusivos
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="termsAccepted"
                            checked={formState.termsAccepted}
                            onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, "termsAccepted")}
                            className={`border-kanoe-green-dark data-[state=checked]:bg-kanoe-green-dark data-[state=checked]:text-kanoe-beige mt-1 ${
                              errors.termsAccepted ? "border-red-500" : ""
                            }`}
                          />
                          <div>
                            <Label htmlFor="termsAccepted" className="text-gray-300 flex items-center">
                              Concordo com a{" "}
                              <Link href="/politica-de-privacidade" className="text-kanoe-beige mx-1 hover:underline">
                                Política de Privacidade
                              </Link>{" "}
                              e os{" "}
                              <Link href="/termos-de-uso" className="text-kanoe-beige mx-1 hover:underline">
                                Termos de Uso
                              </Link>{" "}
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="border-kanoe-beige/50 text-kanoe-beige hover:bg-kanoe-beige/10"
                          >
                            Voltar
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
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
                                Enviar Solicitação
                              </span>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-kanoe-green-dark/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10 text-kanoe-beige" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-kanoe-beige">Solicitação Enviada com Sucesso!</h2>
                  <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                    Obrigado por entrar em contato conosco. Nossa equipe analisará sua solicitação e retornará em breve
                    com uma proposta personalizada.
                  </p>
                  <Button
                    asChild
                    className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
                  >
                    <Link href="/">Voltar para a Home</Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Antes e Depois da Kanoê"
            subtitle="Veja como transformamos a presença digital de nossos clientes e os resultados que alcançamos juntos."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=2069&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop"
              clientName="TechSolutions"
              description="Redesign completo do site corporativo, resultando em um aumento de 150% nas conversões."
            />

            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2370&auto=format&fit=crop"
              clientName="FashionStore"
              description="Implementação de e-commerce otimizado que aumentou as vendas online em 200%."
            />

            <BeforeAfter
              beforeImage="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?q=80&w=2074&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2374&auto=format&fit=crop"
              clientName="CaféArtesanal"
              description="Estratégia de redes sociais que aumentou o engajamento em 300% e as vendas em 75%."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Por que escolher a Kanoê?"
            subtitle="Descubra como podemos ajudar a transformar seu negócio com nossas soluções digitais personalizadas."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-kanoe-beige">Expertise Comprovada</h3>
              <p className="text-gray-400">
                Com mais de 10 anos de experiência no mercado, nossa equipe de especialistas possui o conhecimento e a
                habilidade necessários para entregar projetos de alta qualidade.
              </p>
              <Popup
                trigger={
                  <Button variant="link" className="text-kanoe-beige p-0 h-auto mt-4 hover:text-kanoe-green-dark">
                    Saiba mais <Info className="h-4 w-4 ml-1" />
                  </Button>
                }
                title="Expertise Comprovada"
              >
                <p className="text-gray-300 mb-4">
                  Nossa equipe é formada por profissionais com vasta experiência em diversas áreas do marketing digital
                  e desenvolvimento. Trabalhamos com as mais recentes tecnologias e metodologias para garantir
                  resultados excepcionais.
                </p>
                <p className="text-gray-300">
                  Já atendemos mais de 200 clientes em diferentes setores, o que nos permite entender profundamente os
                  desafios específicos de cada indústria e oferecer soluções personalizadas e eficazes.
                </p>
              </Popup>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-kanoe-beige">Soluções Personalizadas</h3>
              <p className="text-gray-400">
                Desenvolvemos estratégias e soluções sob medida para atender às necessidades específicas do seu negócio,
                garantindo resultados efetivos e duradouros.
              </p>
              <Popup
                trigger={
                  <Button variant="link" className="text-kanoe-beige p-0 h-auto mt-4 hover:text-kanoe-green-dark">
                    Saiba mais <Info className="h-4 w-4 ml-1" />
                  </Button>
                }
                title="Soluções Personalizadas"
              >
                <p className="text-gray-300 mb-4">
                  Não acreditamos em soluções genéricas. Cada negócio é único, com desafios e objetivos específicos. Por
                  isso, desenvolvemos estratégias totalmente personalizadas, baseadas em uma análise profunda do seu
                  negócio, mercado e concorrência.
                </p>
                <p className="text-gray-300">
                  Nossa abordagem consultiva nos permite entender suas necessidades reais e criar soluções que não
                  apenas atendem, mas superam suas expectativas, gerando resultados concretos e mensuráveis.
                </p>
              </Popup>
            </div>

            <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-8 hover:border-kanoe-beige/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-kanoe-beige">Resultados Mensuráveis</h3>
              <p className="text-gray-400">
                Trabalhamos com foco em resultados mensuráveis, utilizando métricas e análises detalhadas para otimizar
                continuamente nossas estratégias.
              </p>
              <Popup
                trigger={
                  <Button variant="link" className="text-kanoe-beige p-0 h-auto mt-4 hover:text-kanoe-green-dark">
                    Saiba mais <Info className="h-4 w-4 ml-1" />
                  </Button>
                }
                title="Resultados Mensuráveis"
              >
                <p className="text-gray-300 mb-4">
                  Acreditamos que o sucesso deve ser mensurável. Por isso, definimos KPIs claros desde o início do
                  projeto e implementamos ferramentas de análise avançadas para monitorar o desempenho em tempo real.
                </p>
                <p className="text-gray-300">
                  Fornecemos relatórios detalhados e transparentes, permitindo que você acompanhe o progresso e o ROI de
                  seus investimentos. Nossa abordagem orientada por dados nos permite identificar oportunidades de
                  otimização e maximizar os resultados.
                </p>
              </Popup>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-kanoe-green-darker/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="O que nossos clientes dizem"
            subtitle="Veja o que nossos clientes têm a dizer sobre nosso trabalho e os resultados que alcançamos juntos."
          />

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
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
                  Nosso e-commerce teve um aumento de 200% nas vendas após a implementação das estratégias
                  recomendadas."
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
                <Link href="/contato">Entre em Contato</Link>
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

