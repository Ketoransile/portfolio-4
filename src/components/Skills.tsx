"use client";

import { skillCategories } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-8">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                03. Tech Stack
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              A checklist of technologies, programming languages, database structures, and platform tools that I actively use.
            </p>
          </ScrollReveal>
        </div>

        {/* Categories Stack */}
        <div className="space-y-6">
          {skillCategories.map((category, idx) => (
            <ScrollReveal
              key={category.category}
              animation="up"
              delay={idx * 100}
            >
              <div className="border-b border-border/60 pb-6 last:border-b-0 last:pb-0">
                {/* Category Title */}
                <h3 className="font-display text-xs sm:text-sm font-extrabold text-foreground uppercase tracking-wider mb-3">
                  {category.category}
                </h3>

                {/* Inline text list */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-muted-foreground font-mono">
                  {category.skills.map((skill, sIdx) => (
                    <span key={skill.title} className="flex items-center">
                      {sIdx > 0 && <span className="mr-2 text-border/70 font-sans">•</span>}
                      <span className="text-foreground/90 font-medium hover:text-foreground transition-colors">
                        {skill.title}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
