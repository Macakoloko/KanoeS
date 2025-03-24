"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Serviços",
    path: "/servicos",
    submenu: [
      { name: "Marketing Digital", path: "/servicos/marketing-digital" },
      { name: "Desenvolvimento Web", path: "/servicos/desenvolvimento-web" },
      { name: "Desenvolvimento de Apps", path: "/servicos/desenvolvimento-apps" },
      { name: "SEO", path: "/servicos/seo" },
      { name: "Redes Sociais", path: "/servicos/redes-sociais" },
      { name: "Análise de Dados", path: "/servicos/analise-dados" },
    ],
  },
  { name: "Sobre", path: "/sobre" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Contato", path: "/contato" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleSubmenu = (name: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault() // Prevent navigation when clicking the dropdown toggle
      e.stopPropagation() // Stop event from bubbling up
    }

    if (openSubmenu === name) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(name)
    }
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="http://res.cloudinary.com/djzjuvfzr/image/upload/v1742573085/images/logo-branca.webp" 
              alt="Kanoê Digital" 
              width={120} 
              height={40} 
              className="object-contain" 
            />
          </motion.div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <div className="relative flex items-center h-full group">
                    <button
                      className={`flex items-center gap-1 text-sm font-medium hover:text-kanoe-beige transition-colors mt-[1px] ${
                        isActive(link.path) ? "text-kanoe-beige" : "text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform group-hover:rotate-180`}
                      />
                    </button>
                    <div
                      className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-md bg-black/90 backdrop-blur-md border border-kanoe-green-dark/30 shadow-lg shadow-kanoe-green-dark/20 overflow-hidden z-50 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
                      style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}
                    >
                      <div className="py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.path}
                            className={`block px-4 py-3 text-sm hover:bg-kanoe-green-dark/20 transition-colors ${
                              pathname === sublink.path ? "text-kanoe-beige bg-kanoe-green-dark/10" : "text-white"
                            }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`text-sm font-medium hover-underline ${
                      isActive(link.path) ? "text-kanoe-beige" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <Button
            asChild
            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
          >
            <Link href="/fale-conosco">Fale Conosco</Link>
          </Button>
        </div>

        <Button
          ref={menuButtonRef}
          variant="ghost"
          size="icon"
          className="lg:hidden relative z-[60]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-center items-center gap-8 lg:hidden overflow-y-auto"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col gap-6 items-center w-full max-w-md px-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="w-full text-center">
                    {link.submenu ? (
                      <div className="flex flex-col items-center">
                        <button
                          className={`text-xl font-medium mb-2 flex items-center gap-2 ${
                            isActive(link.path) ? "text-kanoe-beige" : "text-white"
                          }`}
                          onClick={(e) => toggleSubmenu(link.name, e)}
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${openSubmenu === link.name ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex flex-col gap-3 mb-4 w-full"
                            >
                              {link.submenu.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.path}
                                  className={`text-base ${
                                    pathname === sublink.path ? "text-kanoe-beige" : "text-white/80"
                                  }`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className={`text-xl font-medium ${isActive(link.path) ? "text-kanoe-beige" : "text-white"}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <Button
                asChild
                className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20 px-8 py-6 text-lg"
              >
                <Link href="/fale-conosco" onClick={() => setIsMenuOpen(false)}>Fale Conosco</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

