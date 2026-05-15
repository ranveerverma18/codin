"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PixelDecorations from "./PixelDecorations";

gsap.registerPlugin(ScrollTrigger);

const text =
  "We are a team of designers, engineers, and strategists obsessed with crafting digital products that define the next generation of brands. Every pixel, every interaction, every line of code — intentional.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const words = wordsRef.current;
    if (!words.length) return;

    gsap.fromTo(
      words,
      { color: "#c8c1bc", opacity: 0.4 },
      {
        color: "#a8a19c",
        opacity: 0.9,
        stagger: 0.045,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 35%",
          scrub: 1.2,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const wordList = text.split(" ");

  return (
    <section id="about" className="relative py-[120px] md:py-[180px] overflow-hidden">
      <PixelDecorations opacity={0.06} />

      {/* Full-width container with consistent page padding */}
      <div
        className="about-container"
        ref={containerRef}
        style={{
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          paddingLeft: "clamp(48px, 8vw, 220px)",
          paddingRight: "clamp(48px, 8vw, 220px)",
        }}
      >
        {/* Label */}
        <div className="mb-10 md:mb-16">
          <span className="text-[12px] text-[#d65a4a] tracking-[0.22em] uppercase font-semibold">
            WHO ARE WE?
          </span>
        </div>

        {/* Reveal paragraph — capped at ~72% width on large screens */}
        <div className="max-w-[75%]">
          <p
            className="
  font-medium
  leading-[1.08]
  tracking-[-0.045em]
"
            style={{
  fontSize: "clamp(2.5rem, 5vw, 5.8rem)",
}}
          >
            {wordList.map((word, i) => (
              <span
                key={i}
                ref={(el) => { if (el) wordsRef.current[i] = el; }}
                className="reveal-word"
                style={{ color: "#c8c1bc", opacity: 0.4 }}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-20 md:mt-24 flex flex-wrap gap-x-16 gap-y-8">
          {[
            ["12+", "Years of craft"],
            ["200+", "Projects shipped"],
            ["98%", "Client retention"],
          ].map(([num, label]) => (
            <div key={num} className="flex flex-col gap-1.5">
              <div className="font-pixel text-[2.4rem] leading-none text-[#d65a4a]">{num}</div>
              <div className="text-sm text-[#a8a3a0] tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
