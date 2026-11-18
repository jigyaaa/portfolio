import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08080a] text-[#f5f5f3] selection:bg-[#d4ff32] selection:text-[#08080a] overflow-x-hidden">
      {/* Precision Kinetic Cursor Follower */}
      <CursorTrail />

      {/* 1. Navbar (Sticky Utility Bar with Live Bangalore IST Clock) */}
      <Navbar />

      {/* 2. Hero Section (Asymmetrical Typographic Sculpture) */}
      <Hero />

      {/* 3. About Section (Editorial Manifesto & Technical Matrix) */}
      <About />

      {/* 4. Projects Section (Architectural Project Archive with Reusable ProjectCard) */}
      <Projects />

      {/* 5. Contact Section (Direct Telemetry & Minimalist Transmission Form) */}
      <Contact />

      {/* 6. Footer (Typographic Bleed Watermark & Geolocation Stamp) */}
      <Footer />
    </main>
  );
}
