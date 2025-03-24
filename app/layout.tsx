import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import CookieConsent from "@/components/CookieConsent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kanoê Digital - Agência de Marketing e Desenvolvimento",
  description: "Transformamos negócios através de soluções digitais inovadoras e estratégias de marketing eficientes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Modak&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} hydrated`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  )
}



import './globals.css'