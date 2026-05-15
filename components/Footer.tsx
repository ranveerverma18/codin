"use client";

const footerLinks = ["Privacy Policy", "Cookies", "Legal"];
const socials = ["fb", "x", "in", "ig", "p"];

export default function Footer() {
  return (
    <footer className="bg-[#040404] text-[#f5f5f5] border-t border-white/10">
      <div className="about-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs uppercase tracking-[0.22em] text-[#a8a3a0] hover:text-[#23b8c2] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-[#a8a3a0] hover:text-[#f5f5f5] transition-colors tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-[11px] text-[#8a8a8a] tracking-wide">
            © {new Date().getFullYear()} codin, Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
