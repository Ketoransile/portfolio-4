"use client";

import { FiCode, FiDatabase, FiGlobe, FiServer } from "react-icons/fi";
import { personalInfo, highlights } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

const iconMap = [
  <FiGlobe className="h-4 w-4" key="frontend" />,
  <FiServer className="h-4 w-4" key="backend" />,
  <FiDatabase className="h-4 w-4" key="database" />,
  <FiCode className="h-4 w-4" key="ai" />,
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="w-full">
        {/* Section Heading */}
        <div className="mb-8">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                01. About Me
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Software engineer focused on useful web products
            </h2>
          </ScrollReveal>
        </div>

        {/* Content Stack */}
        <div className="space-y-10">
          {/* Text Bio */}
          <ScrollReveal animation="up" delay={150}>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Highlights List - Clean Rows */}
          <ScrollReveal animation="up" delay={250}>
            <div className="border-t border-border pt-8">
              <h3 className="font-display text-sm font-extrabold text-foreground uppercase tracking-wider mb-5">
                Core Competencies
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item, idx) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 border border-border bg-card/45 p-4 transition-colors hover:border-foreground/30 rounded-none"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-foreground text-background rounded-none">
                      {iconMap[idx]}
                    </div>
                    <div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
