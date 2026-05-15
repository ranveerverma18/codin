"use client";

import { motion } from "framer-motion";

const serviceLinks = [
  "Web Development",
  "Branding",
  "Mobile Apps",
  "Desktop Apps",
];
const socialLinks = [
  { label: "TW", href: "#" },
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "DR", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#040404",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Subtle top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(35,184,194,0.3), transparent)",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24 pt-16 pb-10">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ opacity: 0.8 }}
              data-cursor
            >
              <span className="font-pixel text-xl text-[#f5f5f5]">codin</span>
              <span
                className="font-pixel text-xl"
                style={{
                  color: "#23b8c2",
                  textShadow: "0 0 12px rgba(35,184,194,0.6)",
                }}
              >
                .
              </span>
            </motion.a>
            <p className="text-xs text-[#8a8a8a] leading-[1.9] max-w-[180px]">
              Creative studio building digital futures, one pixel at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-[10px] text-[#8a8a8a] tracking-[0.22em] uppercase mb-5 font-medium">
              Services
            </div>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    data-cursor
                    className="text-sm text-[#f5f5f5]/55 hover:text-[#f5f5f5] transition-colors duration-200 relative group inline-block"
                  >
                    {s}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#23b8c2] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] text-[#8a8a8a] tracking-[0.22em] uppercase mb-5 font-medium">
              Contact
            </div>
            <div className="space-y-3">
              {[
                {
                  val: "hello@codin.studio",
                  href: "mailto:hello@codin.studio",
                },
                { val: "+91 98765 43210", href: "tel:+919876543210" },
                { val: "New Delhi, India" },
              ].map((item) =>
                item.href ? (
                  <a
                    key={item.val}
                    href={item.href}
                    data-cursor
                    className="block text-sm text-[#f5f5f5]/55 hover:text-[#23b8c2] transition-colors duration-200"
                  >
                    {item.val}
                  </a>
                ) : (
                  <div key={item.val} className="text-sm text-[#f5f5f5]/55">
                    {item.val}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-[10px] text-[#8a8a8a] tracking-[0.22em] uppercase mb-5 font-medium">
              Follow
            </div>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  data-cursor
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 12px rgba(35,184,194,0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="font-pixel text-[10px] text-[#8a8a8a] hover:text-[#23b8c2] transition-colors duration-200 border px-3 py-2.5"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>

            {/* Availability dot */}
            <div className="flex items-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#23b8c2] animate-pulse" />
              <span className="font-pixel text-[9px] text-[#8a8a8a] tracking-[0.15em] uppercase">
                Open for work
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] text-[#8a8a8a]/50">
              © {new Date().getFullYear()} codin Studio
            </span>
            <span className="w-1 h-1 bg-[#23b8c2]/40" />
            <span className="font-pixel text-[10px] text-[#8a8a8a]/30">
              v2.0
            </span>
          </div>

          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                data-cursor
                className="text-[11px] text-[#8a8a8a]/50 hover:text-[#f5f5f5]/70 transition-colors duration-200 tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
