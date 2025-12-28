"use client"

import type { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText, Spotlight, TextReveal } from "@/components/ui/aceternity"

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-r from-accent-orange via-accent-purple to-accent-orange bg-clip-text text-transparent">
                  AI Integration & Product Strategy
                </span>
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
                  I am a Creative Technologist & AI Product Analyst specializing in Governance and Integration. I bridge
                  the gap between emerging technology and business operations by analyzing complex workflows to
                  determine the most effective, ethical, and scalable AI solutions. Whether building custom automation
                  for small businesses or managing large-scale digital transformations, my mission is to turn technical
                  potential into human-centered results.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-zinc-700 pt-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-4xl font-bold text-blue-400">93%</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">Compliance Achieved</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-4xl font-bold text-blue-400">1,000+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">Assets Remediated</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-3xl md:text-4xl font-bold text-blue-400">10+ Years</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">State Innovation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            {ctaButtons ? (
              ctaButtons
            ) : (
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
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
