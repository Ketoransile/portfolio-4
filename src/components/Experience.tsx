"use client";

import { workExperience } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-8">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                04. Experience
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Practical Work History
            </h2>
          </ScrollReveal>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {workExperience.map((exp, idx) => (
            <ScrollReveal key={exp.company} animation="up" delay={idx * 100}>
              <article className="space-y-3">
                {/* Header row */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-base font-extrabold text-foreground sm:text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-0.5">
                      {exp.company} — <span className="font-medium">{exp.location}</span>
                    </p>
                  </div>
                  <div className="text-xs font-mono font-semibold text-muted-foreground/80 sm:mt-1">
                    {exp.date} [{exp.type}]
                  </div>
                </div>

                {/* Short overview */}
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground/90">
                  {exp.description}
                </p>

                {/* Achievements bullets */}
                <ul className="space-y-1.5 pl-3 border-l-2 border-border/80">
                  {exp.work.map((item) => (
                    <li
                      key={item}
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                      – {item}
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
