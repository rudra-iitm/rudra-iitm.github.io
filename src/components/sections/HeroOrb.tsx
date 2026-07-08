import { motion, useReducedMotion } from "motion/react";

export function HeroOrb() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute left-1/2 top-1/2 h-[min(90vw,900px)] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={reduced ? undefined : { rotate: 360, scale: [1, 1.05, 1] }}
          transition={{
            rotate: { duration: 60, ease: "linear", repeat: Infinity },
            scale: { duration: 12, ease: "easeInOut", repeat: Infinity },
          }}
          className="absolute inset-0 rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.78 0.09 45 / 0.55), transparent 65%), radial-gradient(closest-side at 30% 30%, oklch(0.58 0.16 42 / 0.35), transparent 60%)",
          }}
        />
        <motion.div
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          className="absolute inset-6 rounded-full opacity-50 blur-2xl"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, oklch(0.16 0.012 60 / 0.28), transparent 60%)",
          }}
        />
      </motion.div>

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
