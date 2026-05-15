"use client";
import { motion } from "framer-motion";

const serviceLinks = ["Web Development", "Branding", "Mobile Apps", "Desktop Apps"];
const socialLinks = [
  { label: "TW", href: "#" },
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "DR", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#ffffff]/8">
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">

          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-pixel text-2xl text-[#f4ede8] mb-3">
              FORMA<span className="text-[#d65a4a]">.</span>
            </div>
            <p className="text-xs text-[#a8a3a0] leading-[1.8] max-w-[180px]">
              Creative studio building digital futures.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="text-[10px] text-[#a8a3a0] tracking-[0.2em] uppercase mb-5">Services</div>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-[#f4ede8]/70 hover:text-[#f4ede8] transition-colors relative group"
                  >
                    {s}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1f8b8f] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] text-[#a8a3a0] tracking-[0.2em] uppercase mb-5">Contact</div>
            <div className="space-y-3 text-sm text-[#f4ede8]/70 leading-relaxed">
              <div>hello@forma.studio</div>
              <div>+91 98765 43210</div>
              <div>New Delhi, India</div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-[10px] text-[#a8a3a0] tracking-[0.2em] uppercase mb-5">Follow</div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3 }}
                  className="font-pixel text-xs text-[#f4ede8]/70 hover:text-[#1f8b8f] transition-colors border border-[#ffffff]/15 px-3 py-2"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#ffffff]/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#a8a3a0]">
            © {new Date().getFullYear()} FORMA Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-[#a8a3a0] hover:text-[#f4ede8] transition-colors"
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
