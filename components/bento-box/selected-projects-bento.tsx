"use client"

import { motion } from "framer-motion"
import { TextReveal, AnimatedText, GlowCard } from "@/components/ui/aceternity"

interface Project {
  title: string
  description: string
  tech: string
  result: string
}

const SelectedProjectsBento = () => {
  const projects: Project[] = [
    {
      title: "Smart Ergonomics Tool",
      description: "Built a web-based tool that uses AI to recommend posture adjustments from webcam images.",
      tech: "Next.js, Tailwind, OpenAI, Supabase",
      result: "Enabled remote assessments for 100+ users in pilot launch.",
    },
    {
      title: "ResLivin Affiliate Hub",
      description: "Developed a dashboard for managing social media posts, affiliate links, and campaign analytics.",
      tech: "React, Firebase, ChatGPT, Beehiiv API",
      result: "Automated 80% of social workflows and increased traffic to affiliate links by 40%.",
    },
    {
      title: "AI Content Generator",
      description: "Created an AI-powered tool for generating marketing copy and social media content.",
      tech: "Python, OpenAI, Flask, React",
      result: "Reduced content creation time by 65% for a digital marketing agency.",
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-4 text-accent-orange">
          <AnimatedText text="In the Sandbox" className="text-xl font-display font-semibold" />
        </h3>
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* <GlowCard className="bg-bg-primary p-4 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300">*/}

            <GlowCard className="h-full bg-bg-primary p-4 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in">
              <h4 className="text-lg text-accent-orange font-semibold mb-2">{project.title}</h4>
              <p className="text-zinc-300 mb-2 text-sm">{project.description}</p>
              <p className="text-xs text-zinc-400 mb-1">
                <span className="font-semibold">Tech:</span> {project.tech}
              </p>
              <p className="text-xs text-zinc-400 italic">
                <span className="font-semibold">Impact:</span> {project.result}
              </p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SelectedProjectsBento
