import { Reveal } from "@/components/animations/Reveal";
import { useSplitReveal } from "@/hooks/useSplitReveal";

export function IntroStatement() {
  const textRef = useSplitReveal<HTMLParagraphElement>({
    splitType: "lines",
    mode: "lineSlide",
    stagger: 0.05,
  });

  return (
    <section className="relative border-y border-hair px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-mono-tag text-muted-foreground">§ 01 — Manifesto</p>
        </div>
        <Reveal className="md:col-span-9">
          <div
            ref={textRef}
            className="font-display text-balance-tight text-[clamp(2rem,4vw,4.2rem)]"
          >
            <div className="split-target">
              Most software is <em className="not-italic italic text-ember">written twice</em> —
              once
            </div>
            <div className="split-target">
              for the demo, and once for the people who actually have to live inside it. I try to
            </div>
            <div className="split-target">write the second one first: </div>
            <div className="split-target italic text-foreground/75">
              plumbing that doesn't leak, interfaces that don't lie, and interactions that respect
            </div>
            <div className="split-target italic text-foreground/75">
              the person on the other side.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
