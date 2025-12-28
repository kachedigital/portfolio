"use client"

import { projectCaseStudies } from "@/lib/data/portfolio-data"
import { TextReveal } from "@/components/ui/aceternity"

export default function StateCaseStudyGrid() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <TextReveal>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">Evidence of Impact</h2>
          <p className="text-text-secondary mb-12 max-w-3xl">
            Real-world case studies from California state government demonstrating measurable results in AI governance,
            accessibility compliance, and digital transformation.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectCaseStudies.map((project, index) => (
            <div
              key={index}
              className="bg-bg-secondary rounded-xl p-6 border border-gray-700/50 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/10 group"
              style={{
                backgroundColor: "#0D0D0D",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
              }}
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent-purple font-semibold">{project.agency}</p>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-accent-orange mb-2">Challenge</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{project.challenge}</p>
              </div>

              {/* Action */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-accent-orange mb-2">Action</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{project.action}</p>
              </div>

              {/* Result */}
              <div className="mb-4">
                <h4 className="text-sm font-bold text-accent-orange mb-2">Result</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{project.result}</p>
              </div>

              {/* Citation */}
              <div className="pt-4 border-t border-gray-700/50">
                <p className="text-xs text-text-secondary italic">{project.cite}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
