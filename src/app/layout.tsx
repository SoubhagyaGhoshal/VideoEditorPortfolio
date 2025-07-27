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
  title: "Video Editor Portfolio | Creative Storytelling",
  description: "Professional video editor specializing in cinematic storytelling, commercial production, and creative content creation. View my latest work and get in touch for your next project.",
  keywords: "video editor, cinematography, post-production, commercial video, storytelling, creative content",
  authors: [{ name: "Video Editor" }],
  openGraph: {
    title: "Video Editor Portfolio | Creative Storytelling",
    description: "Professional video editor specializing in cinematic storytelling and commercial production",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
