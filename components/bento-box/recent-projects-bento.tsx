"use client"

import { motion } from "framer-motion"
import { TextReveal, AnimatedText, GlowCard } from "@/components/ui/aceternity"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface Project {
  title: string
  category: string
  image: string
  href: string
  tags: string[]
}

const RecentProjectsBento = () => {
  const projects: Project[] = [
    {
      title: "FlexFlow",
      category: "Wellness Tool",
      image: "/flexflow-screenshot.jpg",
      href: "https://flowfactor-test.vercel.app/tools/flexflow",
      tags: ["Next.js", "Wellness", "UX Design", "Productivity"],
    },
    {
      title: "BrightMind",
      category: "Mental Health App",
      image: "/cogniflorence-screenshot.jpg",
      href: "https://v0-mental-health-cbt-app-yp.vercel.app/",
      tags: ["React", "CBT", "Healthcare", "UX Design"],
    },
    {
      title: "AI-Powered Content Generator",
      category: "AI Development",
      image: "/ai-content-dashboard.png",
      href: "/projects/ai-content-generator",
      tags: ["AI", "NLP", "Content Creation"],
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <TextReveal>
          <h3 className="text-xl font-display font-semibold text-accent-orange">
            <AnimatedText text="Recent Projects" className="text-xl font-display font-semibold" />
          </h3>
        </TextReveal>
        <Link href="/projects" className="text-accent-purple flex items-center text-sm hover:underline group">
          View All
          <ArrowUpRight
            size={14}
            className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={project.href} target={project.href.startsWith("http") ? "_blank" : "_self"}>
              <GlowCard className="h-full bg-bg-primary p-4 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in">
                <div className="relative w-full h-32">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-white group-hover:text-accent-orange transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-accent-purple/20 text-accent-purple text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400 bg-bg-secondary px-2 py-1 rounded-full inline-block mt-2">
                    {project.category}
                  </span>
                </div>
              </GlowCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjectsBento
