"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => document.querySelector(link.href.substring(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
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
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-8 md:py-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-pixel text-3xl tracking-tight text-[#050505] select-none"
        >
          codin<span className="text-[#d65a4a]">.</span>
        </a>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative text-base font-medium group transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-[#d65a4a]"
                    : "text-[#050505]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#d65a4a] transition-all duration-300 ${
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="magnetic px-6 py-3 text-base font-semibold bg-[#050505] text-[#f4ede8] border border-[#050505] transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: "3px 3px 0px #d65a4a" }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
