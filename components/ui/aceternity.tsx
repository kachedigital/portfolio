"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

// Spotlight component
export const Spotlight = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top
      setPosition({ x, y })
    }
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} onMouseMove={handleMouseMove}>
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(162, 89, 255, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

// AnimatedText component
export const AnimatedText = ({
  text,
  className = "",
}: {
  text: string
  className?: string
}) => {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-2" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

// GlowCard component
export const GlowCard = ({
  children,
  className = "",
  glowColor = "rgba(162, 89, 255, 0.4)",
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-transparent group-hover:via-accent-purple/20 group-hover:to-transparent transition-all duration-500"></div>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  )
}

// TextReveal component
export const TextReveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
