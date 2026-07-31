import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishav Yadav | Backend Engineer • AI/ML Engineer",
  description:
    "Backend Engineer with 3+ years of experience at Tata Consultancy Services. Specializing in Java, Spring Boot, Python, Machine Learning, AI, REST APIs, and scalable backend systems.",
  keywords: [
    "Rishav Yadav",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Rishav Yadav" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#050816] text-white antialiased">
        {children}
      </body>
    </html>
  );
}