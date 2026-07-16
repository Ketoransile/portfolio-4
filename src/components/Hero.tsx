"use client";

import { useEffect, useState } from "react";
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
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % personalInfo.roles.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center py-16"
    >
      <div className="w-full">
        {/* Layout Wrapper: Text & Profile Photo */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Left: Bio Text */}
          <div className="order-2 flex-1 text-center md:order-1 md:text-left">
            <ScrollReveal animation="up" delay={100}>
              <span className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground rounded-none select-none">
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
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <p className="font-display text-lg font-bold text-muted-foreground sm:text-xl">
                  Software Engineer
                </p>
                <span className="hidden md:inline text-muted-foreground/45">•</span>
                <p className="text-sm font-semibold text-foreground">
                  {personalInfo.roles[roleIndex]}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="up" delay={400} className="mt-4.5">
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
                I build robust, high-performance web products. Specializing in Next.js applications, database systems, and full-stack AI workflows. Focused on turning complex problems into clear, readable, and scalable software.
              </p>
            </ScrollReveal>

            {/* Clean, borderless stats row */}
            <ScrollReveal animation="up" delay={500} className="mt-6">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 md:justify-start text-xs font-mono font-bold text-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground font-normal">projects:</span>
                  <span>15+</span>
                </div>
                <span className="text-border/80 hidden sm:inline">/</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground font-normal">experience:</span>
                  <span>3+ years</span>
                </div>
                <span className="text-border/80 hidden sm:inline">/</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-muted-foreground font-normal">academics:</span>
                  <span>3.89 CGPA @ Adama Science & Tech Univ. (ASTU)</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Unified CTAs and Social Media Row */}
            <ScrollReveal animation="up" delay={600} className="mt-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                {/* CTA Buttons */}
                <div className="flex w-full sm:w-auto items-center gap-2">
                  <Link
                    href="#projects"
                    className="group inline-flex h-9.5 flex-1 sm:flex-initial items-center justify-center gap-1.5 bg-foreground px-5 text-xs font-bold text-background hover:opacity-90 active:scale-97 transition-all rounded-none"
                  >
                    View My Work
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9.5 flex-1 sm:flex-initial items-center justify-center gap-1.5 border border-border bg-card px-5 text-xs font-bold text-muted-foreground hover:border-foreground hover:text-foreground active:scale-97 transition-all rounded-none"
                  >
                    <FiExternalLink className="h-3.5 w-3.5" />
                    Resume
                  </Link>
                </div>

                {/* Vertical separator visible on desktop */}
                <div className="hidden md:block h-6 w-px bg-border mx-1" />

                {/* Social links */}
                <div className="flex items-center gap-2">
                  <Link
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:-translate-y-0.5 rounded-none"
                    aria-label="GitHub"
                  >
                    <FiGithub className="h-4 w-4" />
                  </Link>
                  <Link
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:-translate-y-0.5 rounded-none"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="flex h-9 w-9 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:-translate-y-0.5 rounded-none"
                    aria-label="Email"
                  >
                    <FiMail className="h-4 w-4" />
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
