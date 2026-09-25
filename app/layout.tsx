import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL("https://rishav-portfolio-red-beta.vercel.app"),
  alternates: { canonical: "/" },
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
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}