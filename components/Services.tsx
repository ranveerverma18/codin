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
    <section className="pt-[60px] md:pt-[80px] pb-[120px] md:pb-[180px] bg-[#f4ede8]">
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
                  className="flip-card-front border border-[#050505] p-7 flex flex-col justify-between"
                  style={{ background: s.bg, boxShadow: "5px 5px 0px #050505" }}
                >
                  <div>
                    <div className="text-3xl mb-5">{s.icon}</div>
                    <h3 className="text-xl font-black text-[#050505] leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <span
                      className="font-pixel leading-none select-none text-[#050505]"
                      style={{ fontSize: "4.5rem", opacity: 0.07 }}
                    >
                      {s.num}
                    </span>
                    <span className="text-xs text-[#a8a3a0] mb-1">Hover →</span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back bg-[#050505] border border-[#050505] p-7 flex flex-col justify-between"
                  style={{ boxShadow: "5px 5px 0px #d65a4a" }}
                >
                  <div>
                    <h3 className="text-base font-black text-[#f4ede8] mb-5 tracking-tight">
                      {s.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {s.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-[#a8a3a0] flex items-center gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-[#1f8b8f] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#f4ede8] border border-[#f4ede8]/25 px-4 py-2.5 hover:bg-[#1f8b8f] hover:border-[#1f8b8f] transition-all duration-200"
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
