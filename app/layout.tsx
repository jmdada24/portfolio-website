import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Mhel Dalumpines | Full-Stack Developer & UI/UX Designer",
  description: "Computer Science student specializing in full-stack development and UI/UX design. Passionate about creating innovative software solutions with React, Node.js, and modern web technologies.",
  keywords: [
    "John Mhel Dalumpines",
    "JMD Portfolio",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Computer Science",
    "React Developer",
    "Web Developer",
    "Davao City Developer",
    "University of Mindanao",
    "JavaScript Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "John Mhel Dalumpines" }],
  creator: "John Mhel Dalumpines",
  publisher: "John Mhel Dalumpines",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jmd-portfolio-website-27.vercel.app",
    title: "John Mhel Dalumpines | Full-Stack Developer & UI/UX Designer",
    description: "Computer Science student specializing in full-stack development and UI/UX design. Passionate about creating innovative software solutions.",
    siteName: "JMD Portfolio",
    images: [
      {
        url: "/assets/images/jm-image.jpeg",
        width: 1200,
        height: 630,
        alt: "John Mhel Dalumpines - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Mhel Dalumpines | Full-Stack Developer & UI/UX Designer",
    description: "Computer Science student specializing in full-stack development and UI/UX design.",
    images: ["/assets/images/jm-image.jpeg"],
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
    google: "your-google-verification-code", // Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jmd-portfolio-website-27.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}