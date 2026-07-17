export interface Project {
  title: string;
  type: string;
  role: string;
  focus: string;
  outcome: string;
  description: string;
  img: string;
  tech: { name: string; icon: string }[];
  highlights: string[];
  live?: string;
  github?: string;
  backend?: string;
}

export interface Skill {
  title: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  type: string;
  date: string;
  location: string;
  description: string;
  logo: string;
  work: string[];
}

export interface CourseCategory {
  category: string;
  courses: string[];
}

export const personalInfo = {
  name: "Abdi Sileshi",
  fullName: "Abdi Sileshi Worku",
  title: "Software Engineer",
  roles: [
    "Full-Stack Developer",
    "Product-Minded Engineer",
    "AI Integrations Developer",
    "Problem Solver",
  ],
  email: "abdisileshi123@gmail.com",
  phone: "+251 988 734 632",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Ketoransile",
  linkedin: "https://linkedin.com/in/abdi-sileshi-56710a2a6",
  resume: "https://drive.google.com/file/d/1ewHEq0WvVtWYGblq4clqaiOGmVV_u06k/view?usp=sharing",
  bio: [
    "I am Abdi Sileshi Worku, a graduating Software Engineering student who builds full-stack applications with React, Next.js, Node.js, databases, and AI tools.",
    "I like projects that are practical: tools for document search, resume analysis, ecommerce, rental booking, job listings, and real estate discovery. I care about clean interfaces, reliable backend logic, and making the product easy to understand.",
    "My current focus is becoming sharper at production-ready full-stack development: strong TypeScript, clear architecture, useful AI features, and simple user experiences."
  ]
};

export const stats = [
  { value: "15+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "3.89", label: "ASTU CGPA" },
];

export const highlights = [
  {
    title: "Frontend Development",
    desc: "React, Next.js, Tailwind CSS, responsive interfaces, and clear user flows.",
  },
  {
    title: "Backend Services",
    desc: "Node.js, Express, FastAPI, REST APIs, authentication, and service design.",
  },
  {
    title: "Data Systems",
    desc: "MongoDB, PostgreSQL, Supabase, Redis, and data models for real products.",
  },
  {
    title: "AI Integrations",
    desc: "OpenAI integrations, RAG workflows, AI analysis tools, and practical automation.",
  },
];

export const projects: Project[] = [
  /*
  {
    title: "Enterprise Graph RAG",
    type: "Full-Stack AI Platform",
    role: "Full-Stack Engineer",
    focus: "Graph-based RAG, Multi-tenant RBAC, Knowledge Retrieval",
    outcome: "A multi-tenant enterprise platform that builds a knowledge graph from uploaded documents and enables conversational AI queries.",
    description: "Enterprise Graph RAG combines vector search, BM25 keyword search, and Reciprocal Rank Fusion to retrieve document chunks. It constructs a Neo4j knowledge graph, enforces strict RBAC security filtering before LLM generation, and provides an interactive graph explorer.",
    img: "/projectsPictures/enterprise-graph-rag.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Python", icon: "/techIcons/python.svg" },
      { name: "FastAPI", icon: "/techIcons/fastapi.svg" },
      { name: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
      { name: "Neo4j", icon: "/techIcons/neo4j.svg" },
      { name: "Redis", icon: "/techIcons/redis.svg" },
      { name: "OpenAI", icon: "/techIcons/openai.svg" },
      { name: "Docker", icon: "/toolsImage/docker.svg" },
    ],
    highlights: [
      "Hybrid retrieval pipeline with vector search, BM25, and Reciprocal Rank Fusion",
      "Interactive knowledge graph explorer with entity filtering and relationship inspection",
      "Multi-tenant architecture with strict RBAC security filtering across 4 clearance levels",
      "Real-time streaming chat with document citations and conversation history",
    ],
    live: "https://enterprise-graph-rag.vercel.app/",
    github: "https://github.com/Ketoransile/Enterprise-Graph-Rag",
  },
  */
  {
    title: "Reveal - AI Conversion Analyzer",
    type: "AI SaaS Product",
    role: "Product Engineer",
    focus: "AI analysis, UX scoring, SaaS workflow",
    outcome: "A focused AI tool that reviews website copy and explains how to improve conversion.",
    description: "Reveal analyzes page content, estimates conversion quality, and returns practical recommendations that are easy to act on.",
    img: "/projectsPictures/reveal.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Supabase", icon: "/techIcons/supabase.svg" },
      { name: "OpenAI", icon: "/techIcons/openai.svg" },
    ],
    highlights: [
      "AI-powered website and copy analysis",
      "Conversion scoring with actionable recommendations",
      "Clean SaaS-style interface with fast feedback loops",
    ],
    live: "https://reveal-analysis.vercel.app/",
    github: "https://github.com/Ketoransile/Reveal",
  },
  {
    title: "SEPMS - Smart Entrepreneurial Pitching & Matching System",
    type: "AI-Enabled Startup-Investor Platform",
    role: "Full-Stack Engineer (Team of 5)",
    focus: "Full-stack product delivery, Gemini AI features, bilingual UX, pitch workflows",
    outcome: "Helped ship a production-ready platform that connects entrepreneurs with investors through AI-assisted pitch review, audio summaries, and multilingual communication.",
    description: "Contributed across frontend, backend, and AI integration for a final-year platform used by entrepreneurs, investors, and admins. Built core pitch submission/review flows, dashboard experiences, and AI-powered features including Gemini pitch summarization, voice narration (TTS), and real-time EN/AM message translation.",
    img: "/projectsPictures/sepms.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { name: "Firebase", icon: "/techIcons/firebase.svg" },
      { name: "Gemini API", icon: "/techIcons/gemini.svg" },
      { name: "Cloudinary", icon: "/techIcons/cloudinary.svg" },
      { name: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
    ],
    highlights: [
      "Built Gemini-powered pitch summarization with audio narration (TTS) and retry/status handling",
      "Implemented backend translation service and bilingual UI (English/Amharic) across major app flows",
      "Delivered full-stack pitch submission features: document validation, YouTube video support, admin review gates, and auth/compliance fixes",
    ],
    live: "https://smart-entrepreneurial-pitching-matc-alpha.vercel.app/",
    github: "https://github.com/Mafiv/Smart-Entrepreneurial-Pitching-Matching-System",
  },
  {
    title: "AI-Powered Resume Analyzer",
    type: "AI Career Tool",
    role: "Full-Stack Developer",
    focus: "Resume parsing, AI scoring, backend API",
    outcome: "A job-search assistant that compares resumes with job descriptions and gives fit feedback.",
    description: "The app scores resume alignment, explains gaps, and helps applicants improve the way they present their experience.",
    img: "/projectsPictures/resumeAnalyzer.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "OpenAI", icon: "/techIcons/openai.svg" },
    ],
    highlights: [
      "Resume to job-description match scoring",
      "Separate frontend and backend repositories",
      "AI feedback designed around practical application decisions",
    ],
    live: "https://elevatcv.vercel.app/",
    github: "https://github.com/Ketoransile/ResumeAnalyzerFrontend",
    backend: "https://github.com/Ketoransile/ResumeAnalyzerBackend",
  },
  {
    title: "Ethio Shop Ecommerce",
    type: "Commerce Platform",
    role: "Full-Stack Developer",
    focus: "Checkout, product browsing, payments",
    outcome: "A modern ecommerce storefront with product browsing, responsive pages, and secure payment flow.",
    description: "I built the product experience, checkout path, and data-backed shopping flow using a modern Next.js stack.",
    img: "/projectsPictures/ethioShop.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Stripe", icon: "/techIcons/stripe.png" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Product catalog and shopping experience",
      "Stripe checkout integration",
      "Responsive UI optimized for browsing and purchase flow",
    ],
    live: "https://ethio-shop.vercel.app/",
    github: "https://github.com/Ketoransile/EthioShop",
  },
  {
    title: "Drivezy Car Rental",
    type: "Booking Platform",
    role: "Full-Stack Developer",
    focus: "Filtering, bookings, API design",
    outcome: "A car-rental workflow where users can browse, filter, and book vehicles quickly.",
    description: "Drivezy combines a React interface with a Node/Express API and MongoDB database for vehicle inventory and bookings.",
    img: "/projectsPictures/drivezyCarRental.png",
    tech: [
      { name: "React", icon: "/techIcons/react.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
    ],
    highlights: [
      "Fleet browsing with useful filters",
      "Booking workflow backed by an Express API",
      "MongoDB data model for inventory and reservations",
    ],
    live: "https://drivezy-car-rental.vercel.app/",
    github: "https://github.com/Ketoransile/CarRental",
  },
  {
    title: "NextJobs",
    type: "Job Marketplace",
    role: "Full-Stack Developer",
    focus: "Listings, filters, applications",
    outcome: "A job board experience with searchable listings and a direct application flow.",
    description: "NextJobs lets users browse roles by category and location, then apply through a responsive interface connected to backend services.",
    img: "/projectsPictures/nextJobs.png",
    tech: [
      { name: "Next.js", icon: "/techIcons/next.svg" },
      { name: "TypeScript", icon: "/techIcons/typescript.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Job browsing by category and location",
      "Application flow connected to backend services",
      "Responsive UI built for fast scanning",
    ],
    live: "https://job-portal-omega-flame.vercel.app/",
    github: "https://github.com/Ketoransile/JobPortal",
  },
  {
    title: "Bet Real Estate Platform",
    type: "Real Estate App",
    role: "MERN Developer",
    focus: "Listings, agents, property discovery",
    outcome: "A property discovery platform with listing management and agent connection flows.",
    description: "The platform supports property browsing, agent contact, and listing workflows through a responsive MERN stack application.",
    img: "/projectsPictures/betRealEstate.png",
    tech: [
      { name: "React", icon: "/techIcons/react.svg" },
      { name: "Tailwind", icon: "/techIcons/tailwind.svg" },
      { name: "Node.js", icon: "/techIcons/node.svg" },
      { name: "Express", icon: "/techIcons/express-js.svg" },
      { name: "MongoDB", icon: "/techIcons/mongodb.svg" },
    ],
    highlights: [
      "Property browsing and listing management",
      "Agent contact and discovery workflows",
      "MERN architecture with a clean responsive frontend",
    ],
    live: "https://bet-real-estate.vercel.app/",
    github: "https://github.com/Ketoransile/Bet-Real-EstateProject",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { title: "TypeScript", icon: "/techIcons/typescript.svg" },
      { title: "JavaScript", icon: "/techIcons/javascript.svg" },
      { title: "React", icon: "/techIcons/react.svg" },
      { title: "Next.js", icon: "/techIcons/next.svg" },
      { title: "Tailwind CSS", icon: "/techIcons/tailwind.svg" },
      { title: "Node.js", icon: "/techIcons/node.svg" },
      { title: "Express.js", icon: "/techIcons/express-js.svg" },
      { title: "FastAPI", icon: "/techIcons/fastapi.svg" },
      { title: "Python", icon: "/techIcons/python.svg" },
      { title: "React Native", icon: "/techIcons/react.svg" },
      { title: "Expo", icon: "/techIcons/expo.svg" },
      { title: "C++", icon: "/techIcons/cpp.svg" },
      { title: "HTML", icon: "/techIcons/html.svg" },
      { title: "CSS", icon: "/techIcons/css.svg" },
    ],
  },
  {
    category: "Databases & AI Tools",
    skills: [
      { title: "MongoDB", icon: "/techIcons/mongodb.svg" },
      { title: "PostgreSQL", icon: "/techIcons/postgresql.svg" },
      { title: "Supabase", icon: "/techIcons/supabase.svg" },
      { title: "Neo4j", icon: "/techIcons/neo4j.svg" },
      { title: "Redis", icon: "/techIcons/redis.svg" },
      { title: "OpenAI API", icon: "/techIcons/openai.svg" },
      { title: "Stripe", icon: "/techIcons/stripe.png" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { title: "Docker", icon: "/toolsImage/docker.svg" },
      { title: "Figma", icon: "/toolsImage/figma.svg" },
      { title: "Git", icon: "/toolsImage/git.svg" },
      { title: "GitHub", icon: "/toolsImage/github.svg" },
      { title: "Vercel", icon: "/toolsImage/vercel.svg" },
      { title: "Railway", icon: "/techIcons/railway.svg" },
      { title: "Vite", icon: "/toolsImage/vite.svg" },
      { title: "VS Code", icon: "/toolsImage/vscode.svg" },
      { title: "npm", icon: "/toolsImage/npm.svg" },
      { title: "Netlify", icon: "/toolsImage/netlify.svg" },
    ],
  },
];

export const workExperience: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Information Network Security Administration (INSA)",
    type: "Internship",
    date: "Jul 2025 - Sep 2025",
    location: "Addis Ababa, Ethiopia",
    description: "Built a microservice-oriented inventory management application with a React frontend during my Software Developer Internship.",
    logo: "/insa_logo.png",
    work: [
      "Worked on frontend screens and product flow for inventory management",
      "Connected UI workflows with service-oriented backend logic",
      "Practiced working in a real engineering environment",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Ministry of Innovation and Technology (MinT)",
    type: "Internship",
    date: "Jul 2024 - Sep 2024",
    location: "Addis Ababa, Ethiopia",
    description: "Developed a scalable real estate website using the MERN stack, covering frontend, backend, UI polish, and performance improvements.",
    logo: "/mit_logo.png",
    work: [
      "Built React interfaces for property discovery and listing workflows",
      "Implemented backend features with Node.js, Express, and MongoDB",
      "Improved responsiveness, usability, and application structure",
    ],
  },
];

export const education = {
  degree: "B.Eng. Software Engineering",
  school: "Adama Science and Technology University (ASTU)",
  year: "May 2022 - July 2026",
  location: "Adama, Ethiopia",
  cgpa: "3.89",
};

export const courseCategories: CourseCategory[] = [
  {
    category: "Software Engineering",
    courses: [
      "Requirements Engineering",
      "Software Architecture & Design",
      "Software Testing & Quality Assurance",
      "Project Management",
    ],
  },
  {
    category: "Computer Science",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Discrete Mathematics",
    ],
  },
  {
    category: "Systems & Data",
    courses: [
      "Database Systems",
      "Distributed Software Systems",
      "Data Communication & Networks",
      "Unix/Linux Programming",
    ],
  },
  {
    category: "AI & Product",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Web & Mobile App Development",
    ],
  },
];
