"use client"

import { motion } from "framer-motion"
import { TextReveal, AnimatedText, GlowCard } from "@/components/ui/aceternity"

const SkillsImpactBento = () => {
  const skills = [
    {
      title: "AI Development & Automation",
      description:
        "Developed AI-driven tools that optimized business workflows and increased client productivity by over 30%.",
      icon: "🤖",
      focus: "Machine Learning, NLP, Process Automation",
    },
    {
      title: "Product Design",
      description:
        "Created modern, accessible UI/UX designs that enhanced user engagement across both SaaS and freelance projects.",
      icon: "🎨",
      focus: "User Experience, Visual Design, Prototyping",
    },
    {
      title: "Web Accessibility & UX Audits",
      description:
        "Conducted WCAG 2.1 audits and remediated complex web applications to ensure compliance and usability.",
      icon: "🔍",
      focus: "WCAG Compliance, Usability Testing, Remediation",
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-4 uppercase tracking-wide">
          <AnimatedText text="Skills & Impact" className="text-xl font-display font-semibold uppercase tracking-wide" />
        </h3>
      </TextReveal>

      <div className="space-y-4 flex-grow">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard className="bg-bg-primary p-4 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in">
              <div className="flex items-start gap-3">
                <div className="text-2xl mt-1">{skill.icon}</div>
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-accent-orange mb-2">{skill.title}</h4>
                  <p className="text-zinc-300 mb-2">{skill.description}</p>
                  <p className="text-xs text-zinc-400">
                    <span className="font-semibold">Focus:</span> {skill.focus}
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsImpactBento
