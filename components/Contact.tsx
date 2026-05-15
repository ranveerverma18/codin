"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f4ede8] text-[#050505]">
      <div className="about-container py-[120px] md:py-[160px]">
        <div className="mb-10 md:mb-14">
          <span className="text-[12px] text-[#d65a4a] tracking-[0.22em] uppercase font-semibold">
            Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <h2
              className="font-black leading-[0.98] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}
            >
              Let&apos;s build
              <span className="block text-[#1f8b8f]">something</span>
              great together.
            </h2>
            <p className="mt-6 text-[#a8a3a0] leading-[1.8] max-w-[52ch]">
              Tell us about your project and we will get back within 24 hours.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase mb-3 text-[#a8a3a0]">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Acme Inc."
                className="w-full bg-transparent border-0 border-b border-[#050505]/15 pb-3 text-base focus:outline-none focus:border-[#050505]"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase mb-3 text-[#a8a3a0]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-0 border-b border-[#050505]/15 pb-3 text-base focus:outline-none focus:border-[#050505]"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.22em] uppercase mb-3 text-[#a8a3a0]">
                Tell Us About Your Project
              </label>
              <textarea
                rows={5}
                placeholder="We are building a..."
                className="w-full bg-transparent border-0 pb-3 text-base focus:outline-none resize-none leading-relaxed"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-3 px-8 py-3 text-sm font-semibold tracking-[0.18em] uppercase border border-[#050505] text-[#050505] hover:bg-[#050505] hover:text-[#f4ede8] transition-colors rounded-full"
            >
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
