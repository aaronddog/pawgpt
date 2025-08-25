import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalGPT - AI Legal Assistant",
  description: "Get preliminary legal guidance and information from our AI legal assistant. Understand your rights, get answers to legal questions, and receive general legal information on contracts, employment law, personal injury, and more.",
  keywords: ["legal AI", "legal advice", "legal information", "contract law", "employment law", "personal injury", "legal assistant", "LegalGPT"],
  authors: [{ name: "LegalGPT Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-datadog-gray-50 min-h-screen`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
