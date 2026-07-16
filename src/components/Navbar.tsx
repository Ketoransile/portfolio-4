"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiExternalLink } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-200 glass ${
        scrolled ? "py-3 shadow-xs" : "py-4.5 bg-transparent"
      } rounded-none`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6">
        {/* Brand Logo - Just text, no block */}
        <Link href="#home" className="flex items-center gap-1 group">
          <span className="font-display text-base font-extrabold tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
            Abdi Sileshi<span className="text-muted-foreground/60 font-medium">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors rounded-none ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Borderless Resume Link in Nav Links */}
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            Resume <FiExternalLink className="h-3 w-3" />
          </a>
        </nav>

        {/* Actions Button Bar */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8.5 w-8.5 items-center justify-center bg-transparent text-muted-foreground hover:text-foreground md:hidden transition-colors rounded-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX className="h-4.5 w-4.5" /> : <FiMenu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Overlay */}
      {mobileOpen && (
        <div className="absolute top-full left-0 z-40 w-full glass px-6 py-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-150 rounded-none">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-2.5 text-xs font-semibold transition-colors rounded-none ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="mt-3.5 grid grid-cols-2 gap-2 border-t border-border pt-3.5">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 items-center justify-center gap-1 text-xs font-bold text-foreground border border-border bg-card rounded-none"
              >
                Resume <FiExternalLink className="h-3 w-3" />
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex h-9 items-center justify-center gap-1.5 bg-foreground text-xs font-bold text-background rounded-none"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
