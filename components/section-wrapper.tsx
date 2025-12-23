"use client"
import { motion, useInView } from "framer-motion"
import type React from "react"

import { useRef } from "react"

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`my-8 ${className}`}
    >
      {children}
    </motion.section>
  )
}
