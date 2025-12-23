"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/aceternity"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const FeaturedProjectFlowFactor = () => {
  return (
    <GlowCard className="col-span-4 bg-bg-primary p-6 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        <div className="order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-white">FlowFactor</h3>
          <p className="text-zinc-300 mb-4">
            A comprehensive platform for Human Factors Engineering, focused on transforming workplaces through
            human-centered design principles. This project combines ergonomics expertise with digital accessibility to
            create healthier, more productive work environments.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">Human Factors</span>
            <span className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">UX Design</span>
            <span className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">Ergonomics</span>
            <span className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">Next.js</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://flowfactor-test.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent-orange hover:underline group"
            >
              Visit Website
              <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <Link
              href="/https://flowfactor-test.vercel.app/"
              className="inline-flex items-center text-accent-purple hover:underline group"
            >
              View Case Study
              <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-800">
            <img
              src="/flowfactor-screenshot.jpg"
              alt="FlowFactor website screenshot showing human-centered design services"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
          </div>
        </div>
      </motion.div>
    </GlowCard>
  )
}

export default FeaturedProjectFlowFactor
