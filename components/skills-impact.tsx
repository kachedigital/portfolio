"use client"

import { TextReveal, AnimatedText } from "@/components/ui/aceternity"

const SkillsImpact = () => {
  const skills = [
    {
      title: "AI Development & Automation",
      description:
        "Developed AI-driven tools that optimized business workflows and increased client productivity by over 30%.",
    },
    {
      title: "Product Design",
      description:
        "Created modern, accessible UI/UX designs that enhanced user engagement across both SaaS and freelance projects.",
    },
    {
      title: "Web Accessibility & UX Audits",
      description:
        "Conducted WCAG 2.1 audits and remediated complex web applications to ensure compliance and usability.",
    },
  ]

  return (
    <div
      className="bg-bg-secondary rounded-xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border backdrop-blur-sm transform hover:translate-y-[-3px] transition-all duration-300 hover-glow accent-border-top animate-fade-in"
      style={{
        animationDelay: "0.2s",
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 15px 30px rgba(0,0,0,0.4)",
      }}
    >
      <TextReveal>
        <h2 className="text-2xl font-display font-semibold mb-6 uppercase tracking-wide">
          <AnimatedText
            text="Skills & Impact"
            className="text-2xl font-display font-semibold uppercase tracking-wide"
          />
        </h2>
      </TextReveal>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <h3 className="text-xl font-semibold text-accent-orange mb-2">{skill.title}</h3>
            <p className="text-zinc-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsImpact
