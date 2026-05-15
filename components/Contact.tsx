"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.35 + 0.08,
    }));

    let raf: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(31,139,143,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
    />
  );
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-[#050505] overflow-hidden"
      style={{ minHeight: "80vh" }}
    >
      <Particles />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1f8b8f]/8 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 lg:px-24 relative z-10 py-[120px] md:py-[160px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-pixel text-[11px] text-[#a8a3a0] tracking-[0.2em] uppercase">
              — Get In Touch
            </span>

            <h2
              className="font-black text-[#f4ede8] leading-[1.05] tracking-tight mt-5 mb-12"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)" }}
            >
              Let&apos;s build<br />
              <span className="text-[#1f8b8f]">something</span><br />
              great together
            </h2>

            <div className="space-y-8">
              <div>
                <div className="text-[10px] text-[#a8a3a0] mb-2 tracking-[0.18em] uppercase">Email</div>
                <a
                  href="mailto:hello@forma.studio"
                  className="font-pixel text-[#f4ede8] hover:text-[#1f8b8f] transition-colors duration-200 break-all"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.2rem)" }}
                >
                  hello@forma.studio
                </a>
              </div>
              <div>
                <div className="text-[10px] text-[#a8a3a0] mb-2 tracking-[0.18em] uppercase">Phone</div>
                <div
                  className="font-pixel text-[#f4ede8]"
                  style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.2rem)" }}
                >
                  +91 98765 43210
                </div>
              </div>
              <div>
                <div className="text-[10px] text-[#a8a3a0] mb-2 tracking-[0.18em] uppercase">Location</div>
                <div className="text-[#a8a3a0] text-sm leading-relaxed">New Delhi, India</div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

              <div>
                <label className="text-[10px] text-[#a8a3a0] tracking-[0.18em] uppercase block mb-2.5">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full bg-transparent border border-[#ffffff]/12 px-5 py-4 text-[#f4ede8] placeholder-[#a8a3a0]/40 focus:outline-none focus:border-[#1f8b8f] transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#a8a3a0] tracking-[0.18em] uppercase block mb-2.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent border border-[#ffffff]/12 px-5 py-4 text-[#f4ede8] placeholder-[#a8a3a0]/40 focus:outline-none focus:border-[#1f8b8f] transition-colors duration-200 text-sm"
                />
              </div>

              <div>
                <label className="text-[10px] text-[#a8a3a0] tracking-[0.18em] uppercase block mb-2.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border border-[#ffffff]/12 px-5 py-4 text-[#f4ede8] placeholder-[#a8a3a0]/40 focus:outline-none focus:border-[#1f8b8f] transition-colors duration-200 text-sm resize-none leading-relaxed"
                />
              </div>

              <label className="flex items-start gap-3.5 cursor-pointer">
                <div
                  onClick={() => setAgreed(!agreed)}
                  className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    agreed ? "bg-[#1f8b8f] border-[#1f8b8f]" : "border-[#ffffff]/25"
                  }`}
                >
                  {agreed && <span className="text-white text-[10px] leading-none">✓</span>}
                </div>
                <span className="text-xs text-[#a8a3a0] leading-[1.7]">
                  I agree to the privacy policy and consent to being contacted about my project.
                </span>
              </label>

              <motion.button
                type="submit"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="magnetic mt-2 w-full py-4 font-semibold text-[#f4ede8] bg-[#1f8b8f] border border-[#1f8b8f] transition-all duration-200 text-sm tracking-widest uppercase"
                style={{ boxShadow: "5px 5px 0px #d65a4a" }}
              >
                Send Message →
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
