"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jigya.pisces@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-24 border-b border-[#232530] px-6 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#181920] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d4ff32]">
              // 03. TRANSMISSION PROTOCOL
            </span>
            <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f5f5f3]">
              Contact Me
            </h2>
          </div>
          <div className="font-mono text-xs text-[#71717a] text-right">
            <span>INBOX: jigya.pisces@gmail.com</span>
            <span className="block text-[#52525b]">STATUS // READY_FOR_DISPATCH</span>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Telemetry & Social Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[#d4ff32]">
                [ INITIATE CONNECTION ]
              </p>
              <h3 className="text-2xl sm:text-3xl font-light leading-snug text-[#f5f5f3]">
                Have a project, internship opportunity, or technical discussion in mind?
              </h3>
              <p className="text-base text-[#a1a1aa] leading-relaxed">
                Whether you want to discuss frontend architectures, open-source ideas, or college collaborations, my transmission channel is always open.
              </p>

              {/* Direct Email HUD */}
              <div className="border border-[#1f212d] bg-[#111217] p-5 font-mono text-xs space-y-3">
                <span className="text-[#71717a] block uppercase text-[10px] tracking-widest">
                  DIRECT EMAIL DISPATCH
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="mailto:jigya.pisces@gmail.com"
                    className="text-sm font-semibold text-[#f5f5f3] hover:text-[#d4ff32] transition-colors"
                  >
                    jigya.pisces@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="border border-[#27272a] bg-[#181920] px-3 py-1 text-[11px] uppercase tracking-wider text-[#a1a1aa] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors"
                  >
                    {copied ? "[ COPIED ✓ ]" : "[ COPY ADDRESS ]"}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-[#181920] pt-6 font-mono text-xs">
              <span className="text-[#52525b] uppercase block text-[10px] tracking-wider mb-3">
                VERIFIED NETWORK PROFILES
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/jigyaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-[#27272a] bg-[#111217] px-4 py-2.5 text-[#f5f5f3] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors"
                >
                  <span>GITHUB [jigyagupta]</span>
                  <span className="text-[#71717a] group-hover:text-[#d4ff32]">↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/jigyagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-[#27272a] bg-[#111217] px-4 py-2.5 text-[#f5f5f3] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors"
                >
                  <span>LINKEDIN [jigyagupta]</span>
                  <span className="text-[#71717a] group-hover:text-[#d4ff32]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Dispatch Form */}
          <div className="lg:col-span-7 border border-[#1f212d] bg-[#111217]/60 p-8 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center font-mono space-y-4">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4ff32] text-[#d4ff32] text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-[#f5f5f3]">
                  TRANSMISSION LOGGED
                </h4>
                <p className="max-w-md text-xs text-[#a1a1aa] leading-relaxed">
                  Thank you for reaching out. Your dispatch has been received. Jigya will review and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 border border-[#d4ff32] bg-[#d4ff32] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#08080a] hover:bg-[#b8e617]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-mono">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-[#a1a1aa] block">
                    01 // SENDER IDENTIFICATION (NAME)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name or organization..."
                    className="w-full border-b border-[#27272a] bg-transparent py-3 text-sm text-[#f5f5f3] placeholder-[#52525b] focus:border-[#d4ff32] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-[#a1a1aa] block">
                    02 // RETURN TRANSMISSION ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full border-b border-[#27272a] bg-transparent py-3 text-sm text-[#f5f5f3] placeholder-[#52525b] focus:border-[#d4ff32] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-[#a1a1aa] block">
                    03 // TRANSMISSION CONTENT (MESSAGE)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail your inquiry, project scope, or opportunity..."
                    className="w-full resize-none border-b border-[#27272a] bg-transparent py-3 text-sm text-[#f5f5f3] placeholder-[#52525b] focus:border-[#d4ff32] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-[#d4ff32] bg-[#d4ff32] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#08080a] transition-all duration-200 hover:bg-[#b8e617] active:scale-95"
                >
                  <span>Transmit message</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
