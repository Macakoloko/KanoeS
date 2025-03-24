"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface BeforeAfterProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  clientName: string
  description: string
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  clientName,
  description,
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  return (
    <div className="bg-black/50 border border-kanoe-green-dark/20 rounded-xl p-6 hover:border-kanoe-beige/30 transition-colors">
      <div
        className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Before Image (Full width) */}
        <div className="absolute inset-0 z-10">
          <Image src={beforeImage || "/placeholder.svg"} alt={`${clientName} - Antes`} fill className="object-cover" />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">{beforeLabel}</div>
        </div>

        {/* After Image (Clipped) */}
        <div className="absolute inset-0 z-20 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <Image
            src={afterImage || "/placeholder.svg"}
            alt={`${clientName} - Depois`}
            fill
            className="object-cover"
            style={{ width: `${100 / (sliderPosition / 100)}%` }}
          />
          <div className="absolute top-4 left-4 bg-kanoe-green-dark/90 text-kanoe-beige px-3 py-1 rounded-md text-sm">
            {afterLabel}
          </div>
        </div>

        {/* Slider */}
        <div
          className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-kanoe-green-dark rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-kanoe-beige">{clientName}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  )
}

