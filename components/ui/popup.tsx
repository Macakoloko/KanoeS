"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface PopupProps {
  title: string
  children: React.ReactNode
  trigger?: React.ReactNode
  defaultOpen?: boolean
  delay?: number
}

export function Popup({ title, children, trigger, defaultOpen = false, delay = 0 }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (defaultOpen && delay > 0) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [defaultOpen, delay])

  // Add keyboard event handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Lock body scroll when popup is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      // Restore body scroll when popup is closed
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {trigger && (
        <div 
          onClick={() => setIsOpen(true)} 
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsOpen(true)
            }
          }}
        >
          {trigger}
        </div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-black border border-kanoe-green-dark/30 rounded-xl max-w-lg w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 flex justify-between items-center border-b border-kanoe-green-dark/20">
                <h2 id="popup-title" className="text-xl font-bold text-kanoe-beige">{title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-6">{children}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

