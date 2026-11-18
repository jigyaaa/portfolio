import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jigya Gupta | Portfolio 🌸",
  description:
    "Personal portfolio of Jigya Gupta - CS student at BIT, Bangalore who loves building modern web apps. Cherry blossom themed.",
  keywords: ["Jigya Gupta", "Portfolio", "Web Developer", "React", "Python", "BIT Bangalore", "Cherry Blossom"],
  authors: [{ name: "Jigya Gupta" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#0d060f] text-pink-50 antialiased selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
