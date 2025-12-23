"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { TextReveal, AnimatedText } from "@/components/ui/aceternity"
import BentoItem from "./bento-item"
import { FlipWords } from "@/components/ui/flip-words"
import ExperienceBento from "./experience-bento"

interface BentoBoxProps {
  className?: string
  children?: ReactNode
}

const BentoBox = ({ className = "", children }: BentoBoxProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const words = ["Smart", "Creative", "Accessible"]

  return (
    <section className={`w-full py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 max-w-full">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 max-w-full">
              <AnimatedText text="Building " />
              <FlipWords words={words} className="text-accent-orange" />
              <AnimatedText text=" digital experiences" />
            </h2>
          </TextReveal>
        </div>

        {/* SVG Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" className="text-accent-purple" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <BentoItem
            title=""
            description=""
            accentColor="orange"
            colSpan="col-span-4 md:col-span-4 lg:col-span-4"
            rowSpan="row-span-1"
            className="bg-bg-secondary rounded-2xl p-6 border backdrop-blur-sm"
          >
            <ExperienceBento />
          </BentoItem>

          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default BentoBox
