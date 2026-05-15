"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Patel",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Miller",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sofia Martinez",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Alex Thompson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Nina Kowalski",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ryan Foster",
    role: "Senior Engineer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Tom Anderson",
    role: "DevOps Lead",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
];

const companies = [
  "Google",
  "Meta",
  "Apple",
  "Amazon",
  "Microsoft",
  "Netflix",
  "Spotify",
  "Airbnb",
  "Uber",
  "Tesla",
  "Adobe",
  "Salesforce",
];

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />

      <main className="bg-[#f4ede8]">
        {/* Hero */}
        <section className="pt-[180px] pb-[100px] px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-pixel text-[10px] text-[#d65a4a] tracking-[0.25em] uppercase">
                About Us
              </span>
              <h1
                className="font-black tracking-tight leading-[0.95] mt-6 text-[#050505]"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                We are a team of<br />
                <span className="font-pixel text-[#23b8c2]">creators</span> and<br />
                innovators.
              </h1>
              <p
                className="mt-8 text-[#3a3a3a] leading-[1.8] max-w-2xl"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
              >
                Building digital products that push boundaries and create meaningful impact. We believe in the power of design, technology, and human connection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-[100px] px-6 md:px-16 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-pixel text-[10px] text-[#d65a4a] tracking-[0.25em] uppercase">
                  Our Team
                </span>
                <span className="h-px w-12 bg-[#d65a4a]/30" />
              </div>
              <h2
                className="font-black tracking-tight leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Meet the people<br />
                behind <span className="font-pixel text-[#23b8c2]">FORMA</span>
              </h2>
            </motion.div>

            {/* Team Grid - 3 per row on desktop, 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden border border-[#050505] mb-4" style={{ boxShadow: "4px 4px 0px #050505" }}>
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mb-3">
                    <h3 className="text-lg font-black text-[#050505] mb-1">{member.name}</h3>
                    <p className="text-sm text-[#a8a3a0] font-medium">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                      whileHover={{ y: -3 }}
                      className="w-9 h-9 border border-[#050505]/20 flex items-center justify-center text-[#050505] hover:border-[#23b8c2] hover:text-[#23b8c2] transition-colors duration-200"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                      whileHover={{ y: -3 }}
                      className="w-9 h-9 border border-[#050505]/20 flex items-center justify-center text-[#050505] hover:border-[#23b8c2] hover:text-[#23b8c2] transition-colors duration-200"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-[100px] px-6 md:px-16 lg:px-24 bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-pixel text-[10px] text-[#23b8c2] tracking-[0.25em] uppercase">
                Experience
              </span>
              <h2
                className="font-black tracking-tight leading-[1.05] mt-6 text-[#f4ede8]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Companies our team<br />
                has worked with
              </h2>
            </motion.div>

            {/* Companies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {companies.map((company, i) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="aspect-square border border-[#f4ede8]/10 flex items-center justify-center p-6 group cursor-default"
                  data-cursor
                >
                  <span className="font-pixel text-sm text-[#f4ede8]/40 group-hover:text-[#23b8c2] transition-colors duration-300 text-center">
                    {company}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </SmoothScroll>
  );
}
