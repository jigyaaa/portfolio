import { BloomingSakuraHero } from "./CherryBlossomDecor";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-16 md:py-24">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-600/15 blur-[120px] md:h-[600px] md:w-[600px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-rose-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Blooming Sakura Blossom (Opens gracefully on page load) */}
        <BloomingSakuraHero />

        {/* Status / College chip */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-950/40 px-3.5 py-1.5 text-xs font-medium text-pink-300 backdrop-blur-sm transition-transform duration-300 hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
          </span>
          <span>🌸 1st Sem CS @ BIT, Bangalore</span>
        </div>

        {/* Large Name */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-pink-300 via-rose-200 to-pink-400 bg-clip-text text-transparent">
            Jigya Gupta
          </span>
        </h1>

        {/* One-line Intro */}
        <p className="mt-6 max-w-2xl text-lg text-pink-100/90 sm:text-xl md:text-2xl font-light leading-relaxed">
          CS student who loves building modern web apps and elegant digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Button 1: View my work */}
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/25 transition-all duration-300 hover:-translate-y-1 hover:from-pink-400 hover:to-rose-400 hover:shadow-xl hover:shadow-pink-500/40 active:translate-y-0"
          >
            <span>View my work</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          {/* Button 2: Contact me */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-pink-900/60 bg-[#160b18]/60 px-7 py-3.5 text-sm font-semibold text-pink-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:bg-pink-950/40 hover:text-white active:translate-y-0"
          >
            Contact me 🌸
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 animate-bounce">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="text-pink-400/60 transition-colors hover:text-pink-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
