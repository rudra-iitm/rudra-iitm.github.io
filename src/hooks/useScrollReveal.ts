import { useLayoutEffect, useEffect, useRef, useCallback } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { gsap, ScrollTrigger } from "@/lib/gsap";

export interface ScrollRevealOptions {
  y?: number;

  fromOpacity?: number;

  scale?: number;

  blur?: number;

  duration?: number;

  delay?: number;

  ease?: string;

  start?: string;

  once?: boolean;

  stagger?: number;

  staggerTarget?: string;
}

const REDUCED_MOTION =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
) {
  const ref = useRef<T>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const cleanup = useCallback(() => {
    triggerRef.current?.kill();
    triggerRef.current = null;
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined" || REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;

    el.style.visibility = "hidden";

    document.fonts.ready.then(() => {
      if (!ref.current) return;

      const {
        y = 40,
        fromOpacity = 0,
        scale = 1,
        blur = 0,
        duration = 1,
        delay = 0,
        ease = "power4.out",
        start = "top 85%",
        once = true,
        stagger = 0,
        staggerTarget = "> *",
      } = options;

      const targets = stagger > 0 ? el.querySelectorAll(staggerTarget) : [el];
      const fromVars: gsap.TweenVars = {
        y,
        opacity: fromOpacity,
        scale,
        ...(blur > 0 ? { filter: `blur(${blur}px)` } : {}),
      };
      const toVars: gsap.TweenVars = {
        y: 0,
        opacity: 1,
        scale: 1,
        ...(blur > 0 ? { filter: "blur(0px)" } : {}),
        duration,
        delay,
        ease,
        stagger: stagger > 0 ? stagger : undefined,
      };

      gsap.set(targets, fromVars);

      triggerRef.current = ScrollTrigger.create({
        trigger: el,
        start,
        once,
        onEnter: () => gsap.to(targets, toVars),
      });
    });

    return cleanup;
  }, [cleanup, options]);

  return ref;
}
