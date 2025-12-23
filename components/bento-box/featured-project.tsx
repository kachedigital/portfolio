"use client"

import { motion } from "framer-motion"
import { GlowCard } from "@/components/ui/aceternity"
import { ArrowUpRight } from "lucide-react"

interface FeaturedProjectProps {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
}

const FeaturedProject = ({ title, description, image, tags, href }: FeaturedProjectProps) => {
  return (
    <GlowCard
      className="col-span-1 md:col-span-2 row-span-1 bg-bg-primary p-4 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in overflow-hidden border border-accent-purple hover:border-accent-orange transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-accent-purple/20"
      /*style={{
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
      }}*/
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full flex flex-col"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img src={image || "https://flowfactor-test.vercel.app/"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <p className="text-zinc-300 mb-4 flex-grow">{description}</p>
          <a href={href} className="inline-flex items-center text-accent-orange hover:underline">
            View Project <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </GlowCard>
  )
}

export default FeaturedProject
