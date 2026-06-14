import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://jm-dalumpines.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Mhel Dalumpines | Full-Stack Developer, UI/UX Designer & AI Engineer",
    template: "%s | John Mhel Dalumpines",
  },
  description:
    "John Mhel Dalumpines is a Full-Stack Developer, UI/UX Designer, and AI Engineer building modern web applications, thoughtful user experiences, and intelligent digital solutions.",
  applicationName: "JMD Portfolio",
  keywords: [
    "John Mhel Dalumpines",
    "JMD Portfolio",
    "Full-Stack Developer",
    "UI/UX Designer",
    "AI Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Davao City Developer",
    "Philippines Developer",
    "Portfolio Website",
  ],
  authors: [{ name: "John Mhel Dalumpines", url: siteUrl }],
  creator: "John Mhel Dalumpines",
  publisher: "John Mhel Dalumpines",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "John Mhel Dalumpines | Full-Stack Developer, UI/UX Designer & AI Engineer",
    description:
      "Portfolio of John Mhel Dalumpines — Full-Stack Developer, UI/UX Designer, and AI Engineer creating modern, user-focused, and intelligent digital products.",
    siteName: "JMD Portfolio",
    images: [
      {
        url: "/assets/images/jm-image.png",
        width: 1200,
        height: 630,
        alt: "John Mhel Dalumpines - Full-Stack Developer, UI/UX Designer, and AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mhel Dalumpines | Full-Stack Developer, UI/UX Designer & AI Engineer",
    description:
      "Portfolio of John Mhel Dalumpines — Full-Stack Developer, UI/UX Designer, and AI Engineer.",
    images: ["/assets/images/jm-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "FSjA4Ep01-BP72k4yylZpvtF_OIKWOarVZx2KrGd0iI",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}