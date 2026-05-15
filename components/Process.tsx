"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    desc: "Clean, performant code built on modern stacks. We engineer scalable solutions that grow with your business.",
    keywords: ["performant", "scalable", "modern"],
  },
  {
    num: "04",
    title: "Launch",
    desc: "We don't just ship and disappear. We monitor, iterate, and optimize — ensuring your product succeeds in the real world.",
    keywords: ["monitor", "iterate", "optimize"],
  },
];

function highlight(text: string, keywords: string[]) {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
  return parts.map((part, i) =>
    keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-[#1f8b8f] font-semibold">{part}</span>
    ) : (
      part
    )
  );
}

export default function Process() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="process" className="py-[120px] md:py-[160px] bg-[#f4ede8]">
      <div className="about-container">
        {/* Section label */}
        <div className="mb-14 md:mb-18">
          <span className="font-pixel text-[11px] text-[#a8a3a0] tracking-[0.2em] uppercase">
            — Our Process
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* LEFT: sticky nav */}
          <div className="lg:w-[30%] lg:sticky lg:top-28 lg:self-start lg:pb-16">
            <h2
              className="font-pixel leading-[1.2] text-[#050505] mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)" }}
            >
              From idea to<br />
              <span className="text-[#d65a4a]">successful</span><br />
              product
            </h2>

            <div className="flex flex-col">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-stretch gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 border-2 flex items-center justify-center font-pixel text-[10px] flex-shrink-0 transition-all duration-500 ${
                        i === active
                          ? "bg-[#050505] text-[#f4ede8] border-[#050505]"
                          : i < active
                          ? "bg-[#d65a4a] text-[#f4ede8] border-[#d65a4a]"
                          : "bg-transparent text-[#a8a3a0] border-[#a8a3a0]/50"
                      }`}
                    >
                      {s.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 my-1 bg-[#e0d9d4] relative overflow-hidden min-h-[32px]">
                        <motion.div
                          className="absolute top-0 left-0 w-full bg-[#d65a4a]"
                          animate={{ height: i < active ? "100%" : "0%" }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    )}
                  </div>

                  <div className={`pb-8 flex items-start pt-1 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                    <span
                      className={`text-sm font-medium leading-none transition-all duration-400 ${
                        i === active ? "text-[#050505]" : "text-[#a8a3a0]"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="lg:w-[70%] flex flex-col mt-10 lg:mt-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { sectionRefs.current[i] = el; }}
                className={`py-12 md:py-16 ${i !== 0 ? "border-t border-[#050505]/15" : ""}`}
              >
                <motion.div
                  animate={{ opacity: i === active ? 1 : 0.35, y: i === active ? 0 : 6 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-baseline gap-5 mb-4">
                    <span className="font-pixel text-[10px] text-[#a8a3a0] tracking-widest flex-shrink-0">
                      {step.num}
                    </span>
                    <h3
                      className={`font-black leading-[0.95] tracking-tight ${
                        i === active ? "text-[#d65a4a]" : "text-[#0f2f2f]"
                      }`}
                      style={{ fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#3a3a3a]/80 leading-[1.7] text-base md:text-lg max-w-[72ch]">
                    {highlight(step.desc, step.keywords)}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
