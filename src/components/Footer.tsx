"use client";

import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card py-12 mt-12">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center bg-foreground text-background rounded-none">
              <span className="font-display text-xs font-bold">A</span>
            </div>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              Abdi Sileshi
            </span>
          </div>

          {/* Social Icons Links */}
          <div className="flex items-center gap-3.5 text-muted-foreground">
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-4.5 w-4.5" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-4.5 w-4.5" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-4.5 w-4.5" />
            </Link>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 pt-8 flex flex-col gap-4.5 sm:flex-row sm:items-center sm:justify-between text-[11px] text-muted-foreground">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono">
            <span>&copy; {new Date().getFullYear()} {personalInfo.fullName}</span>
            <span>•</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1.5 font-bold text-foreground hover:underline cursor-pointer"
          >
            Back to Top
            <FiArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
