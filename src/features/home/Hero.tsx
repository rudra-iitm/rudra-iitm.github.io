import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { HeroOrb } from "@/components/sections/HeroOrb";
import { useSplitReveal } from "@/hooks/useSplitReveal";

export function Hero() {
  const titleRef = useSplitReveal<HTMLHeadingElement>({ delay: 0.2 });
  const bioRef = useSplitReveal<HTMLParagraphElement>({
    delay: 0.6,
    splitType: "lines",
    mode: "lineSlide",
  });

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="grain relative flex flex-col md:flex-row min-h-[100svh] items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      <HeroOrb />

      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: titleY, scale }}
        className="absolute right-6 top-[18svh] hidden max-w-[42rem] font-display text-[clamp(5rem,12vw,13rem)] leading-[0.78] text-foreground/[0.05] md:block z-20 pointer-events-none"
      >
        BUILD
        <br />
        BELOW
      </motion.div>

      <div className="relative z-30 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-6 pb-12 md:flex-row md:items-start md:px-10 md:pb-0">
        <motion.div
          style={reduced ? undefined : { y, opacity }}
          className="w-full pointer-events-none mt-10 md:mt-0"
        >
          <div className="flex items-center gap-3 pointer-events-auto w-fit">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            <span className="font-mono-tag text-muted-foreground">
              Portfolio · v2026 · Bangalore ↔ everywhere
            </span>
          </div>

          <h1
            ref={titleRef}
            className="font-display text-balance-tight mt-10 text-[clamp(3rem,11vw,12rem)] tracking-tight pointer-events-auto"
          >
            Software engineer
            <br />
            <span className="italic text-ember">building the layer</span>
            <br />
            below the app.
          </h1>

          <div className="mt-10 flex flex-col gap-8 pb-12 pointer-events-auto">
            <p
              ref={bioRef}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              I build systems, infrastructure, and developer tools. Currently writing production
              software at <span className="text-foreground">Google</span> and maintaining the
              open-source Linux printing stack with{" "}
              <span className="text-foreground">The Linux Foundation</span>. I care about
              engineering craft, product thinking, and the quiet details of software that ages well.
            </p>

            <Reveal delay={0.7}>
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6">
                <Magnetic>
                  <Link
                    to="/work"
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm text-background transition-opacity hover:opacity-80"
                    data-cursor="hover"
                  >
                    <span className="font-mono-tag">View Selected Work</span>
                    <ArrowUpRight size={16} aria-hidden />
                  </Link>
                </Magnetic>
                <Link
                  to="/open-source"
                  className="story-link font-mono-tag text-muted-foreground w-fit"
                >
                  Explore Open Source
                </Link>
                <Link to="/about" className="story-link font-mono-tag text-muted-foreground w-fit">
                  Read My Story
                </Link>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative mx-auto mb-16 block w-[280px] max-w-[80vw] pointer-events-auto md:absolute md:right-[8vw] md:top-[20svh] md:mb-0 md:mt-0 md:w-[480px] md:max-w-[45vw] z-10"
      >
        <Magnetic strength={0.15} className="relative block cursor-pointer group">
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
            className="absolute top-[25%] left-[5%] w-[90%] aspect-square bg-foreground/[0.03] transition-transform duration-700 group-hover:scale-[1.10] -z-10 blur-xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              borderRadius: [
                "40% 60% 30% 70% / 60% 30% 70% 40%",
                "50% 50% 60% 40% / 40% 60% 40% 60%",
                "30% 70% 40% 60% / 70% 40% 60% 30%",
                "60% 40% 70% 30% / 30% 70% 30% 70%",
                "40% 60% 50% 50% / 50% 50% 50% 50%",
                "40% 60% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute top-[25%] left-[5%] w-[90%] aspect-square bg-foreground/[0.05] transition-transform duration-700 group-hover:scale-95 -z-10"
          />
          <img
            src="/profile_real_nobg2.png"
            alt="Rudra Pratap Singh"
            className="relative z-10 w-full h-auto object-contain drop-shadow-xl transition-all duration-700 group-hover:scale-105"
          />
        </Magnetic>
      </motion.div>
    </section>
  );
}
