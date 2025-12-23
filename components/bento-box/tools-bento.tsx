"use client"

import { motion } from "framer-motion"
import { TextReveal, AnimatedText } from "@/components/ui/aceternity"
import { GlowCard } from "@/components/ui/glow-card"

const ToolsBento = () => {
  const toolCategories = [
    {
      category: "Development",
      tools: ["Next.js", "React", "TypeScript", "Python", "Supabase"],
    },
    {
      category: "Design",
      tools: ["Figma", "Adobe XD", "Framer", "Webflow"],
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-3 text-accent-purple">
          <AnimatedText text="Tools" className="text-xl font-display font-semibold" />
        </h3>
      </TextReveal>

      <div className="space-y-3 flex-grow">
        {toolCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard className="bg-bg-primary p-3 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in">
              <h4 className="text-sm font-semibold text-accent-orange mb-1">{category.category}</h4>
              <div className="flex flex-wrap gap-1">
                {category.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="bg-bg-secondary text-zinc-300 text-xs px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ToolsBento
