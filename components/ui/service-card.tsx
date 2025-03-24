"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { HelpCircle, LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon?: LucideIcon
  color: string
  link: string
}

export default function ServiceCard({ title, description, icon: IconComponent, color, link }: ServiceCardProps) {
  // Use the provided icon or fallback to HelpCircle
  const Icon = IconComponent || HelpCircle;
  
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="bg-black/50 border-gray-800 overflow-hidden group hover:border-kanoe-green-dark/50 transition-colors h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div
            className={`w-14 h-14 rounded-lg ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-kanoe-beige">{title}</h3>
          <p className="text-gray-400 mb-6 flex-grow">{description}</p>
          <Button
            asChild
            variant="outline"
            className="mt-auto border-kanoe-green-dark/50 text-kanoe-beige hover:bg-kanoe-green-dark/10"
          >
            <Link href={link}>Saiba mais</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

