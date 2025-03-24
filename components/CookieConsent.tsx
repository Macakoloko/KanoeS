"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  // Start with null and determine actual value after hydration
  const [accepted, setAccepted] = useState<boolean | null>(null)
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    setAccepted(cookieConsent === "accepted")
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setAccepted(true)
  }

  // Don't render anything during hydration or if cookies are accepted
  if (accepted === null || accepted === true) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md z-50 p-4 shadow-lg border-t border-kanoe-green-dark/30">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-white text-sm">
          <p>Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa <a href="/politica-de-privacidade" className="text-kanoe-beige underline">Política de Privacidade</a>.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button 
            variant="outline" 
            className="border-kanoe-beige/20 text-white hover:bg-kanoe-green-dark/20"
            onClick={acceptCookies}
          >
            Entendi
          </Button>
          <Button 
            className="bg-kanoe-green-dark text-kanoe-beige hover:bg-kanoe-green-darker border border-kanoe-beige/20"
            onClick={acceptCookies}
          >
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  )
} 