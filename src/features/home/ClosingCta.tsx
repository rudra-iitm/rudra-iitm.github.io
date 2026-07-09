import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock3, Coffee, Mail, MapPin } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";
import { useSplitReveal } from "@/hooks/useSplitReveal";

export function ClosingCta() {
  const headingRef = useSplitReveal<HTMLHeadingElement>({
    splitType: "lines",
    mode: "lineSlide",
    stagger: 0.05,
  });

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36">
      <div aria-hidden className="closing-veil absolute inset-0" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="font-mono-tag text-muted-foreground">§ 04 — Say hello</p>
            <h2
              ref={headingRef}
              className="font-display text-balance-tight mt-6 text-[clamp(2.5rem,10vw,9rem)]"
            >
              <span className="split-target block">Bring me the</span>
              <span className="split-target italic text-ember block">problem</span>
              <span className="split-target block">that keeps returning.</span>
            </h2>
          </div>
          <div className="relative p-8 md:p-10 md:col-span-5 md:col-start-8 md:-ml-8 lg:-ml-12">
            <motion.div
              animate={{
                borderRadius: [
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                  "40% 60% 70% 30% / 50% 40% 60% 50%",
                  "70% 30% 40% 60% / 60% 70% 30% 40%",
                  "30% 70% 60% 40% / 40% 30% 70% 60%",
                  "50% 50% 30% 70% / 70% 60% 40% 30%",
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                ],
              }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-[-1.5rem] md:inset-[-3rem] -z-50 bg-ember/5 border border-ember/20 shadow-[0_0_30px_rgba(255,80,0,0.1)] backdrop-blur-md"
            />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I like the work that asks for patience: systems, tools, collaboration, and interfaces
              where the smallest decision changes how the whole thing feels.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
              {[
                ["Response", "Usually < 24h"],
                ["Timezone", "Bengaluru · IST"],
                ["Focus", "Systems + product"],
                ["Learning", "Distributed tools"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-hair pt-3">
                  <p className="font-mono-tag text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center gap-6">
          <Magnetic className="inline-block">
            <a
              href="mailto:singhrudra1601@gmail.com"
              className="ember-glow group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-background transition-colors hover:bg-ember"
              data-cursor="hover"
            >
              <Mail size={17} aria-hidden />
              <span className="font-mono-tag">Start a conversation</span>
            </a>
          </Magnetic>
          <Link to="/contact" className="story-link font-mono-tag text-muted-foreground">
            Other ways to reach me
          </Link>
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {[
            { icon: Clock3, label: "Best window", value: "Evenings IST" },
            { icon: Coffee, label: "Good opener", value: "A hard system story" },
            { icon: MapPin, label: "Current city", value: "Bengaluru" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 border-t border-hair pt-4">
              <Icon size={17} className="text-ember" aria-hidden />
              <div>
                <p className="font-mono-tag text-muted-foreground">{label}</p>
                <p className="text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="mailto:singhrudra1601@gmail.com"
          className="font-display mt-16 block break-words text-[clamp(2.8rem,10vw,10rem)] leading-[0.88] text-foreground/90 transition-colors hover:text-ember"
          data-cursor="hover"
        >
          singhrudra1601@gmail.com
        </a>
      </div>
    </section>
  );
}
