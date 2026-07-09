import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  Code2,
  MapPin,
  Activity,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SplitType from "split-type";
import { Magnetic } from "@/components/animations/Magnetic";

export function Footer() {
  const [activeSocial, setActiveSocial] = useState<string | null>(null);
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/rudra-iitm",
      note: "100+ repos, systems work, experiments",
      stat: "Open source trail",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rudra-iitm/",
      note: "Work, updates, professional trail",
      stat: "Google · GSoC × 2",
    },
    {
      label: "Email",
      href: "mailto:singhrudra1601@gmail.com",
      note: "Fastest way to start a thoughtful thread",
      stat: "Usually < 24h",
    },
  ];

  const credits = [
    { icon: MapPin, label: "Location", value: "Bengaluru · India" },
    { icon: Activity, label: "Focus", value: "Distributed systems, AI" },
    { icon: BookOpen, label: "Reading", value: "Designing Data-Intensive Apps" },
    { icon: Code2, label: "Stack", value: "TanStack · Motion · Tailwind" },
    { icon: Clock3, label: "Version", value: "Portfolio v2026" },
    { icon: Calendar, label: "Updated", value: "July 2026" },
    { icon: CheckCircle, label: "Availability", value: "Open to interesting problems" },
  ];

  const footerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || reduced) return;
    const heading = headingRef.current;
    const linkList = linksRef.current;
    const closing = closingRef.current;
    const watermark = watermarkRef.current;
    if (!heading || !linkList || !closing) return;

    const cleanups: (() => void)[] = [];

    const headingSplit = new SplitType(heading, { types: "chars,words" });
    const chars = headingSplit.chars ?? [];

    headingSplit.words?.forEach((w) => {
      (w as HTMLElement).style.overflow = "hidden";
      (w as HTMLElement).style.display = "inline-block";
      (w as HTMLElement).style.verticalAlign = "bottom";
    });

    gsap.set(chars, { yPercent: 120, rotation: 5 });

    const headingTrigger = ScrollTrigger.create({
      trigger: heading,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(chars, {
          yPercent: 0,
          rotation: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
        }),
    });
    cleanups.push(() => headingTrigger.kill());

    const linkItems = linkList.querySelectorAll("li");
    gsap.set(linkItems, { y: 40, opacity: 0 });

    const linkTrigger = ScrollTrigger.create({
      trigger: linkList,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(linkItems, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
        }),
    });
    cleanups.push(() => linkTrigger.kill());

    const closingSplit = new SplitType(closing, { types: "chars,words" });
    const closingChars = closingSplit.chars ?? [];

    closingSplit.words?.forEach((w) => {
      (w as HTMLElement).style.overflow = "hidden";
      (w as HTMLElement).style.display = "inline-block";
      (w as HTMLElement).style.verticalAlign = "bottom";
    });

    gsap.set(closingChars, { yPercent: 120, rotation: 3 });

    const closingTrigger = ScrollTrigger.create({
      trigger: closing,
      start: "top 92%",
      once: true,
      onEnter: () =>
        gsap.to(closingChars, {
          yPercent: 0,
          rotation: 0,
          duration: 1.1,
          stagger: 0.02,
          ease: "power4.out",
        }),
    });
    cleanups.push(() => closingTrigger.kill());

    if (watermark) {
      const wmTrigger = ScrollTrigger.create({
        trigger: watermark,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: gsap.fromTo(watermark, { xPercent: -5 }, { xPercent: 5, ease: "none" }),
      });
      cleanups.push(() => wmTrigger.kill());
    }

    return () => {
      cleanups.forEach((fn) => fn());
      headingSplit.revert();
      closingSplit.revert();
    };
  }, [reduced]);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 overflow-hidden border-t border-hair bg-paper-warm"
    >
      <div aria-hidden className="closing-veil absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="font-mono-tag text-muted-foreground">Elsewhere</p>
            <h2
              ref={headingRef}
              className="font-display mt-4 text-[clamp(3rem,7vw,7rem)] leading-[0.86]"
              dangerouslySetInnerHTML={{
                __html: `Keep the signal<br /><span class="italic text-ember">moving.</span>`,
              }}
            />
          </div>

          <ul
            ref={linksRef}
            className={`border-t md:col-span-7 transition-colors duration-300 ${activeSocial ? "border-transparent" : "border-hair"}`}
            onMouseLeave={() => setActiveSocial(null)}
          >
            {links.map((item) => (
              <li
                key={item.label}
                className={`border-b last:border-b-0 transition-colors duration-300 ${activeSocial ? "border-transparent" : "border-hair"}`}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => setActiveSocial(item.label)}
                  onFocus={() => setActiveSocial(item.label)}
                  className={`project-row group grid gap-4 px-0 py-6 outline-none transition-opacity duration-300 md:grid-cols-12 md:items-center md:px-6 ${activeSocial === null || activeSocial === item.label ? "opacity-100" : "opacity-40"}`}
                  data-cursor="hover"
                >
                  <span className="font-display text-4xl leading-none transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-6xl">
                    {item.label}
                  </span>
                  <span className="md:col-span-5">
                    <span className="block text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {item.note}
                    </span>
                    <span className="font-mono-tag mt-2 inline-block text-ember opacity-80">
                      {item.stat}
                    </span>
                  </span>
                  <div className="mt-4 md:mt-0 md:col-span-2 flex justify-start md:justify-end">
                    <Magnetic strength={0.22}>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hair bg-paper transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
                        <ArrowUpRight size={20} aria-hidden />
                      </span>
                    </Magnetic>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-4 border-y border-hair py-8 md:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {credits.map(({ icon: Icon, label, value }) => (
            <div key={label} className="group flex gap-3 p-3 transition-colors hover:bg-paper/55">
              <Icon size={17} className="mt-0.5 text-ember" aria-hidden />
              <div>
                <p className="font-mono-tag text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm leading-relaxed">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Designed and engineered with React, Tailwind CSS, Framer Motion, and TanStack Router.
              Typography set in Instrument Serif and Inter.
            </p>

            <p className="font-mono-tag mt-4 text-ember" aria-label="Current time in IST">
              Bengaluru · IST · {time}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 font-mono-tag md:col-span-6 lg:col-span-4 lg:col-start-7">
            <Link to="/">Index</Link>
            <Link to="/work">Work</Link>
            <Link to="/open-source">Open Source</Link>
          </div>

          <p className="font-mono-tag text-muted-foreground md:col-span-12 lg:col-span-2 lg:text-right">
            © {new Date().getFullYear()} Rudra Pratap Singh
          </p>
        </div>

        <div className="mt-16 border-t border-hair pt-8">
          <p
            ref={closingRef}
            className="font-display text-balance-tight max-w-5xl text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.9]"
            dangerouslySetInnerHTML={{
              __html: `Built quietly.<br /><span class="italic text-ember">Left warm.</span>`,
            }}
          />
        </div>

        <div
          ref={watermarkRef}
          aria-hidden
          className="watermark mt-12 font-display text-[clamp(2rem,10vw,14rem)] whitespace-nowrap text-center"
        >
          RUDRA PRATAP SINGH
        </div>
      </div>
    </footer>
  );
}
