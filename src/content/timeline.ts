export type TimelineBeat = {
  year: string;
  label: string;
  note: string;
  lesson: string;
  image: string;
};

export const beats: TimelineBeat[] = [
  {
    year: "2022",
    label: "IIT Mandi",
    note: "Joined IIT Mandi. Started contributing to Open Source and gained first exposure to systems engineering.",
    lesson: "Curiosity became practice.",
    image: "/logo_hires.png",
  },
  {
    year: "2024",
    label: "GSoC 2024",
    note: "First Google Summer of Code. Worked on OpenPrinting and Ubuntu Desktop Snaps, modernizing legacy systems.",
    lesson: "Infrastructure is user experience.",
    image:
      "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-logo-horizontal.svg",
  },
  {
    year: "2025",
    label: "Google Intern & Mentorship",
    note: "Google Software Engineering Intern. Also started giving back as a Winter of Code 2025 Mentor and GSoC Mentor.",
    lesson: "Teaching compounds knowledge.",
    image: "https://developers.google.com/static/identity/images/g-logo.png",
  },
  {
    year: "2026",
    label: "GSoC & WoC Mentor",
    note: "Continued leadership in open source by mentoring for both Winter of Code 2026 and Google Summer of Code 2026.",
    lesson: "Small abstractions compound.",
    image:
      "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-logo-horizontal.svg",
  },
  {
    year: "2026+",
    label: "Google SWE",
    note: "Full-time Software Engineer at Google. Building infrastructure, products, and software that scales.",
    lesson: "Building software that ages well.",
    image: "https://developers.google.com/static/identity/images/g-logo.png",
  },
];
