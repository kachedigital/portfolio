"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipWordsProps {
  words: string[]
  className?: string
  duration?: number
}

export function FlipWords({ words, className, duration = 2000 }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsVisible(true)
      }, 300) // Half of the animation duration for a smooth transition
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className={cn("inline-block relative", className)}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {words[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
