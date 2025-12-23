"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"
import { TextReveal } from "@/components/ui/aceternity"
import Hero from "@/components/hero"
import BentoBox from "@/components/bento-box/bento-box"
import SectionWrapper from "@/components/section-wrapper"
import ScrollProgressBar from "@/components/scroll-progress-bar"
import FeaturedProjectFlowFactor from "@/components/bento-box/featured-project-flowfactor"
import EmailCaptureForm from "@/components/email-capture-form"

const GlowCard = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return <div className={className}>{children}</div>
}

export default function ClientPage() {
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false)

  // Update the socialIcons array to include Pinterest
  const socialIcons = [
    {
      name: "LinkedIn",
      src: "/linkedin-icon.png",
      href: "https://www.linkedin.com/in/deewell/",
      alt: "LinkedIn Profile",
    },
    {
      name: "TikTok",
      src: "/tiktok-icon.png",
      // href: "https://www.tiktok.com/",
      alt: "TikTok Profile",
    },
    {
      name: "Instagram",
      src: "/instagram-icon.png",
      //href: "https://www.instagram.com/",
      alt: "Instagram Profile",
    },
    {
      name: "Pinterest",
      src: "/pinterest-icon.png",
      href: "https://www.pinterest.com/KacheDigital/",
      alt: "Pinterest Profile",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1A1A1A", color: "#E0E0E0" }}>
      {/* Email Capture Form */}
      <EmailCaptureForm isOpen={isEmailFormOpen} onClose={() => setIsEmailFormOpen(false)} />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent-orange opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-accent-purple opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <header
        className="bg-bg-secondary rounded-xl mx-auto max-w-7xl my-4 p-4 shadow-[0_10px_20px_rgba(0,0,0,0.3)] border border-gray-700/50 backdrop-blur-sm transform hover:translate-y-[-2px] transition-all duration-300 relative z-10"
        style={{
          backgroundColor: "#0D0D0D",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3)",
          borderColor: "rgba(162, 89, 255, 0.5)",
        }}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/kd-logo.png"
                alt="Kache Digital Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-medium">
              Home
            </Link>
            <Link
              href="https://www.linkedin.com/in/deewell/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-text-secondary link-underline hover:text-accent-orange"
            >
              About
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 font-medium text-text-secondary link-underline hover:text-accent-orange"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 font-medium text-text-secondary link-underline hover:text-accent-orange"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 font-medium text-text-secondary link-underline hover:text-accent-orange"
            >
              Blog
            </Link>
            <Link href="/resume" className="flex items-center gap-2 font-medium text-text-secondary link-underline">
              CV
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full">
              <Moon size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero
        image={
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-purple/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative w-[300px] h-[300px] mx-auto">
              <div className="absolute inset-0 animate-pulse-border">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile-image.png"
                    alt="Dominique E."
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                {socialIcons.map((icon) => (
                  <Link
                    key={icon.name}
                    href={icon.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="relative w-12 h-12 drop-shadow-lg">
                      <Image
                        src={icon.src || "/placeholder.svg"}
                        alt={icon.alt}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        }
        onOpenEmailForm={() => setIsEmailFormOpen(true)}
      />

      {/* Featured Project - FlowFactor */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-4">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 text-white">Featured Project</h2>
          </TextReveal>
          <FeaturedProjectFlowFactor />
        </div>
      </SectionWrapper>

      {/* Bento Box Section */}
      <SectionWrapper>
        <BentoBox className="relative z-10" />
      </SectionWrapper>

      {/* Call to Action Section - Full width */}
      <SectionWrapper>
        <section
          className="w-full bg-black py-16 relative z-10"
          style={{
            background: "linear-gradient(to right, rgba(13, 13, 13, 0.9), rgba(26, 26, 26, 0.9))",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                Let's Build Something Amazing Together
              </h2>
            </TextReveal>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? I combine creativity, technical expertise, and strategic
              thinking to deliver exceptional digital experiences.
            </p>
            <Button
              className="bg-accent-orange hover:bg-accent-purple text-white rounded-xl px-6 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg mx-auto"
              onClick={() => setIsEmailFormOpen(true)}
            >
              Get in Touch
            </Button>
          </div>
        </section>
      </SectionWrapper>

      {/* Footer - Fixed to be full width */}
      <section className="w-full bg-bg-secondary py-16 relative z-10" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <TextReveal>
              <div className="flex items-center">
                <Image src="/kd-logo.png" alt="Kache Digital Logo" width={150} height={50} className="h-10 w-auto" />
              </div>
            </TextReveal>
            <p className="text-text-secondary mt-2">© 2025 All rights reserved.</p>
          </div>
          {/* Footer content can be expanded here if needed */}
        </div>
      </section>
    </div>
  )
}
