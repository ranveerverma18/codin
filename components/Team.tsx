"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Google", "Meta"],
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Apple", "Stripe"],
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Vercel", "Netflix"],
  },
  {
    name: "David Kim",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Linear", "Notion"],
  },
  {
    name: "Aisha Patel",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Amazon", "Spotify"],
  },
  {
    name: "James Miller",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Microsoft", "GitHub"],
  },
  {
    name: "Sofia Martinez",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Uber", "Airbnb"],
  },
  {
    name: "Alex Thompson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Tesla", "LinkedIn"],
  },
  {
    name: "Nina Kowalski",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Shopify", "Dropbox"],
  },
  {
    name: "Ryan Foster",
    role: "Senior Engineer",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Docker", "Twitch"],
  },
  {
    name: "Priya Sharma",
    role: "Content Strategist",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["Pinterest", "Canva"],
  },
  {
    name: "Tom Anderson",
    role: "DevOps Lead",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop",
    socials: { linkedin: "#", x: "#" },
    companies: ["AWS", "DigitalOcean"],
  },
];

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-[#f4ede8]"
      style={{ paddingBottom: "160px" }}
    >
      {/* Subtle background texture overlay (optional if the body texture is fully transparent, we can reinforce here) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #050505 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto pl-12 sm:pl-16 md:pl-28 lg:pl-48 pr-8 sm:pr-12 md:pr-20 lg:pr-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#050505] leading-[0.9]">
            The people
            <br />
            behind the work.
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-[#050505]/60 max-w-2xl font-medium tracking-tight">
            A multidisciplinary team of designers, engineers and strategists
            building digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-12 xl:gap-x-14">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className={`flex flex-col group cursor-pointer ${index % 2 !== 0 ? "md:mt-12 xl:mt-16" : ""}`}
            >
              {/* Image Card */}
              <div className="relative mb-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2 w-[85%]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-[0.2] group-hover:scale-[1.03]"
                />

                {/* View Profile Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="text-[#f4ede8] font-medium flex items-center gap-2 text-sm tracking-wide">
                    View Profile
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3
                    className="font-extrabold text-[#050505] tracking-tight mb-1"
                    style={{ fontSize: "2.2rem", lineHeight: "1.1" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-medium text-[#050505]/60"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Companies & Socials (Moved down & organized) */}
              <div className="mt-auto pt-6 border-t-[1.5px] border-[#050505]/10 flex flex-col gap-4">
                <p
                  className="uppercase tracking-[0.18em] text-[#050505]/45 font-bold"
                  style={{ fontSize: "0.8rem" }}
                >
                  Worked at
                </p>

                <div className="flex flex-wrap gap-5 items-center justify-between">
                  <div className="flex gap-4 items-center flex-1">
                    {member.companies.map((company, i) => (
                      <img
                        key={i}
                        src={`https://logo.clearbit.com/${company.toLowerCase().replace(/\s+/g, "")}.com`}
                        alt={`${company} logo`}
                        className="h-5 w-auto object-contain grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:-translate-y-0.5"
                        title={company}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ))}
                  </div>

                  {/* Social Buttons */}
                  <div className="flex gap-2 text-[#050505]">
                    <a
                      href={member.socials.linkedin}
                      className="border-[1.5px] border-[#050505]/20 p-2 transition-all duration-300 hover:border-[#050505] hover:bg-[#050505] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#d65a4a] hover:text-[#f4ede8]"
                    >
                      <LinkedinIcon />
                    </a>
                    <a
                      href={member.socials.x}
                      className="border-[1.5px] border-[#050505]/20 p-2 transition-all duration-300 hover:border-[#050505] hover:bg-[#050505] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#d65a4a] hover:text-[#f4ede8]"
                    >
                      <XIcon />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
