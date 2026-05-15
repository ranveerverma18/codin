"use client";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web",
    icon: "⬡",
    bg: "#d5eaf0",
    items: [
      "Frontend Development",
      "Backend Development",
      "CMS Integration",
      "SEO Optimization",
      "Percodinnce Tuning",
    ],
  },
  {
    num: "02",
    title: "Branding",
    icon: "◈",
    bg: "#e8dff5",
    items: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Brand Guidelines",
      "Motion Branding",
    ],
  },
  {
    num: "03",
    title: "Mobile App",
    icon: "◉",
    bg: "#d8f0e4",
    items: [
      "iOS Development",
      "Android Development",
      "React Native",
      "UI/UX Design",
      "App Store Launch",
    ],
  },
  {
    num: "04",
    title: "Desktop App",
    icon: "▣",
    bg: "#fde8d8",
    items: [
      "Electron Apps",
      "Cross-platform",
      "System Integration",
      "Custom Dashboards",
      "Offline Support",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-[80px] md:py-[100px] bg-[#f4ede8]">
      <div className="about-container">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-pixel text-[11px] text-[#a8a3a0] tracking-[0.2em] uppercase">
            — What We Do
          </span>
          <h2
            className="font-black leading-[0.95] tracking-tight mt-4 text-[#050505]"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            Our Services
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flip-card h-80"
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div
                  className="flip-card-front border border-[#050505] p-7 flex flex-col items-center justify-center text-center"
                  style={{ background: s.bg, boxShadow: "5px 5px 0px #050505" }}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-4">{s.icon}</div>
                    <h3 className="text-xl font-black text-[#050505] leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back bg-[#050505] border border-[#050505] p-6 flex flex-col justify-between items-center text-center"
                  style={{ boxShadow: "5px 5px 0px #d65a4a" }}
                >
                  <div className="w-full">
                    <h3
                      className="font-black text-[#f4ede8] tracking-tight"
                      style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}
                    >
                      {s.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm md:text-base text-[#a8a3a0] flex items-center justify-center gap-2.5 leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-[#1f8b8f] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#f4ede8] border border-[#f4ede8]/25 px-4 py-2.5 hover:bg-[#1f8b8f] hover:border-[#1f8b8f] transition-all duration-200"
                  >
                    Get Started <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
