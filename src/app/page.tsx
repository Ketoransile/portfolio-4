import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";
import { personalInfo } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    alternateName: personalInfo.name,
    url: "https://www.abdisileshi.dev",
    jobTitle: personalInfo.title,
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "React",
      "Node.js",
      "FastAPI",
      "Python",
      "TypeScript",
      "Database Systems",
      "AI & Large Language Models",
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Floating Centered Sticky Navbar */}
      <Navbar />

      {/* Main content container restricted to max-w-3xl with natural spacing */}
      <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-16 space-y-12">
        {/* Sections */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Footer layout */}
      <Footer />
    </main>
  );
}
