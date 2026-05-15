"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["Services", "Work", "Blog", "About"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f4ede8]/80 backdrop-blur-md border-b border-[#050505]/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-pixel text-xl tracking-tight text-[#050505] select-none"
        >
          codin<span className="text-[#d65a4a]">.</span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium text-[#050505] group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#050505] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-xs font-medium text-[#a8a3a0] cursor-pointer hover:text-[#050505] transition-colors">
            EN / FR
          </span>
          <a
            href="#contact"
            className="magnetic px-5 py-2.5 text-sm font-semibold bg-[#050505] text-[#f4ede8] border border-[#050505] transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: "3px 3px 0px #d65a4a" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
