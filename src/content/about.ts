export const chapters = [
  {
    title: "Curiosity and the terminal.",
    paragraphs: [
      "I fell for computers the way most people fall for a city — slowly, then all at once. IIT Mandi handed me a terminal and a lot of quiet mountain hours; I filled them by writing things that shouldn't have worked, and occasionally did.",
      "My interest was never in the glossy interface, but in the gears beneath it. The first project that truly captured me was building a version-control system in C++ from scratch. Re-implementing Git's plumbing taught me the trick I still rely on: if you can rebuild it, you can trust it.",
    ],
  },
  {
    title: "Open source infrastructure.",
    paragraphs: [
      "Open source became my classroom and my responsibility. Over two consecutive Google Summer of Code programs (2024, 2025), I collaborated with The Linux Foundation and OpenPrinting.",
      "I modernized the OpenPrinting ecosystem—migrating their legacy database to a lightning-fast Next.js static site, and packaging the CUPS printing stack into confined OCI images and Ubuntu Snaps. It was a deep dive into building infrastructure rather than applications, proving that the most critical layers in software are the ones nobody explicitly notices until they break.",
    ],
  },
  {
    title: "Google and engineering quality.",
    paragraphs: [
      "Transitioning to a Software Engineer role at Google fundamentally shifted how I view engineering quality. When you operate at planetary scale, elegance isn't just an aesthetic choice—it's a survival requirement.",
      "My focus is on writing production software that survives scale, edge cases, and time. The biggest lesson has been that technical debt is a design flaw, and that true engineering speed comes from taking the time to get the architecture right the first time.",
    ],
  },
  {
    title: "Mentorship and community.",
    paragraphs: [
      "You don't truly understand a system until you have to teach it to someone else. As a mentor for Winter of Code (2025, 2026) and Google Summer of Code (2026), I've had the privilege of helping new contributors navigate the open-source world.",
      "Mentorship is about more than just reviewing code; it's about helping contributors become maintainers. It's about growing communities, instilling engineering taste, and showing others that even the most intimidating codebases are just files written by regular people.",
    ],
  },
];

export const operatingPrinciples = [
  {
    n: "01",
    t: "Build software that ages well.",
    d: "Write code that won't embarrass you in five years.",
  },
  {
    n: "02",
    t: "Simplicity survives scale.",
    d: "Complexity is a liability when millions of users hit the server.",
  },
  {
    n: "03",
    t: "Infrastructure is user experience.",
    d: "If the backend is slow, the most beautiful UI won't save you.",
  },
  {
    n: "04",
    t: "Read the source.",
    d: "Every dependency is a promise; verify it by reading the code yourself.",
  },
  {
    n: "05",
    t: "Design for maintainers.",
    d: "Optimize for the person reading the code at 2 AM during an outage.",
  },
  {
    n: "06",
    t: "Small abstractions compound.",
    d: "The difference between good and great engineering is a hundred tiny, thoughtful decisions.",
  },
];
