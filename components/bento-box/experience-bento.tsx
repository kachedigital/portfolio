"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { TextReveal, AnimatedText } from "@/components/ui/aceternity"
import { X } from "lucide-react"
import Image from "next/image"

interface Card {
  title: string
  description: string
  src: string
  content: React.ReactNode | (() => React.ReactNode)
}

const ExperienceBento = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const handleFlip = (title: string) => {
    setFlippedCard(flippedCard === title ? null : title)
  }

  const cards: Card[] = [
    {
      title: "Freelance Consultant",
      description: "AI Development, UX, and Accessibility",
      src: "/kd-logo.png",
      content: (
        <p className="text-zinc-300">
          Delivered AI-powered tools, interactive dashboards, and automated systems using Next.js, React, OpenAI,
          Supabase, and Tailwind CSS. Specialized in accessible design (WCAG 2.1), neuroinclusive UX, technical
          documentation, and content automation. Notable projects include the FlowFactor Co-Pilot, accessibility audit
          tools, and AI agents for ergonomics and affiliate marketing.
        </p>
      ),
    },
    {
      title: "State of California",
      description: "Web Content & Accessibility Analyst",
      src: "https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/KachePortfolio/imgs/cagov-logo-flag-gradient-eUnMZD41yKQ70fYPKjOW9gtRlsauJ4.png",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-2">
          <li>Conducted comprehensive accessibility audits of public websites for WCAG 2.1 A/AA compliance.</li>
          <li>
            Provided remediation guidance, trained staff, and delivered follow-up audits to ensure lasting ADA
            compliance.
          </li>
          <li>Designed accessible workflows and content strategies for digital platforms.</li>
          <li>Developed a custom HR tracking tool integrated with DocuSign to streamline timekeeping.</li>
          <li>Led intranet redesigns and SharePoint Online migrations for improved usability and structure.</li>
        </ul>
      ),
    },
    {
      title: "Amazon",
      description: "Process Assistant & Analyst",
      src: "https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/KachePortfolio/imgs/amazon-dark-logo-png-transparent-ID6rUF6sNMmoPXZhr74zA5NB5RcOFt.png",
      content: (
        <p className="text-zinc-300">
          Managed frontline operations and supported performance analysis, system monitoring, and workflow automation.
          Used Excel, internal dashboards, and analytics tools to track KPIs, optimize routes, and coordinate
          cross-functional reporting.
        </p>
      ),
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-4 text-accent-orange">
          <AnimatedText text="Experience" className="text-xl font-display font-semibold" />
        </h3>
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative w-full h-[300px] [perspective:1000px]" // Added relative here
            onClick={() => handleFlip(card.title)}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-700"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flippedCard === card.title ? 180 : 0 }}
            >
              {/* Front of the card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-bg-primary p-4 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top cursor-pointer">
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div
                    className={`${card.title === "Freelance Consultant" ? "w-24 h-24" : "w-20 h-20"} mb-3 flex items-center justify-center`}
                  >
                    {card.title === "Freelance Consultant" ? (
                      <Image
                        src={card.src || "/placeholder.svg"}
                        alt={card.title}
                        width={96}
                        height={96}
                        className="h-full w-full object-contain rounded-md"
                        priority
                      />
                    ) : (
                      <img
                        src={card.src || "/placeholder.svg"}
                        alt={card.title}
                        className="h-full w-full object-contain rounded-md"
                      />
                    )}
                  </div>
                  <div className="flex-grow flex flex-col justify-start w-full">
                    <h4 className="text-lg font-semibold text-accent-orange mb-1">{card.title}</h4>
                    <p className="text-zinc-400 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>

              {/* Back of the card */}
              <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-bg-secondary p-4 rounded-xl border border-accent-orange flex flex-col">
                <div className="flex justify-between items-center mb-2 flex-shrink-0">
                  <h4 className="text-lg font-semibold text-accent-orange">{card.title}</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation() // Prevent card from re-flipping
                      handleFlip(card.title)
                    }}
                    className="p-1 rounded-full hover:bg-bg-primary"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="text-sm text-zinc-300 overflow-y-auto flex-grow pr-2">
                  {typeof card.content === "function" ? card.content() : card.content}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceBento
