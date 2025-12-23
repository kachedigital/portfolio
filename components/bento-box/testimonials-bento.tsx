"use client"

import { motion } from "framer-motion"
import { TextReveal, AnimatedText } from "@/components/ui/aceternity"
import { GlowCard } from "@/components/ui/glow-card"

const TestimonialsBento = () => {
  const testimonials = [
    {
      quote: "Dominique's innovative use of AI and automation transformed our onboarding process.",
      author: "Taylor R., Product Manager at GovTech",
    },
    {
      quote: "Their ability to translate technical ideas into accessible design blew me away.",
      author: "Client, Sweet Escapes by Kiya",
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <TextReveal>
        <h3 className="text-xl font-display font-semibold mb-3 text-accent-magenta">
          <AnimatedText text="Testimonials" className="text-xl font-display font-semibold" />
        </h3>
      </TextReveal>

      <div className="space-y-3 flex-grow">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard className="bg-bg-primary p-3 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] border border-accent-purple hover:border-accent-orange transition-all duration-300 hover-glow accent-border-top animate-fade-in">
              <blockquote className="border-l-2 border-accent-orange pl-2 py-1 text-zinc-300 italic mb-1 text-xs group-hover:border-pink-500 transition-colors duration-300">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-xs text-zinc-400 pl-2 group-hover:translate-x-1 transition-transform duration-300">
                — {testimonial.author}
              </p>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsBento
