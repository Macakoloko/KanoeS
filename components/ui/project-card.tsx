"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  link: string
}

export default function ProjectCard({ title, category, image, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="text-kanoe-green-dark text-sm font-medium mb-2">{category}</span>
            <h3 className="text-xl font-bold text-kanoe-beige mb-4">{title}</h3>
            <Link
              href={link}
              className="inline-flex items-center gap-2 text-white hover:text-kanoe-beige transition-colors"
            >
              Ver projeto <ExternalLink className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

