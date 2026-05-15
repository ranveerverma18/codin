"use client";

const navLinks = ["Home", "Resources", "Pricing", "Careers"];
const policyLinks = ["Privacy Policy", "Terms of Service", "Docs"];
const socials = ["x", "in"];

export default function Footer() {
  return (
    <footer className="bg-[#f4ede8] text-[#050505]">
      <div className="about-container pt-[110px] pb-[80px] md:pt-[140px] md:pb-[110px]">
        <div className="grid grid-cols-1 gap-12 items-start">
          <div>
            <h3
              className="font-black leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
            >
              Run an entire company
              <span className="block text-[#a8a3a0]">with AI agents</span>
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-8 max-w-[420px]">
              <div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#a8a3a0] mb-4">
                  Navigation
                </div>
                <ul className="space-y-2.5">
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#050505]/75 hover:text-[#050505] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#a8a3a0] mb-4">
                  Information
                </div>
                <ul className="space-y-2.5">
                  {policyLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#050505]/75 hover:text-[#050505] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-[#050505]/10 flex items-center justify-center text-xs uppercase text-[#050505]/70 hover:text-[#050505] hover:border-[#050505]/30 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>

            <div className="mt-10 text-[11px] text-[#a8a3a0]">
              Copyright © {new Date().getFullYear()} Codin Studio
            </div>
          </div>

          
        </div>

        <div className="mt-12 text-center text-[11px] text-[#a8a3a0]">
          Made with care by Codin Studio
        </div>
      </div>
    </footer>
  );
}
