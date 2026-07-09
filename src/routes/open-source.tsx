import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/animations/Reveal";
import { HeroOrb } from "@/components/sections/HeroOrb";

export const Route = createFileRoute("/open-source")({
  head: () => ({
    meta: [
      { title: "Open Source — Rudra Pratap Singh" },
      {
        name: "description",
        content:
          "Two-time Google Summer of Code contributor, open-source maintainer, and mentor. Building infrastructure for the Linux ecosystem.",
      },
      { property: "og:title", content: "Open Source — Rudra Pratap Singh" },
      {
        property: "og:description",
        content: "Building the infrastructure beneath the modern Linux desktop.",
      },
    ],
  }),
  component: OpenSourcePage,
});

function OpenSourcePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40 md:px-10 md:pb-32 md:pt-56">
        <HeroOrb />
        <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center text-center">
          <p className="font-mono-tag text-muted-foreground">Index · Open Source</p>
          <h1 className="font-display text-balance-tight mt-6 text-[clamp(2.5rem,10vw,9rem)]">
            Infrastructure as a<br />
            <span className="italic text-ember">public good.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            I don't just consume open source; I build the plumbing it relies on. From modernizing
            legacy websites to packaging the printing stack that ships inside millions of Linux
            desktops.
          </p>
        </div>
      </section>

      <section className="border-t border-hair px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-tag text-muted-foreground">01 — The Linux Foundation</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Modernizing the Linux printing stack.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
            <p>
              Across two consecutive Google Summer of Code programs (2024, 2025), I worked with
              OpenPrinting to drag legacy infrastructure into the modern era.
            </p>
            <p>
              This involved leading the complete architectural overhaul of the OpenPrinting website,
              migrating the Foomatic driver database to a performant static Next.js architecture.
              Simultaneously, I packaged the CUPS printing stack and printer applications into Open
              Container Initiative (OCI) images, ensuring the backend of Linux printing is robust,
              sandboxed, and future-proof.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hair bg-paper-warm px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-tag text-muted-foreground">02 — Ubuntu</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Desktop Snaps and packaging.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
            <p>
              A system is only as good as its distribution. I worked on Desktop Snaps automation and
              snap packaging for the printing subsystem that ships in modern Ubuntu releases.
            </p>
            <p>
              By confining these applications, we ensured that millions of Ubuntu users receive a
              secure, out-of-the-box printing experience without compromising the integrity of their
              host OS.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hair px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-tag text-muted-foreground">03 — Upstream Contributions</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              The invisible gears.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
            <p>
              True open source impact happens upstream. I've contributed bug fixes, automation, and
              architectural improvements across the entire ecosystem: CUPS, Ghostscript, Gutenprint,
              and HPLIP.
            </p>
            <p>
              These are the invisible gears that power everyday workflows. My goal has always been
              to leave these codebases cleaner, safer, and easier for the next developer to
              understand.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hair bg-paper-warm px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-tag text-muted-foreground">04 — Mentorship</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Growing the community.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
            <p>
              Software scales infinitely; maintainers do not. As a mentor for Winter of Code 4.0
              (IIIT Kalyani) and Google Summer of Code (2026), I focus on converting first-time
              contributors into long-term maintainers.
            </p>
            <p>
              Whether it's guiding students through creating OCI container images for ipp-usb or
              reviewing their first pull requests, community building is the most sustainable
              engineering practice there is.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hair px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono-tag text-muted-foreground">05 — Philosophy</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Why infrastructure matters.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-7 md:col-start-6 md:text-xl">
            <p>
              I contribute to open source because I believe infrastructure is the most leveraged
              layer of software. A single bug fix in a core library improves the lives of millions.
            </p>
            <p>
              Writing products is satisfying, but building the plumbing—the unglamorous, silent,
              resilient systems—is where the real engineering happens. It's an exercise in empathy,
              foresight, and extreme craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { k: "100+", v: "public repositories" },
              { k: "×2", v: "Google Summer of Code" },
              { k: "01", v: "ecosystem, modernized" },
            ].map((s) => (
              <div key={s.v} className="border-t border-background/20 pt-6">
                <p className="font-display text-[clamp(4rem,10vw,9rem)] leading-none text-ember">
                  {s.k}
                </p>
                <p className="font-mono-tag mt-4 text-background/70">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
