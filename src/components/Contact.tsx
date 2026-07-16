"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { toast } from "sonner";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <FiMail className="h-4 w-4" />,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: <FiPhone className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    value: "github.com/Ketoransile",
    href: personalInfo.github,
    icon: <FiGithub className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abdi-sileshi-56710a2a6",
    href: personalInfo.linkedin,
    icon: <FiLinkedin className="h-4 w-4" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", "ae571f37-8e03-4b62-a37a-c558f552db2e");
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-8">
          <ScrollReveal animation="up">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                06. Contact
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Let&apos;s Connect
            </h2>
          </ScrollReveal>
        </div>

        {/* Content Stack */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Details Column */}
          <ScrollReveal animation="up" delay={150}>
            <div className="space-y-4">
              <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                I am based in Addis Ababa, Ethiopia. Feel free to reach out for software engineering opportunities, internships, collaborations, or tech discussion.
              </p>
              
              <div className="grid gap-3 pt-2">
                {contactLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-card rounded-none">
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-bold text-foreground truncate">{item.value}</span>
                    </span>
                  </Link>
                ))}

                {/* Location */}
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-card rounded-none">
                    <FiMapPin className="h-4 w-4" />
                  </span>
                  <span className="font-bold text-foreground">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Column */}
          <ScrollReveal animation="up" delay={200}>
            <div>
              {submitted ? (
                <div className="flex min-h-[14rem] flex-col items-center justify-center border border-foreground/20 bg-card p-6 text-center animate-in fade-in duration-200 rounded-none">
                  <div className="mb-3.5 flex h-10 w-10 items-center justify-center bg-foreground text-background rounded-none">
                    <FiSend className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground">Message Sent</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground max-w-xs">
                    Thank you. I will reply to you as soon as I can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="flex h-10 w-full bg-card border border-border px-3 text-xs text-foreground placeholder-muted-foreground outline-hidden transition-all focus:border-foreground focus:ring-1 focus:ring-foreground rounded-none"
                        placeholder="Name"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="flex h-10 w-full bg-card border border-border px-3 text-xs text-foreground placeholder-muted-foreground outline-hidden transition-all focus:border-foreground focus:ring-1 focus:ring-foreground rounded-none"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="flex w-full resize-none bg-card border border-border px-3 py-3 text-xs text-foreground placeholder-muted-foreground outline-hidden transition-all focus:border-foreground focus:ring-1 focus:ring-foreground rounded-none"
                      placeholder="Hi Abdi, I'd like to collaborate..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-10 items-center justify-center gap-1.5 bg-foreground px-6 text-xs font-bold text-background hover:opacity-90 active:scale-97 disabled:opacity-75 transition-all cursor-pointer rounded-none"
                  >
                    {isSubmitting ? (
                      <span className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                    ) : (
                      <>
                        Send Message
                        <FiSend className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
