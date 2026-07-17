"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center py-16"
    >
      <div className="w-full">
        {/* Layout Wrapper: Text & Profile Photo */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Left: Bio Text */}
          <div className="order-2 flex-1 text-left md:order-1">
            <ScrollReveal animation="up" delay={100}>
              <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground select-none">
                <span className="h-1.5 w-1.5 bg-foreground animate-pulse" />
                status: open to software engineering roles
              </span>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={200} className="mt-5">
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Hi, I&apos;m {personalInfo.name}
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={300} className="mt-3">
              <p className="font-display text-lg font-bold text-muted-foreground sm:text-xl">
                Software Engineer specializing in Full-Stack & AI Integrations.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={400} className="mt-4.5">
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                I build robust, high-performance web products. Specializing in Next.js applications, database systems, and full-stack AI workflows. Focused on turning complex problems into clear, readable, and scalable software.
              </p>
            </ScrollReveal>

            {/* Clean, borderless editorial metadata grid */}
            <ScrollReveal animation="up" delay={500} className="mt-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs font-mono text-left">
                <div>
                  <span className="block text-muted-foreground uppercase tracking-wider text-[10px] mb-1">Specialization</span>
                  <span className="font-bold text-foreground">Full-Stack & AI</span>
                </div>
                <div>
                  <span className="block text-muted-foreground uppercase tracking-wider text-[10px] mb-1">Experience</span>
                  <span className="font-bold text-foreground">3+ Years</span>
                </div>
                <div>
                  <span className="block text-muted-foreground uppercase tracking-wider text-[10px] mb-1">Academics</span>
                  <span className="font-bold text-foreground">3.89 CGPA (Software Eng.)</span>
                </div>
                <div>
                  <span className="block text-muted-foreground uppercase tracking-wider text-[10px] mb-1">Location</span>
                  <span className="font-bold text-foreground">Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Unified CTAs and Social Media Row */}
            <ScrollReveal animation="up" delay={600} className="mt-8">
              <div className="flex flex-wrap items-center gap-4 text-left">
                {/* CTA Buttons */}
                <div className="flex items-center gap-2">
                  <Link
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-1.5 border border-border bg-card px-5 text-xs font-bold text-muted-foreground hover:border-foreground hover:text-foreground active:scale-95 transition-all rounded-none"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" />
                    Resume
                  </Link>
                  <Link
                    href="#projects"
                    className="group inline-flex h-10 items-center justify-center gap-1.5 bg-foreground px-5 text-xs font-bold text-background hover:opacity-90 active:scale-95 transition-all rounded-none"
                  >
                    View Projects
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2">
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                    aria-label="GitHub"
                  >
                    <FiGithub className="h-4.5 w-4.5" />
                  </Link>
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-4.5 w-4.5" />
                  </Link>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-all hover:text-foreground hover:-translate-y-0.5"
                    aria-label="Email"
                  >
                    <FiMail className="h-4.5 w-4.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sharp Portrait Editorial Photo - Borderless */}
          <div className="order-1 flex justify-center md:order-2 shrink-0">
            <ScrollReveal animation="up" delay={150}>
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="relative h-56 w-40 bg-card rounded-none overflow-hidden">
                  <Image
                    src="/my_second_image.png"
                    alt={personalInfo.fullName}
                    fill
                    priority
                    sizes="10rem"
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-[9px] font-mono text-muted-foreground/80 tracking-wider uppercase select-none">
                  Abdi Sileshi Worku
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
