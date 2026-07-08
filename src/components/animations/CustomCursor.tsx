import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { gsap } from "@/lib/gsap";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  const tx = useSpring(x, { stiffness: 200, damping: 50, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 200, damping: 50, mass: 0.6 });

  const [hover, setHover] = useState(false);
  const [viewMode, setViewMode] = useState<"view" | "open" | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target as HTMLElement | null;
      if (!t) return;

      const hoverTarget = t.closest("a, button, [data-cursor='hover']");
      const viewTarget = t.closest("[data-cursor='view']");
      const openTarget = t.closest("[data-cursor='open']");

      setHover(!!hoverTarget && !viewTarget && !openTarget);

      if (viewTarget) setViewMode("view");
      else if (openTarget) setViewMode("open");
      else setViewMode(null);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference flex items-center justify-center"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          animate={{
            scale: viewMode ? 4 : hover ? 2.4 : 1,
            opacity: hover || viewMode ? 0.9 : 0.7,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper flex items-center justify-center overflow-hidden"
          style={{ width: 12, height: 12 }}
        >
          {viewMode && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 0.25 }}
              className="font-mono-tag text-ink absolute text-[10px] tracking-wider font-bold"
            >
              {viewMode.toUpperCase()}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          animate={{
            scale: hover && !viewMode ? 1 : 0,
            opacity: hover && !viewMode ? 0.4 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper"
          style={{ width: 40, height: 40 }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] mix-blend-difference"
        style={{ x: tx, y: ty }}
      >
        <motion.div
          animate={{
            scale: hover || viewMode ? 0 : 1,
            opacity: hover || viewMode ? 0 : 0.3,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper"
          style={{ width: 4, height: 4 }}
        />
      </motion.div>
    </>
  );
}
