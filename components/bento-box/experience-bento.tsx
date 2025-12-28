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
      description: "Web Developer & UX Designer (Franchise Tax Board)",
      src: "/kd-logo.png",
      content: (
        <div className="text-zinc-300 text-xs">
          <p className="mb-2 font-semibold text-accent-orange">The Product & UX Specialist</p>
          <p className="mb-2 italic">Focus: Agile integration and Standards</p>
          <p>
            Partnered with engineering teams in an Agile environment to design and document internal UX standards,
            ensuring seamless navigation and accessibility compliance across enterprise-level systems.
          </p>
        </div>
      ),
    },
    {
      title: "State of California",
      description: "Product & Governance Strategist | Systems Analysis & AI Readiness",
      src: "https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/KachePortfolio/imgs/cagov-logo-flag-gradient-eUnMZD41yKQ70fYPKjOW9gtRlsauJ4.png",
      content: (
        <div className="text-zinc-300 text-xs space-y-2">
          <p className="font-semibold text-accent-orange">
            Agencies: California Commission on Teacher Credentialing (CTC) & Franchise Tax Board (FTB)
          </p>
          <p>
            <span className="font-semibold">Systems Analysis & Infrastructure Modernization:</span> Served as the lead
            for content and accessibility documentation during mission-critical Azure cloud migrations and enterprise
            SharePoint intranet redesigns. I analyzed and simplified complex Information Architecture (IA) and
            navigation to reduce technical debt and internal support requests.
          </p>
          <p>
            <span className="font-semibold">Enterprise Governance & Policy Development:</span> Led the agency-wide
            initiative to bring public-facing platforms into full ADA compliance by authoring official document
            remediation policies and technical SOPs. I established standardized processes and Markdown-based guides to
            ensure "Digital First" principles and accessibility standards were shifted upstream in the development
            lifecycle.
          </p>
          <p>
            <span className="font-semibold">Strategic AI Integration & Compliance Auditing:</span> Orchestrated
            large-scale audits of over 1,000 digital assets, utilizing AI-assisted quality checks to increase
            accessibility compliance from 72% to over 93%.
          </p>
          <p>
            <span className="font-semibold">Agile Product Management & Automation:</span> Partnered with
            cross-functional engineering teams in Agile environments to refine user journeys and deliver automated
            business solutions, such as a DocuSign-integrated HR tool that streamlined time-tracking and data
            validation.
          </p>
          <p>
            <span className="font-semibold">Stakeholder Alignment & Training:</span> Acted as a bridge between technical
            developers and business program owners, providing training and specialized developer documentation to ensure
            diverse stakeholder groups remained aligned with project milestones and regulatory mandates.
          </p>
        </div>
      ),
    },
    {
      title: "Amazon",
      description: "Data Annotation & ML Support",
      src: "https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/KachePortfolio/imgs/amazon-dark-logo-png-transparent-ID6rUF6sNMmoPXZhr74zA5NB5RcOFt.png",
      content: (
        <div className="text-zinc-300 text-xs">
          <p className="mb-2 font-semibold text-accent-orange">The Data & ML Strategist</p>
          <p className="mb-2 italic">Focus: Data Integrity and Model Training</p>
          <p>
            Optimized data integrity for large-scale machine learning datasets through high-precision annotation and
            image classification; collaborated with developers to refine validation scripts, ensuring the reliability of
            AI-assisted review workflows.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="h-[234px] flex flex-col items-center">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-4 text-accent-orange">
          <AnimatedText text="Experience" className="text-xl font-display font-semibold" />
        </h3>
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full place-items-center">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative w-full h-[156px] [perspective:1000px]"
            onClick={() => handleFlip(card.title)}
          >
            <motion.div
              className="absolute inset-0 transition-transform duration-700 will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
              animate={{ rotateY: flippedCard === card.title ? 180 : 0 }}
            >
              <div className="absolute inset-0 [backface-visibility:hidden] bg-bg-primary p-3 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top cursor-pointer h-[156px]">
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className="w-[72px] h-[72px] mb-3 flex items-center justify-center flex-shrink-0">
                    {card.title === "Freelance Consultant" ? (
                      <Image
                        src={card.src || "/placeholder.svg"}
                        alt={card.title}
                        width={72}
                        height={72}
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

              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-bg-secondary p-3 rounded-xl border border-accent-orange flex flex-col h-[156px]">
                <div className="flex justify-between items-center mb-2 flex-shrink-0">
                  <h4 className="text-lg font-semibold text-accent-orange">{card.title}</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
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
