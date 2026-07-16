"use client";

import { education, courseCategories } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-8">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                05. Education
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Academic Background
            </h2>
          </ScrollReveal>
        </div>

        {/* Degree & School Block */}
        <ScrollReveal animation="up" delay={100}>
          <div className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-base font-extrabold text-foreground sm:text-lg">
                  {education.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-0.5">
                  {education.school} — <span className="font-medium">{education.location}</span>
                </p>
              </div>
              <div className="text-xs font-mono font-semibold text-muted-foreground/80 sm:mt-1">
                {education.year}
              </div>
            </div>

            {/* GPA Badge - Sharp corners */}
            <div className="inline-flex items-center gap-1.5 border border-border bg-card px-2.5 py-1 text-xs font-bold text-foreground rounded-none">
              <span>Cumulative CGPA:</span>
              <span className="text-foreground">{education.cgpa}</span>
            </div>

            {/* Coursework listings */}
            <div className="mt-8 border-t border-border pt-6 space-y-4">
              <h4 className="font-display text-xs sm:text-sm font-extrabold text-foreground uppercase tracking-wider">
                Relevant Coursework
              </h4>

              <div className="grid gap-4.5 sm:grid-cols-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {courseCategories.map((cat) => (
                  <div key={cat.category} className="space-y-1">
                    <h5 className="font-bold text-foreground text-xs font-mono">
                      {cat.category}
                    </h5>
                    <p className="text-[11px] sm:text-xs">
                      {cat.courses.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
