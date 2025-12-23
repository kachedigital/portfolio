"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Send, Code, Laptop, Lightbulb, Gauge } from "lucide-react"
import { TextReveal, AnimatedText, Spotlight } from "@/components/ui/aceternity"
import SectionWrapper from "@/components/section-wrapper"
import ScrollProgressBar from "@/components/scroll-progress-bar"

export default function ProjectsClientPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const projectCategories = [
    {
      title: "AI & Automation",
      description: "Smart tools that streamline workflows and boost productivity",
      icon: <Code className="w-8 h-8 text-accent-purple" />,
      color: "purple",
      comingSoon: ["AI Content Generator", "Workflow Automation Dashboard", "Smart Ergonomics Tool"],
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications with exceptional UX",
      icon: <Laptop className="w-8 h-8 text-accent-orange" />,
      color: "orange",
      comingSoon: ["FlowFactor Platform", "ResLivin Affiliate Hub", "Digital Ergonomics Portal"],
    },
    {
      title: "Product Design",
      description: "User-centered design solutions for digital products",
      icon: <Lightbulb className="w-8 h-8 text-pink-500" />,
      color: "pink",
      comingSoon: ["BrightMind UI/UX", "FlexFlow Interface Design", "Accessibility Audit Tool"],
    },
    {
      title: "Performance Optimization",
      description: "Speed and efficiency improvements for existing platforms",
      icon: <Gauge className="w-8 h-8 text-accent-orange" />,
      color: "orange",
      comingSoon: ["E-commerce Performance Boost", "Web Vitals Optimization", "Accessibility Remediation"],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1A1A1A", color: "#E0E0E0" }}>
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
            <Link href="/" className="flex items-center gap-2 font-medium text-text-secondary link-underline">
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
            <Link href="/projects" className="flex items-center gap-2 font-medium text-accent-orange">
              Projects
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 font-medium text-text-secondary link-underline hover:text-accent-orange"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-accent-purple hover:text-accent-orange transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>

          <Spotlight className="group">
            <div className="text-center mb-16">
              <TextReveal>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-subtle">
                  <AnimatedText text="Portfolio Coming Soon" />
                </h1>
              </TextReveal>

              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-zinc-300 mb-12">
                  We're curating an impressive collection of projects to showcase our expertise in AI development,
                  automation, design, and accessibility. Stay tuned for a comprehensive portfolio of our work.
                </p>

                {/* Project Category Preview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {projectCategories.map((category, index) => (
                    <div
                      key={index}
                      className={`bg-bg-primary p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border ${
                        category.color === "purple"
                          ? "border-accent-purple"
                          : category.color === "orange"
                            ? "border-accent-orange"
                            : "border-pink-500"
                      } transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1">{category.icon}</div>
                        <div>
                          <h3
                            className={`text-xl font-semibold mb-2 ${
                              category.color === "purple"
                                ? "text-accent-purple"
                                : category.color === "orange"
                                  ? "text-accent-orange"
                                  : "text-pink-500"
                            }`}
                          >
                            {category.title}
                          </h3>
                          <p className="text-zinc-300 mb-3">{category.description}</p>

                          <div className="space-y-1">
                            <p className="text-sm text-zinc-400 font-semibold">Coming soon:</p>
                            <ul className="list-disc list-inside text-sm text-zinc-400 pl-2">
                              {category.comingSoon.map((item, i) => (
                                <li key={i} className="opacity-80 hover:opacity-100 transition-opacity">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured Project Preview */}
                <div className="bg-bg-primary p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-orange mb-16 transition-all duration-300 hover:shadow-lg">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-display font-semibold text-accent-orange mb-2">
                      Featured Project Preview
                    </h2>
                    <p className="text-zinc-300">Get a sneak peek at one of our upcoming featured projects</p>
                  </div>

                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-accent-purple/20 rounded-xl animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-zinc-300 font-semibold">Project Reveal Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>

                {!isSubmitted ? (
                  <div className="bg-bg-secondary rounded-xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-accent-purple/30 backdrop-blur-sm">
                    <h2 className="text-2xl font-display font-semibold mb-4 text-white">Get Notified When We Launch</h2>
                    <p className="text-zinc-400 mb-6">
                      Be the first to see our portfolio when it launches. We'll notify you about new projects and case
                      studies.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="flex-grow px-4 py-3 bg-bg-primary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-orange text-white"
                        required
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-accent-orange hover:bg-accent-purple text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Notify Me <Send size={16} />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="bg-bg-secondary rounded-xl p-8 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-accent-purple/30 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-purple/20 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent-purple"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h2 className="text-2xl font-display font-semibold mb-2 text-white">Thank You!</h2>
                      <p className="text-zinc-400">You're on the list! We'll notify you when our portfolio launches.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Spotlight>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <section className="w-full bg-bg-secondary py-8 relative z-10" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Image src="/kd-logo.png" alt="Kache Digital Logo" width={150} height={50} className="h-10 w-auto" />
            </div>
            <p className="text-text-secondary mt-2">© 2025 All rights reserved.</p>
          </div>
          {/* Footer content can be expanded here if needed */}
        </div>
      </section>
    </div>
  )
}
