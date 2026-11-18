import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FallingPetals } from "./components/CherryBlossomDecor";
import CursorTrail from "./components/CursorTrail";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d060f] text-pink-50 selection:bg-pink-500 selection:text-white overflow-hidden">
      {/* Interactive Cherry Blossom Cursor Trail */}
      <CursorTrail />

      {/* Falling small cherry blossom flowers & petals drifting down */}
      <FallingPetals />

      {/* Decorative ambient cherry blossom glows in background */}
      <div
        className="pointer-events-none fixed -top-40 -left-20 -z-10 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -right-32 -z-10 h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -bottom-32 left-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-pink-700/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section (With Opening Blooming Cherry Blossom Flower) */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Projects Section */}
      <Projects />

      {/* 5. Contact Section */}
      <Contact />

      {/* 6. Footer (With Small Flowers Down) */}
      <Footer />
    </main>
  );
}
