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
    <section id="contact" className="scroll-mt-24 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-pink-400">
            🌸 Connect
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-400" />
          <p className="mt-4 max-w-xl text-base text-pink-200/70">
            Have a project in mind, want to discuss an opportunity, or just want to say hi?
            My inbox is always open.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info & Socials */}
          <div className="flex flex-col justify-between space-y-8 rounded-2xl border border-pink-950/60 bg-[#160b18]/50 p-8 backdrop-blur-sm lg:col-span-5">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl flex items-center gap-2">
                Let&apos;s talk! <span>🌸</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pink-100/80">
                I am open to collaborations, internships, open-source projects, and networking with fellow developers and engineers.
              </p>

              <div className="mt-8 space-y-5">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300 ring-1 ring-pink-500/30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider text-pink-300/70">
                      Email
                    </span>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <a
                        href="mailto:jigya.pisces@gmail.com"
                        className="text-sm font-medium text-pink-100 transition-colors hover:text-pink-300"
                      >
                        jigya.pisces@gmail.com
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="rounded px-2 py-0.5 text-xs font-mono text-pink-300 bg-pink-950/60 ring-1 ring-pink-500/30 transition hover:bg-pink-900/60"
                        title="Copy email to clipboard"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* College / Location Item */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300 ring-1 ring-pink-500/30">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-wider text-pink-300/70">
                      Location
                    </span>
                    <p className="mt-1 text-sm font-medium text-pink-100">
                      BIT, Bangalore • Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-pink-950/60 pt-6">
              <span className="text-xs font-medium uppercase tracking-wider text-pink-300/70">
                Find me on
              </span>
              <div className="mt-3 flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/jigyagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-pink-900/40 bg-pink-950/30 px-4 py-2 text-sm font-medium text-pink-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-900/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/jigyagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-pink-900/40 bg-pink-950/30 px-4 py-2 text-sm font-medium text-pink-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-900/40 hover:text-white"
                >
                  <svg className="h-4 w-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl border border-pink-950/60 bg-[#160b18]/50 p-8 backdrop-blur-sm lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/20 text-pink-300 ring-1 ring-pink-500/40">
                  <span className="text-2xl">🌸</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="mt-2 max-w-md text-sm text-pink-200/80">
                  Thank you for reaching out! I appreciate your message and will respond as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:from-pink-400 hover:to-rose-400 shadow-md shadow-pink-500/25"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-pink-200"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Smith"
                    className="mt-2 block w-full rounded-xl border border-pink-950/80 bg-[#0d060f]/90 px-4 py-3 text-sm text-pink-50 placeholder-pink-300/40 shadow-sm transition-all duration-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-pink-200"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@example.com"
                    className="mt-2 block w-full rounded-xl border border-pink-950/80 bg-[#0d060f]/90 px-4 py-3 text-sm text-pink-50 placeholder-pink-300/40 shadow-sm transition-all duration-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-pink-200"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Jigya, I'd love to connect..."
                    className="mt-2 block w-full resize-none rounded-xl border border-pink-950/80 bg-[#0d060f]/90 px-4 py-3 text-sm text-pink-50 placeholder-pink-300/40 shadow-sm transition-all duration-200 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-pink-400 hover:to-rose-400 active:translate-y-0 sm:w-auto"
                >
                  <span>Send message 🌸</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
