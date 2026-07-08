export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  href?: string;
  repo?: string;
  image?: string;
  kind: "product" | "infrastructure" | "tool" | "experiment";
  body: string[];
};

export const projects: Project[] = [
  {
    slug: "openprinting-website",
    index: "01",
    title: "OpenPrinting",
    tagline: "Modernization of the OpenPrinting website and printer database.",
    year: "2024 – Present",
    role: "Core Maintainer · The Linux Foundation",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Static Generation"],
    repo: "https://github.com/OpenPrinting/openprinting.github.io",
    href: "https://openprinting.github.io",
    kind: "infrastructure",
    body: [
      "Led the complete modernization of the OpenPrinting website, migrating it to a modern Next.js static generation stack.",
      "Rebuilt the developer experience and improved the printer database infrastructure, ensuring it scales for the entire Linux ecosystem.",
      "The result is a fast, maintainable, and highly accessible platform that serves developers, maintainers, and users globally.",
    ],
  },
  {
    slug: "ledger",
    index: "02",
    title: "Ledger",
    tagline: "A beautifully designed financial product.",
    year: "2025",
    role: "Creator",
    stack: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    repo: "https://github.com/rudra-iitm/ledger",
    href: "https://rudra-iitm.github.io/ledger/",
    kind: "product",
    body: [
      "A financial product where design and architecture receive equal attention. Built to feel native, responsive, and incredibly fast.",
      "Features complex micro-animations, a fluid layout system, and an architecture that gracefully handles data complexity without sacrificing user experience.",
    ],
  },
  {
    slug: "table-x",
    index: "03",
    title: "Table X",
    tagline: "A modern developer component for massive datasets.",
    year: "2025",
    role: "Creator",
    stack: ["TypeScript", "React", "Data Grid"],
    repo: "https://github.com/rudra-iitm/table-x",
    kind: "tool",
    body: [
      "Not just a GitHub repository, but a thoughtfully designed developer component meant for handling massive datasets with zero jank.",
      "Includes an interactive playground, live documentation, and headless architecture to give developers complete control over the presentation layer.",
    ],
  },
  {
    slug: "innovatex",
    index: "04",
    title: "InnovateX",
    tagline: "An AI-powered product for automated deployments.",
    year: "2025",
    role: "Creator",
    stack: ["TypeScript", "LLM APIs", "Docker", "CI"],
    repo: "https://github.com/rudra-iitm/InnovateX",
    image: "/innovatex.png",
    kind: "product",
    body: [
      "An AI-powered product designed to reduce the distance from idea to a running URL. Prompted generation, one-click deploy, opinionated defaults.",
      "Explores the intersection of AI generation and deterministic infrastructure, proving that intelligent tools can still output clean, maintainable code.",
    ],
  },
  {
    slug: "desktop-snaps",
    index: "05",
    title: "Desktop Snaps",
    tagline: "Confined Linux printing applications.",
    year: "2024",
    role: "GSoC Contributor",
    stack: ["C", "Snap", "AppArmor", "Ubuntu"],
    repo: "https://github.com/OpenPrinting",
    kind: "infrastructure",
    body: [
      "Worked on packaging the CUPS printing stack, Ghostscript, HPLIP and Gutenprint as confined snaps so millions of Ubuntu users get a modern, sandboxed printing experience out of the box.",
    ],
  },
  {
    slug: "creator-journey",
    index: "06",
    title: "Creator Journey",
    tagline: "Your AI coach for the first 90 days of creator growth.",
    year: "2024",
    role: "Creator",
    stack: ["React", "AI APIs", "Next.js", "Tailwind CSS"],
    repo: "https://github.com/rudra-iitm/creator-journey",
    href: "https://creator-journey-five.vercel.app/",
    kind: "product",
    body: [
      "An intelligent AI-powered co-pilot built to hold a creator's hand from 'I have no ideas' to their first 20k followers.",
      "Acts as a full Creator OS that handles niche selection, weekly content planning, script writing, viral prediction, and post-performance debriefs.",
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
