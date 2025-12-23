"use client"

import type { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText, Spotlight, TextReveal } from "@/components/ui/aceternity"
import { Download } from "lucide-react"

interface HeroProps {
  image?: ReactNode
  ctaButtons?: ReactNode
  onOpenEmailForm?: () => void
}

const Hero: FC<HeroProps> = ({ image, ctaButtons, onOpenEmailForm }) => {
  return (
    <section
      className="w-full py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-orange opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Column */}
          <div className="space-y-8 animate-fade-in-up">
            <TextReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-subtle">
                Creative Technologist | AI & Automation
              </h1>
            </TextReveal>

            <div className="space-y-4">
              <Spotlight className="group">
                <p className="text-xl md:text-2xl text-zinc-200 font-medium drop-shadow-subtle">
                  <AnimatedText text="Blending innovation with imagination" />
                </p>
              </Spotlight>

              <div
                className="mt-6 text-zinc-300 leading-relaxed max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <p>
                  I build human-centered AI tools that are intuitive, scalable, and solve real-world problems. As an AI
                  Integration Specialist, I focus on customer experience (CX), accessibility, and inclusive UX. I
                  modernize digital platforms by embedding AI-driven functionality and streamlining user journeys
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            {ctaButtons ? (
              ctaButtons
            ) : (
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <Button
                  asChild
                  className="bg-accent-orange hover:bg-accent-purple text-white rounded-xl px-6 py-6 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg drop-shadow-button"
                >
                  <a
                    href="https://synaz3xz7xc7xzre.public.blob.vercel-storage.com/KachePortfolio/docs/D.Ewell_Res_8.25.pdf"
                    download="Dominique_Ewell_Resume.pdf"
                    aria-label="Download Dominique Ewell's resume as PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV <Download size={16} />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="text-white rounded-xl px-6 py-6 flex items-center gap-2 transition-all duration-300 hover:scale-105 border-accent-purple hover:text-white drop-shadow-button bg-transparent"
                  onClick={onOpenEmailForm}
                >
                  Let's Talk
                </Button>
              </div>
            )}
          </div>

          {/* Image/Visual Column */}
          <div className="hidden md:flex justify-center items-center">
            {image ? (
              image
            ) : (
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-purple/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute inset-10 border-2 border-accent-orange/30 rounded-full"></div>
                <div className="absolute inset-20 border-2 border-accent-purple/30 rounded-full"></div>
                <div className="absolute inset-32 border-2 border-accent-orange/30 rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
