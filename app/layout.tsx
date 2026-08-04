import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishav Yadav | Software Engineer",

  description:
    "Software Engineer at Tata Consultancy Services specializing in Java, Spring Boot, AI, Machine Learning and scalable backend systems.",

  keywords: [
    "Rishav Yadav",
    "Java",
    "Spring Boot",
    "Python",
    "Machine Learning",
    "Backend Engineer",
    "Software Engineer",
    "Portfolio",
    "AI",
    "Data Science",
  ],

  authors: [{ name: "Rishav Yadav" }],
  creator: "Rishav Yadav",

  openGraph: {
    title: "Rishav Yadav | Software Engineer",
    description:
      "Backend Engineer | AI | Machine Learning | Java | Spring Boot",
    url: "https://rishav-portfolio-red-beta.vercel.app",
    siteName: "Rishav Portfolio",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rishav Yadav",
    description:
      "Backend Engineer | AI | Machine Learning",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}