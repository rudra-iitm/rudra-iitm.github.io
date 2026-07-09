import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/animations/Reveal";
import { HeroOrb } from "@/components/sections/HeroOrb";
import { chapters, operatingPrinciples } from "@/content/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rudra Pratap Singh" },
      {
        name: "description",
        content:
          "Software Engineer at Google. Two-time GSoC contributor. Working on systems, infrastructure, and making tools feel like magic.",
      },
      { property: "og:title", content: "About — Rudra Pratap Singh" },
      {
        property: "og:description",
        content:
          "The long story: from the first terminal to Google, via the open source community.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40 md:px-10 md:pb-32 md:pt-56">
        <HeroOrb />
        <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center text-center">
          <p className="font-mono-tag text-muted-foreground">Index · About</p>
          <h1 className="font-display text-balance-tight mt-6 text-[clamp(2.5rem,10vw,9rem)]">
            A short
            <br />
            <span className="italic text-ember">documentary</span>,<br />
            slowed down.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            The long-form story: from falling in love with systems, to building open-source
            infrastructure, mentoring the next generation, and shipping at Google scale.
          </p>
        </div>
      </section>

      {chapters.map((chapter, idx) => (
        <section
          key={idx}
          className={`px-6 py-24 md:px-10 md:py-40 ${
            idx % 2 === 0 ? "border-y border-hair bg-paper-warm" : ""
          }`}
        >
          <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono-tag text-muted-foreground">Chapter 0{idx + 1}</p>
              <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                {chapter.title}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
              {chapter.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-hair bg-paper-warm px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono-tag text-muted-foreground">Chapter 0{chapters.length + 1}</p>
          <h2 className="font-display mt-4 mb-16 text-4xl leading-tight md:text-5xl">
            Operating principles.
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {operatingPrinciples.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.04}>
                <div className="border-t border-foreground pt-4">
                  <p className="font-mono-tag text-ember">{p.n}</p>
                  <h3 className="font-display mt-3 text-2xl">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
