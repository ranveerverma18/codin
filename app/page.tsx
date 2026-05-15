import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        {/* subtle full-width rule between light sections */}
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <div className="h-12 md:h-20" />
        <Process />
        <div className="section-divider" />
        <Services />
        {/* explicit gap before the dark Contact section */}
        <div className="h-[1px] bg-[#050505]/8" />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
