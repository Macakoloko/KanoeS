import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-kanoe-green-dark/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="relative">
                <Image 
                  src="http://res.cloudinary.com/djzjuvfzr/image/upload/v1742573085/images/logo-branca.webp" 
                  alt="Kanoê Digital" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Transformando negócios através de soluções digitais inovadoras e estratégias de marketing eficientes.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-kanoe-beige transition-colors p-2 bg-kanoe-green-darker/30 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-kanoe-beige transition-colors p-2 bg-kanoe-green-darker/30 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-kanoe-beige transition-colors p-2 bg-kanoe-green-darker/30 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-kanoe-beige transition-colors p-2 bg-kanoe-green-darker/30 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6 text-kanoe-beige">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/servicos/marketing-digital"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/desenvolvimento-web"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/desenvolvimento-apps"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Desenvolvimento de Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/seo"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/redes-sociais"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Redes Sociais
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6 text-kanoe-beige">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/fale-conosco"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="text-gray-400 hover:text-kanoe-beige transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-4 w-4 text-kanoe-green-dark" />
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-6 text-kanoe-beige">Newsletter</h3>
            <p className="text-gray-400 mb-4">Inscreva-se para receber nossas novidades e conteúdos exclusivos.</p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-kanoe-green-darker/20 border-kanoe-green-dark/30 focus:border-kanoe-beige"
              />
              <Button className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker">Inscrever-se</Button>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-lg mb-4 text-kanoe-beige">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-kanoe-green-dark mt-0.5" />
                  <span className="text-gray-400">contato@kanoe.digital</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-kanoe-green-dark mt-0.5" />
                  <span className="text-gray-400">+351 936 356 199</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-kanoe-green-dark mt-0.5" />
                  <span className="text-gray-400">Portugal (100% Digital)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-kanoe-green-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Kanoê Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/politica-de-privacidade"
              className="text-gray-500 hover:text-kanoe-beige text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="text-gray-500 hover:text-kanoe-beige text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

