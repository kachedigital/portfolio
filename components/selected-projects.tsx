"use client"

import { TextReveal, AnimatedText, GlowCard } from "@/components/ui/aceternity"

interface Project {
  title: string
  description: string
  tech: string
  result: string
}

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
]

const SelectedProjects = () => {
  return (
    <div
      className="bg-bg-secondary rounded-xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border backdrop-blur-sm transform hover:translate-y-[-3px] transition-all duration-300 hover-glow accent-border-top animate-fade-in"
      style={{
        animationDelay: "0.4s",
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 15px 30px rgba(0,0,0,0.4)",
      }}
    >
      <TextReveal>
        <h2 className="text-2xl font-display font-semibold mb-6 uppercase tracking-wide">
          <AnimatedText
            text="Selected Projects"
            className="text-2xl font-display font-semibold uppercase tracking-wide"
          />
        </h2>
      </TextReveal>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <GlowCard
            key={index}
            className="bg-bg-primary p-4 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300"
          >
            <h3 className="text-xl text-accent-orange font-semibold mb-2">{project.title}</h3>
            <p className="text-zinc-300 mb-2">{project.description}</p>
            <p className="text-sm text-zinc-400 mb-1">
              <span className="font-semibold">Tech:</span> {project.tech}
            </p>
            <p className="text-sm text-zinc-400 italic">
              <span className="font-semibold">Impact:</span> {project.result}
            </p>
          </GlowCard>
        ))}
      </div>
    </div>
  )
}

export default SelectedProjects
