"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Canvas particle field ─────────────────────────────────────── */
function ParticleField() {
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

    const pts = Array.from({ length: 55 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.28,
      dy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.28 + 0.06,
      square: i % 7 === 0,
      size: Math.random() * 2.5 + 1,
    }));

    let raf: number;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        ctx.globalAlpha = p.alpha;
        if (p.square) {
          ctx.fillStyle = "#23b8c2";
          ctx.fillRect(p.x, p.y, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "#23b8c2";
          ctx.fill();
        }
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

/* ─── Scanline overlay ───────────────────────────────────────────── */
function Scanlines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[2]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
      }}
    />
  );
}

/* ─── Floating pixel crosses (reduced to 3) ─────────────────────── */
const CROSSES = [
  { x: "8%", y: "15%", size: 9, color: "#23b8c2", delay: 0 },
  { x: "92%", y: "45%", size: 7, color: "#23b8c2", delay: 1.5 },
  { x: "88%", y: "82%", size: 8, color: "#e66a5c", delay: 0.8 },
];

function PixelCrosses() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      {CROSSES.map((c, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: c.x, top: c.y }}
          animate={{ y: [0, -8, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 6 + i * 1.2,
            repeat: Infinity,
            delay: c.delay,
            ease: "easeInOut",
          }}
        >
          <svg width={c.size * 2.4} height={c.size * 2.4} viewBox="0 0 24 24">
            <rect x="10" y="0" width="4" height="24" fill={c.color} />
            <rect x="0" y="10" width="24" height="4" fill={c.color} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Brutalist bottom-border input ─────────────────────────────── */
function BrutalInput({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative group">
      <label
        className="block text-[10px] tracking-[0.22em] uppercase mb-3 font-medium"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-0 border-b pb-3 text-[#f5f5f5] focus:outline-none text-base font-medium transition-colors duration-300"
          style={{
            borderBottomColor: focused ? "#23b8c2" : "rgba(255,255,255,0.18)",
            caretColor: "#23b8c2",
          }}
        />
        <style jsx>{`
          input::placeholder {
            color: rgba(255, 255, 255, 0.35);
          }
        `}</style>
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{ background: "#23b8c2" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─── Brutalist textarea ─────────────────────────────────────────── */
function BrutalTextarea({
  label,
  placeholder,
  name,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label
        className="block text-[10px] tracking-[0.22em] uppercase mb-3 font-medium"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={5}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-0 border-b pb-3 text-[#f5f5f5] focus:outline-none text-base font-medium resize-none leading-relaxed transition-colors duration-300"
          style={{
            borderBottomColor: focused ? "#23b8c2" : "rgba(255,255,255,0.18)",
            caretColor: "#23b8c2",
          }}
        />
        <style jsx>{`
          textarea::placeholder {
            color: rgba(255, 255, 255, 0.35);
          }
        `}</style>
        <motion.div
          className="absolute bottom-0 left-0 h-px"
          style={{ background: "#23b8c2" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ─── Custom checkbox ────────────────────────────────────────────── */
function BrutalCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      className="flex items-start gap-4 cursor-pointer group"
      onClick={onChange}
    >
      <div
        className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 border flex items-center justify-center transition-all duration-200"
        style={{
          borderColor: checked ? "#23b8c2" : "rgba(255,255,255,0.2)",
          boxShadow: checked ? "0 0 10px rgba(35,184,194,0.4)" : "none",
          background: checked ? "rgba(35,184,194,0.12)" : "transparent",
        }}
      >
        <AnimatePresence>
          {checked && (
            <motion.svg
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "backOut" }}
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <polyline
                points="1.5,5 4,7.5 8.5,2"
                fill="none"
                stroke="#23b8c2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
      <span className="text-xs text-[#8a8a8a] leading-[1.8] group-hover:text-[#f5f5f5]/70 transition-colors duration-200">
        I agree to the privacy policy and consent to being contacted about my
        project.
      </span>
    </label>
  );
}

/* ─── Magnetic brutalist CTA button with offset shadow ──────────── */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
      y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
    },
    [x, y],
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className="relative group mt-4 w-full overflow-hidden"
      data-cursor
    >
      {/* coral shadow layer */}
      <div
        className="absolute inset-0 bg-[#d65a4a] transition-all duration-200"
        style={{
          transform: "translate(8px, 8px)",
        }}
      />
      {/* main button */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-3 py-4 px-8 bg-[#23b8c2] border border-[#23b8c2] font-bold text-[#040404] text-sm tracking-[0.18em] uppercase transition-all duration-200"
        whileHover={{ x: -4, y: -4 }}
      >
        <span>{children}</span>
        <motion.span
          className="inline-block"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </motion.div>
    </motion.button>
  );
}

/* ─── Contact info item ──────────────────────────────────────────── */
function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <motion.div
      className="group cursor-default"
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div
        className="text-[10px] tracking-[0.22em] uppercase mb-1.5 font-medium"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </div>
      <div
        className="font-pixel text-[#f5f5f5] group-hover:text-[#23b8c2] transition-colors duration-200"
        style={{ fontSize: "clamp(0.8rem, 1.6vw, 1.05rem)" }}
      >
        {value}
      </div>
    </motion.div>
  );

  return href ? (
    <a href={href} data-cursor className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

/* ─── Main section ───────────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ company: "", email: "", message: "" });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll(".reveal-line");
    gsap.fromTo(
      lines,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#040404" }}
    >
      {/* ── Layered background ── */}
      <ParticleField />
      <Scanlines />
      <PixelCrosses />

      {/* Layered atmospheric background */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "20%",
          left: "15%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(35,184,194,0.12) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "15%",
          right: "12%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(230,106,92,0.08) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          boxShadow: "inset 0 0 200px rgba(0,0,0,0.8)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full max-w-[1400px] mx-auto py-[120px] md:py-[160px]"
        style={{
          paddingLeft: "clamp(60px, 8vw, 140px)",
          paddingRight: "clamp(40px, 6vw, 100px)",
        }}
      >
        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16 md:mb-20"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-pixel text-[10px] text-[#23b8c2] tracking-[0.25em] uppercase">
            05 — Contact
          </span>
          <span className="h-px w-12 bg-[#23b8c2]/30" />
        </motion.div>

        {/* ── Split layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-16 lg:gap-24 xl:gap-32">
          {/* ── LEFT ── */}
          <div className="flex flex-col justify-between gap-16">
            {/* Heading */}
            <div className="relative">
              {/* Glow behind "something" */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "28%",
                  left: "-10%",
                  width: "120%",
                  height: "25%",
                  background:
                    "radial-gradient(ellipse, rgba(35,184,194,0.15) 0%, transparent 70%)",
                  filter: "blur(80px)",
                  zIndex: 0,
                }}
              />
              <div
                ref={headingRef}
                className="font-black tracking-tight overflow-hidden relative z-10"
                style={{
                  fontSize: "clamp(4rem, 7vw, 6.5rem)",
                  lineHeight: 0.9,
                }}
              >
                <span className="reveal-line block text-[#f5f5f5] opacity-0">
                  Let&apos;s build
                </span>
                <span
                  className="reveal-line block opacity-0"
                  style={{
                    color: "#23b8c2",
                    textShadow: "0 0 50px rgba(35,184,194,0.4)",
                  }}
                >
                  something
                </span>
                <span className="reveal-line block text-[#f5f5f5] opacity-0">
                  great
                </span>
                <span className="reveal-line block text-[#f5f5f5] opacity-0">
                  together.
                </span>
              </div>
            </div>

            {/* Contact details */}
            <motion.div
              className="flex flex-col"
              style={{ gap: 32, marginTop: 64 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ContactItem
                label="Email"
                value="hello@codin.studio"
                href="mailto:hello@codin.studio"
              />
              <ContactItem
                label="Phone"
                value="+91 98765 43210"
                href="tel:+919876543210"
              />
              <ContactItem label="Location" value="New Delhi, India" />

              {/* Availability badge */}
              <motion.div
                className="inline-flex items-center gap-2.5 border px-4 py-2.5 w-fit mt-2"
                style={{
                  borderColor: "rgba(35,184,194,0.25)",
                  background: "rgba(35,184,194,0.05)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(35,184,194,0)",
                    "0 0 16px rgba(35,184,194,0.15)",
                    "0 0 0px rgba(35,184,194,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#23b8c2] animate-pulse" />
                <span className="font-pixel text-[10px] text-[#23b8c2] tracking-[0.18em] uppercase">
                  Available for projects
                </span>
              </motion.div>
            </motion.div>

            {/* Decorative pixel number */}
            <div
              className="font-pixel text-[#ffffff]/[0.03] select-none leading-none hidden lg:block"
              style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
            >
              05
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            className="flex flex-col justify-start"
            style={{ maxWidth: 720, paddingTop: 80 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Thin top accent line */}
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-[#23b8c2]/40 to-transparent" />
              <span className="font-pixel text-[9px] text-[#8a8a8a] tracking-[0.2em] uppercase">
                New Project
              </span>
            </div>

            <form
              className="flex flex-col gap-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <BrutalInput
                label="Company Name"
                placeholder="Acme Inc."
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <BrutalInput
                label="Email Address"
                type="email"
                placeholder="you@company.com"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <BrutalTextarea
                label="Tell us about your project"
                placeholder="We're building a platform that..."
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <BrutalCheckbox
                checked={agreed}
                onChange={() => setAgreed((p) => !p)}
              />

              <MagneticButton>Send Message</MagneticButton>
            </form>

            {/* Bottom note */}
            <p className="mt-6 text-[11px] text-[#8a8a8a]/60 tracking-wide">
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
