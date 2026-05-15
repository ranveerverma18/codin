import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMembers from "@/components/Team";

export default function TeamPage() {
  return (
    <SmoothScroll>
      <Cursor />
      <Navbar />
      <main className="min-h-screen" style={{ paddingTop: '160px' }}>
        <TeamMembers />
      </main>
      <Footer />
    </SmoothScroll>
  );
}