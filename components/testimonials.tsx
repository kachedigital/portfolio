"use client"

import { TextReveal, AnimatedText } from "@/components/ui/aceternity"

const Testimonials = () => {
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
    <div
      className="bg-bg-secondary rounded-xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.4)] border backdrop-blur-sm transform hover:translate-y-[-3px] transition-all duration-300 hover-glow accent-border-top animate-fade-in"
      style={{
        animationDelay: "0.6s",
        backgroundColor: "#0D0D0D",
        boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5), 0 15px 30px rgba(0,0,0,0.4)",
      }}
    >
      <TextReveal>
        <h2 className="text-2xl font-display font-semibold mb-6 uppercase tracking-wide">
          <AnimatedText text="Testimonials" className="text-2xl font-display font-semibold uppercase tracking-wide" />
        </h2>
      </TextReveal>

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
            <blockquote className="border-l-4 border-accent-orange pl-4 py-1 text-zinc-300 italic mb-2">
              "{testimonial.quote}"
            </blockquote>
            <p className="text-sm text-zinc-400 pl-4">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
