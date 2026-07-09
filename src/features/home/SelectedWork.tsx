import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "@/components/animations/Magnetic";
import { projects, type Project } from "@/content/projects";

export function SelectedWork() {
  const featuredSlugs = ["openprinting-website", "ledger", "creator-journey", "innovatex"];
  const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)!);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = featured.find((p) => p.slug === activeSlug) ?? featured[0];

  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <p className="font-mono-tag text-muted-foreground">§ 02 — Selected work</p>
            <h2 className="font-display mt-3 text-[clamp(2.5rem,7vw,6rem)] leading-none">
              Work worth
              <br />
              <span className="italic text-ember">opening.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-8">
            Each project is a small artifact: what it proves, where it shipped, and the layer of
            engineering taste it sharpened.
          </p>
          <Link
            to="/work"
            className="story-link font-mono-tag md:col-span-1 md:col-start-12 md:text-right"
          >
            All work
          </Link>
        </header>

        <div className="grid gap-8 lg:grid-cols-12">
          <ProjectPreview project={active} />

          <ul
            className={`border-t lg:col-span-8 transition-colors duration-300 ${activeSlug ? "border-transparent" : "border-hair"}`}
            onMouseLeave={() => setActiveSlug(null)}
          >
            {featured.map((p) => (
              <li
                key={p.slug}
                className={`border-b last:border-b-0 transition-colors duration-300 ${activeSlug ? "border-transparent" : "border-hair"}`}
              >
                <Link
                  to="/work"
                  onMouseEnter={() => setActiveSlug(p.slug)}
                  onFocus={() => setActiveSlug(p.slug)}
                  onClick={(e) => {
                    // On touch devices without hover, require two taps to navigate
                    if (activeSlug !== p.slug) {
                      e.preventDefault();
                      setActiveSlug(p.slug);
                    }
                  }}
                  className={`project-row group block px-0 py-8 outline-none transition-opacity duration-300 md:px-6 ${activeSlug === null || activeSlug === p.slug ? "opacity-100" : "opacity-40"}`}
                  data-cursor="hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8 md:gap-12">
                      <p className="font-mono-tag text-muted-foreground">{p.index}</p>
                      <h3 className="font-display text-[clamp(2rem,4vw,4rem)] leading-tight transition-transform duration-500 group-hover:translate-x-3">
                        {p.title}
                      </h3>
                    </div>

                    <Magnetic strength={0.22}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hair bg-paper transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
                        <ArrowUpRight size={20} aria-hidden />
                      </div>
                    </Magnetic>
                  </div>

                  <AnimatePresence>
                    {activeSlug === p.slug && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 md:pl-[4.5rem]">
                          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                            {p.body[0]}
                          </p>
                          <div className="mt-8 flex flex-wrap gap-8 md:gap-16 border-t border-hair pt-6">
                            <div>
                              <p className="font-mono-tag text-muted-foreground">Proof</p>
                              <p className="mt-2 text-lg">{p.year}</p>
                            </div>
                            <div>
                              <p className="font-mono-tag text-muted-foreground">Stack</p>
                              <p className="mt-2 text-lg">{p.stack.slice(0, 3).join(" · ")}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const initials = project.title
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  return (
    <aside className="relative z-20 h-[24rem] mb-12 block lg:sticky lg:top-28 lg:mb-0 lg:h-[42rem] lg:col-span-4">
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full flex-col justify-between"
      >
        <div className="z-10 pointer-events-none">
          <div className="flex items-center justify-between">
            <p className="font-mono-tag text-muted-foreground">Active artifact</p>
            <span className="font-mono-tag text-ember">{project.kind}</span>
          </div>
        </div>

        <Magnetic
          strength={0.2}
          className="absolute inset-0 z-10 pointer-events-auto cursor-pointer"
        >
          <div className="flex h-full w-full items-center justify-center lg:translate-x-12 pointer-events-none">
            <motion.div
              animate={{
                rotate: [0, 360],
                borderRadius: [
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                  "40% 60% 70% 30% / 50% 40% 60% 50%",
                  "70% 30% 40% 60% / 60% 70% 30% 40%",
                  "30% 70% 60% 40% / 40% 30% 70% 60%",
                  "50% 50% 30% 70% / 70% 60% 40% 30%",
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                ],
              }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="relative flex aspect-square w-[320px] max-w-[90vw] lg:w-[500px] lg:max-w-[150%] items-center justify-center overflow-hidden border border-hair bg-paper/70 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {project.href ? (
                  <div className="pointer-events-none relative h-full w-full opacity-60 mix-blend-luminosity transition-all hover:opacity-100 hover:mix-blend-normal">
                    <div
                      className="absolute left-1/2 top-1/2 w-[1280px] h-[1280px]"
                      style={{ transform: "translate(-50%, -50%) scale(0.4)" }}
                    >
                      <iframe
                        src={project.href}
                        className="w-full h-full border-none pointer-events-none"
                        title={`${project.title} preview`}
                      />
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="pointer-events-none relative h-full w-full opacity-60 mix-blend-luminosity transition-all hover:opacity-100 hover:mix-blend-normal">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ transform: "scale(1.5)" }}
                    />
                  </div>
                ) : (
                  <p className="font-display text-[clamp(4rem,7vw,7rem)] leading-none text-foreground/90">
                    {initials}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </div>
        </Magnetic>
      </motion.div>
    </aside>
  );
}
