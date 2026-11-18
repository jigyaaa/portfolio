import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JIGYA GUPTA // Computational Systems & Web Architecture",
  description:
    "Personal archive and digital portfolio of Jigya Gupta — 1st Semester Computer Science student at Bangalore Institute of Technology (BIT), Bangalore.",
  keywords: ["Jigya Gupta", "Computer Science", "BIT Bangalore", "React", "Python", "Full Stack Developer"],
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
      <body className="min-h-screen bg-[#08080a] text-[#f5f5f3] antialiased selection:bg-[#d4ff32] selection:text-[#08080a]">
        {children}
      </body>
    </html>
  );
}
