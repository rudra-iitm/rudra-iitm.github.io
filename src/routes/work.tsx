import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/animations/Reveal";
import { HeroOrb } from "@/components/sections/HeroOrb";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Rudra Pratap Singh" },
      {
        name: "description",
        content:
          "Selected projects: OpenPrinting containerisation for GSoC, a version control system from scratch in C++, realtime products, and AI experiments.",
      },
      { property: "og:title", content: "Work — Rudra Pratap Singh" },
      {
        property: "og:description",
        content:
          "Six projects across systems, product and AI — from CUPS snaps to LLD practice grounds.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40 md:px-10 md:pb-32 md:pt-56">
        <HeroOrb />
        <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center text-center">
          <p className="font-mono-tag text-muted-foreground">Index · Work</p>
          <h1 className="font-display text-balance-tight mt-6 text-[clamp(3rem,9vw,9rem)]">
            Things I've
            <br />
            <span className="italic text-ember">actually shipped.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            A tight edit of the projects that shaped how I build — from systems work to product
            experiments and pure-curiosity developer tools.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px]">
        <ProjectCategory title="Products" kind="product" />
        <ProjectCategory title="Developer Tools" kind="tool" />
        <ProjectCategory title="Infrastructure" kind="infrastructure" />
      </div>
    </>
  );
}

function ProjectCategory({ title, kind }: { title: string; kind: string }) {
  const categoryProjects = projects.filter((p) => p.kind === kind);

  if (categoryProjects.length === 0) return null;

  return (
    <section className="border-t border-hair px-6 py-16 md:px-10 md:py-24">
      <div className="mb-16">
        <h2 className="font-display text-[clamp(2rem,4vw,4rem)] text-foreground/90">{title}</h2>
      </div>
      <div className="space-y-24 md:space-y-40">
        {categoryProjects.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-mono-tag text-muted-foreground">
                  {p.index} / {String(projects.length).padStart(2, "0")}
                </p>
                <p className="font-mono-tag mt-6 text-muted-foreground">{p.year}</p>
                <p className="font-mono-tag mt-1 text-muted-foreground">{p.role}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-none">
                  {p.title}
                </h3>
                <p className="font-display mt-4 text-2xl italic text-muted-foreground md:text-3xl">
                  {p.tagline}
                </p>

                {p.href ? (
                  <div className="mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-hair bg-paper shadow-2xl relative">
                    <iframe
                      src={p.href}
                      className="absolute inset-0 w-full h-full border-none"
                      title={p.title}
                    />
                  </div>
                ) : p.image ? (
                  <div className="mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-hair bg-paper shadow-2xl relative group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : null}

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {p.body.map((b, k) => (
                    <p key={k} className="text-base leading-relaxed text-muted-foreground">
                      {b}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono-tag rounded-full border border-hair px-3 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-6">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="story-link font-mono-tag"
                    >
                      Live Preview ↗
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="story-link font-mono-tag text-muted-foreground"
                    >
                      View Source ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
            {i < categoryProjects.length - 1 && (
              <div className="mt-24 h-px w-full bg-hair md:mt-40" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
