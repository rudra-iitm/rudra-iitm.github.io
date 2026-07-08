import { useLayoutEffect, useEffect, useRef, useCallback } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SplitType from "split-type";

export type SplitRevealMode = "slideUp" | "fadeStagger" | "scatter" | "lineSlide";

export interface SplitRevealOptions {
  mode?: SplitRevealMode;

  splitType?: "chars" | "words" | "lines";

  stagger?: number;

  duration?: number;

  delay?: number;

  start?: string;

  end?: string;

  scrub?: boolean | number;

  once?: boolean;

  onComplete?: () => void;
}

const REDUCED_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useSplitReveal<T extends HTMLElement = HTMLElement>(
  options: SplitRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const splitRef = useRef<SplitType | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const cleanup = useCallback(() => {
    timelineRef.current?.kill();
    triggerRef.current?.kill();
    splitRef.current?.revert();
    timelineRef.current = null;
    triggerRef.current = null;
    splitRef.current = null;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined" || REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;

    el.style.visibility = "hidden";

    document.fonts.ready.then(() => {
      if (!ref.current) return;

      const {
        mode = "slideUp",
        splitType: splitTypeOpt,
        stagger = 0.03,
        duration = 0.9,
        delay = 0,
        start = "top 85%",
        end = "bottom 20%",
        scrub = false,
        once = true,
        onComplete,
      } = options;

      const splitGranularity = splitTypeOpt ?? (mode === "lineSlide" ? "lines" : "chars");

      const split = new SplitType(el, {
        types: splitGranularity === "chars" ? "chars,words" : splitGranularity,
      });
      splitRef.current = split;

      const targets = split[splitGranularity];
      if (!targets || targets.length === 0) {
        cleanup();
        return;
      }

      if (mode === "slideUp" || mode === "lineSlide") {
        const wrappers = splitGranularity === "chars" ? (split.words ?? []) : [el];
        wrappers.forEach((w) => {
          (w as HTMLElement).style.overflow = "hidden";
          (w as HTMLElement).style.display = "inline-block";
          (w as HTMLElement).style.verticalAlign = "bottom";
        });
        if (splitGranularity === "lines" && split.lines) {
          split.lines.forEach((line) => {
            (line as HTMLElement).style.overflow = "hidden";
          });
        }
      }

      const tl = gsap.timeline({
        paused: true,
        onComplete,
      });

      switch (mode) {
        case "slideUp":
          gsap.set(targets, { yPercent: 110, rotation: 4 });
          tl.to(targets, {
            yPercent: 0,
            rotation: 0,
            duration,
            stagger,
            ease: "power4.out",
            delay,
          });
          break;

        case "fadeStagger":
          gsap.set(targets, { opacity: 0, y: 20 });
          tl.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            ease: "power3.out",
            delay,
          });
          break;

        case "lineSlide":
          gsap.set(targets, { yPercent: 100, opacity: 0 });
          tl.to(targets, {
            yPercent: 0,
            opacity: 1,
            duration,
            stagger: stagger * 3,
            ease: "power4.out",
            delay,
          });
          break;

        case "scatter":
          break;
      }

      timelineRef.current = tl;

      el.style.visibility = "visible";

      if (mode === "scatter") {
        gsap.set(targets, { yPercent: 110, rotation: 4 });
        const entranceTl = gsap.timeline();
        entranceTl.to(targets, {
          yPercent: 0,
          rotation: 0,
          duration,
          stagger,
          ease: "power4.out",
          delay,
        });

        triggerRef.current = ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => entranceTl.play(),
        });

        const scatterTl = gsap.timeline({ paused: true });
        targets.forEach((char) => {
          const randomX = (Math.random() - 0.5) * 600;
          const randomY = (Math.random() - 0.5) * 400 + 200;
          const randomRotate = (Math.random() - 0.5) * 90;
          scatterTl.to(
            char,
            {
              x: randomX,
              y: randomY,
              rotation: randomRotate,
              opacity: 0,
              scale: 0.4 + Math.random() * 0.6,
              duration: 1,
              ease: "power2.in",
            },
            Math.random() * 0.3,
          );
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 15%",
          end: "bottom -50%",
          scrub: 1.2,
          animation: scatterTl,
        });
      } else {
        triggerRef.current = ScrollTrigger.create({
          trigger: el,
          start,
          end,
          scrub: scrub as number | boolean,
          once,
          onEnter: () => tl.play(),
          ...(scrub ? { animation: tl } : {}),
        });
      }
    });

    return cleanup;
  }, [options, cleanup]);

  return ref;
}
