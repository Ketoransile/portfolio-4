"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

function ProjectListItem({ project, index }: { project: Project; index: number }) {
  return (
    <ScrollReveal animation="up" delay={index * 50}>
      <article className="group py-6 border-b border-border last:border-b-0">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {/* Title & Type */}
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base font-extrabold text-foreground transition-colors group-hover:text-muted-foreground sm:text-lg">
                {project.title}
              </h3>
              <span className="border border-border bg-card px-2 py-0.5 text-[10px] font-semibold text-muted-foreground rounded-none">
                {project.type}
              </span>
            </div>
            
            {/* Sub-details (Role & Focus) */}
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              <span>{project.role}</span>
              <span className="text-border/80">•</span>
              <span>{project.focus}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3.5 text-xs font-semibold sm:mt-1">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-foreground hover:underline"
              >
                Live Demo
                <FiArrowUpRight className="h-3 w-3" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-muted-foreground hover:text-foreground hover:underline"
              >
                Code
                <FiArrowUpRight className="h-3 w-3" />
              </Link>
            )}
            {project.backend && (
              <Link
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-muted-foreground hover:text-foreground hover:underline"
              >
                Backend API
                <FiArrowUpRight className="h-3 w-3" />
              </Link>
            )}
          </div>
        </div>

        {/* Short Outcome & Description */}
        <p className="mt-3.5 text-xs sm:text-sm font-medium text-foreground/80 leading-relaxed">
          {project.outcome}
        </p>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Highlights as simple bullet line */}
        <div className="mt-3.5 space-y-1.5 pl-3 border-l-2 border-border/80">
          {project.highlights.map((highlight) => (
            <p key={highlight} className="text-xs text-muted-foreground">
              – {highlight}
            </p>
          ))}
        </div>

        {/* Tech stack inline */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
          <span className="font-sans font-bold text-foreground">Stack:</span>
          {project.tech.map((t, idx) => (
            <span key={t.name}>
              {idx > 0 && <span className="mx-1 text-border/70">•</span>}
              {t.name}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-6">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                02. Projects
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Featured Applications
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
              A list of software systems and practical AI tools I have built, prioritizing robust implementations, clean data patterns, and user utility.
            </p>
          </ScrollReveal>
        </div>

        {/* Project List */}
        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <ProjectListItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
