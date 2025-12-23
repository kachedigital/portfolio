"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/aceternity"

interface BentoItemProps {
  title: string
  description: string
  icon?: ReactNode
  image?: string
  href?: string
  className?: string
  colSpan?: string
  rowSpan?: string
  accentColor?: "orange" | "purple" | "magenta"
  onClick?: () => void
  children?: ReactNode
}

const BentoItem = ({
  title,
  description,
  icon,
  image,
  href,
  className = "",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  accentColor = "orange",
  onClick,
  children,
}: BentoItemProps) => {
  // Define accent color gradient based on the prop
  const accentGradient = {
    orange: "from-orange-500 to-orange-600",
    purple: "from-purple-500 to-purple-600",
    magenta: "from-pink-500 to-pink-600",
  }

  // Define accent color for border and glow
  const accentBorder = {
    orange: "border-accent-orange",
    purple: "border-accent-purple",
    magenta: "border-pink-500",
  }

  // Define accent color for text
  const accentText = {
    orange: "text-accent-orange",
    purple: "text-accent-purple",
    magenta: "text-pink-500",
  }

  // Define accent color for shadow/glow
  const accentShadow = {
    orange: "shadow-accent-orange/20",
    purple: "shadow-accent-purple/20",
    magenta: "shadow-pink-500/20",
  }

  const content = (
    <GlowCard
      className={`${colSpan} ${rowSpan} bg-bg-secondary rounded-2xl p-6 border shadow-[0_5px_15px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-300 hover:scale-105 ${accentBorder[accentColor]} hover:shadow-lg ${accentShadow[accentColor]} ${className} group hover-glow accent-border-top`}
      style={{
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
      }}
      glowColor={
        accentColor === "orange"
          ? "rgba(255, 140, 66, 0.4)"
          : accentColor === "purple"
            ? "rgba(162, 89, 255, 0.4)"
            : "rgba(236, 72, 153, 0.4)"
      }
    >
      {children ? (
        children
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full flex flex-col"
          whileHover={{
            rotateZ: 0.5,
            transition: { duration: 0.2 },
          }}
        >
          <div className="flex items-center gap-3 mb-4 group-hover:translate-x-1 transition-transform duration-300">
            {icon && <div className={`text-2xl ${accentText[accentColor]}`}>{icon}</div>}
            <h3 className={`text-xl font-semibold ${accentText[accentColor]}`}>{title}</h3>
          </div>

          {image && (
            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-lg">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${accentGradient[accentColor]} opacity-20`}></div>
            </div>
          )}

          <p className="text-zinc-300 flex-grow group-hover:translate-y-[-2px] transition-transform duration-300">
            {description}
          </p>

          {href && (
            <div className="mt-4 transform translate-y-0 opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
              <span
                className={`inline-flex items-center text-sm font-medium ${accentText[accentColor]} hover:underline cursor-pointer`}
              >
                Learn more
                <svg
                  className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          )}
        </motion.div>
      )}
    </GlowCard>
  )

  if (href && !children) {
    return <Link href={href}>{content}</Link>
  }

  if (onClick && !children) {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {content}
      </div>
    )
  }

  return content
}

export default BentoItem
