import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Magnetic } from "@/components/animations/Magnetic";
import { gsap } from "@/lib/gsap";
import { Menu, X } from "lucide-react";

const items = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/open-source", label: "Open Source" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined" || hasAnimated.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    hasAnimated.current = true;

    const nav = navRef.current;
    const logo = logoRef.current;
    const cta = ctaRef.current;
    if (!nav || !logo) return;

    const logoSpans = logo.querySelectorAll("span");
    gsap.set(logoSpans, { opacity: 0, y: -10 });
    gsap.to(logoSpans, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.1,
    });

    const links = nav.querySelectorAll("a");
    gsap.set(links, { opacity: 0, y: -8 });
    gsap.to(links, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "power3.out",
      delay: 0.3,
    });

    if (cta) {
      gsap.set(cta, { opacity: 0, scale: 0.95 });
      gsap.to(cta, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6,
      });
    }
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] border-b border-hair shadow-[0_1px_8px_color-mix(in_oklab,var(--ink)_4%,transparent)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10">
          <Link
            ref={logoRef}
            to="/"
            className="group flex items-baseline justify-center gap-1.5 md:gap-2 font-display text-xl sm:text-2xl md:text-[1.75rem] tracking-tight text-foreground z-[60] relative"
            onClick={() => setMobileMenuOpen(false)}
            data-cursor="hover"
          >
            <span>Rudra</span>
            <span className="italic text-ember">Pratap</span>
            <span>Singh</span>
          </Link>
          <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="group relative px-4 py-2 text-sm"
                activeOptions={{ exact: it.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                data-cursor="hover"
              >
                {it.label}
                <span className="pointer-events-none absolute inset-x-4 -bottom-0.5 h-px scale-x-0 origin-left bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Magnetic>
              <a
                ref={ctaRef}
                href="https://drive.google.com/file/d/1a7p6Tm3Ytxpy5C-zt2Dy1kB3bvzmVtgG/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="font-mono-tag inline-flex items-center gap-2 rounded-full border border-foreground/80 px-4 py-2 text-foreground transition-all duration-500 hover:bg-foreground hover:text-background hover:shadow-[0_0_20px_color-mix(in_oklab,var(--ember)_20%,transparent)]"
                data-cursor="hover"
              >
                View Resume
              </a>
            </Magnetic>
          </div>

          <button
            className="lg:hidden relative z-[60] p-2 -mr-2 text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col justify-center bg-background backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-8 px-6">
          {items.map((it, idx) => (
            <Link
              key={it.to}
              to={it.to}
              className={`text-4xl sm:text-5xl font-display tracking-tight transition-all duration-500 delay-[${idx * 50}ms] ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              onClick={() => setMobileMenuOpen(false)}
              activeOptions={{ exact: it.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            >
              {it.label}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1a7p6Tm3Ytxpy5C-zt2Dy1kB3bvzmVtgG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={`mt-4 font-mono-tag inline-flex items-center gap-2 rounded-full border border-foreground/80 px-6 py-3 text-foreground transition-all duration-500 hover:bg-foreground hover:text-background ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: "250ms" }}
          >
            View Resume
          </a>
        </nav>
      </div>
    </>
  );
}
