"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business, audience, and goals. Through workshops and research, we uncover the insights that shape everything.",
    keywords: ["workshops", "research", "insights"],
  },
  {
    num: "02",
    title: "Design",
    desc: "From wireframes to high-fidelity prototypes, we craft interfaces that are both beautiful and intuitive. Every detail is intentional.",
    keywords: ["wireframes", "prototypes", "interfaces"],
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, percodinnt code built on modern stacks. We engineer scalable solutions that grow with your business.",
    keywords: ["percodinnt", "scalable", "modern"],
  },
  {
    num: "04",
    title: "Launch",
    desc: "We don't just ship and disappear. We monitor, iterate, and optimize — ensuring your product succeeds in the real world.",
    keywords: ["monitor", "iterate", "optimize"],
  },
];

/* ─── Floating pixel decorations ─────────────────────────────────── */
const PIXELS = [
  { x: "12%", y: "18%", size: 4, delay: 0 },
  { x: "88%", y: "35%", size: 3, delay: 1.2 },
  { x: "92%", y: "72%", size: 5, delay: 0.6 },
  { x: "8%", y: "85%", size: 3, delay: 1.8 },
];

function FloatingPixels() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PIXELS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#23b8c2]/20"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -12, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Highlight keywords ─────────────────────────────────────────── */
function highlight(text: string, keywords: string[]) {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
  return parts.map((part, i) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-[#23b8c2] font-semibold">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Process() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Staggered entrance animation
  useEffect(() => {
    if (!leftRef.current) return;
    const heading = leftRef.current.querySelector(".heading");
    const timeline = leftRef.current.querySelector(".timeline");

    gsap.fromTo(
      [heading, timeline],
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 75%",
          once: true,
        },
      },
    );
  }, []);

  // Intersection observer for active state
  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-[#f4ede8] overflow-hidden"
      style={{
        minHeight: "150vh",
        paddingTop: "clamp(80px, 10vh, 120px)",
        paddingBottom: "clamp(20px, 3vh, 10px)",
      }}
    >
      <FloatingPixels />

      <div
        className="w-full max-w-[1400px] mx-auto"
        style={{
          paddingLeft: "clamp(40px, 6vw, 100px)",
          paddingRight: "clamp(40px, 6vw, 100px)",
        }}
      >
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16 md:mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-[10px] text-[#d65a4a] tracking-[0.25em] uppercase">
            03 — Process
          </span>
          <span className="h-px w-12 bg-[#d65a4a]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-16 lg:gap-24 xl:gap-32">
          {/* ── LEFT: Sticky nav ── */}
          <div
            ref={leftRef}
            className="lg:sticky lg:self-start"
            style={{ top: 60 }}
          >
            {/* Heading */}
            <div className="heading mb-12">
              <h2
                className="font-black tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                <span className="block text-[#050505]">From idea</span>
                <span className="block text-[#050505]">
                  to{" "}
                  <span className="font-pixel text-[#d65a4a]">successful</span>
                </span>
                <span className="block text-[#050505]">product.</span>
              </h2>
            </div>

            {/* Timeline */}
            <div
              className="timeline flex flex-col"
              style={{ gap: 40, marginTop: 24 }}
            >
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-stretch gap-5">
                  {/* Number box + line */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="flex items-center justify-center font-pixel text-xs flex-shrink-0 border-2 transition-all duration-500"
                      style={{
                        width: 52,
                        height: 52,
                        background:
                          i === active
                            ? "#050505"
                            : i < active
                              ? "#23b8c2"
                              : "transparent",
                        color:
                          i === active || i < active ? "#f4ede8" : "#a8a3a0",
                        borderColor:
                          i === active
                            ? "#050505"
                            : i < active
                              ? "#23b8c2"
                              : "rgba(168,163,160,0.3)",
                      }}
                      whileHover={
                        i !== active
                          ? { scale: 1.08, borderColor: "#23b8c2" }
                          : {}
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {s.num}
                    </motion.div>

                    {/* Animated progress line */}
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 my-2 bg-[#050505]/10 relative overflow-hidden"
                        style={{ minHeight: 40 }}
                      >
                        <motion.div
                          className="absolute top-0 left-0 w-full bg-[#23b8c2]"
                          animate={{ height: i < active ? "100%" : "0%" }}
                          transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <motion.div
                    className="flex items-center pt-3"
                    animate={{
                      x: i === active ? 12 : 0,
                      scale: i === active ? 1.03 : 1,
                      opacity: i === active ? 1 : 0.28,
                      filter: i === active ? "blur(0px)" : "blur(0.5px)",
                    }}
                    whileHover={i !== active ? { opacity: 0.6, x: 6 } : {}}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="font-semibold leading-tight cursor-default"
                      style={{
                        fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                        color:
                          i === active
                            ? "#d65a4a"
                            : i < active
                              ? "#23b8c2"
                              : "#a8a3a0",
                      }}
                    >
                      {s.title}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Scrolling content ── */}
          <div className="flex flex-col" style={{ gap: 48 }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                ref={(el) => {
                  sectionRefs.current[i] = el;
                }}
                className="relative"
                style={{ paddingBottom: 48 }}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Huge faded background number */}
                <div
                  className="absolute font-pixel select-none pointer-events-none"
                  style={{
                    fontSize: "clamp(8rem, 15vw, 14rem)",
                    top: "-2rem",
                    left: "-1rem",
                    color: "rgba(5,5,5,0.02)",
                    lineHeight: 1,
                    zIndex: 0,
                  }}
                >
                  {step.num}
                </div>

                {/* Content */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    opacity: i === active ? 1 : 0.4,
                    y: i === active ? 0 : 8,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-baseline gap-5 mb-5">
                    <span className="font-pixel text-[11px] text-[#a8a3a0] tracking-[0.2em] uppercase flex-shrink-0">
                      {step.num}
                    </span>
                    <h3
                      className="font-black tracking-tight transition-colors duration-500"
                      style={{
                        fontSize:
                          i === active
                            ? "clamp(4rem, 6vw, 7rem)"
                            : "clamp(3.5rem, 5.5vw, 6rem)",
                        lineHeight: 0.95,
                        fontWeight: 800,
                        color: i === active ? "#d65a4a" : "rgba(5,5,5,0.22)",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className="text-[#3a3a3a] leading-[1.8]"
                    style={{
                      fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                      maxWidth: "850px",
                    }}
                  >
                    {highlight(step.desc, step.keywords)}
                  </p>
                </motion.div>

                {/* Gradient divider */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,0,0,0.15), rgba(0,0,0,0.03))",
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
