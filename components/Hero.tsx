"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PixelDecorations from "./PixelDecorations";

const cards = [
  { title: "Branding",    icon: "◈", bg: "#e8dff5", delay: 0,   floatY: [-8,  8],  rotate: [-1.5,  1.5] },
  { title: "Web",         icon: "⬡", bg: "#d5eaf0", delay: 0.4, floatY: [ 6, -10], rotate: [ 1,   -2  ] },
  { title: "Desktop App", icon: "▣", bg: "#fde8d8", delay: 0.8, floatY: [-6,  10], rotate: [-2,    1.5] },
  { title: "Mobile App",  icon: "◉", bg: "#d8f0e4", delay: 1.2, floatY: [10,  -6], rotate: [ 2,   -1  ] },
];

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-pixel text-xs">{time}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-24 overflow-hidden">
      <PixelDecorations opacity={0.3} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="text-center w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24 mb-16 z-10"
      >
        <h1
          className="font-black leading-[1.0] tracking-tight text-[#050505]"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          We build the
          <br />
          <span
            className="font-pixel text-[#d65a4a] leading-[1.15] inline-block"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)" }}
          >
            future of your
          </span>
          <br />
          business
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-[#a8a3a0] text-lg max-w-md mx-auto leading-[1.7]"
        >
          Award-winning creative studio crafting digital experiences that move people.
        </motion.p>
      </motion.div>

      {/* Floating Service Cards */}
      <div className="flex flex-wrap justify-center gap-4 z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: card.floatY, rotate: card.rotate }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: card.delay,
              }}
              whileHover={{ y: -16, scale: 1.05, rotate: 0 }}
              className="cursor-pointer"
            >
              <div
                className="relative px-7 py-6 border border-[#050505] min-w-[140px] text-center transition-all duration-300"
                style={{ background: card.bg, boxShadow: "4px 4px 0px #050505" }}
              >
                <div className="text-2xl mb-2.5">{card.icon}</div>
                <div className="text-sm font-semibold text-[#050505]">{card.title}</div>
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#050505]" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom-left: scroll cue */}
      <div className="absolute bottom-10 left-5 sm:left-8 md:left-16 lg:left-24 flex flex-col gap-1.5">
        <span className="text-[10px] text-[#a8a3a0] font-medium tracking-[0.2em] uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#050505] text-base"
        >
          ↓
        </motion.div>
      </div>

      {/* Bottom-right: clock */}
      <div className="absolute bottom-10 right-5 sm:right-8 md:right-16 lg:right-24 text-right">
        <div className="text-[10px] text-[#a8a3a0] mb-1.5 tracking-[0.2em] uppercase">
          New Delhi, IN
        </div>
        <LiveClock />
      </div>
    </section>
  );
}
