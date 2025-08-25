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
  title: "PawGPT - AI Dog Assistant",
  description: "The world's first AI assistant designed by dogs, for dogs! Get expert advice on training, behavior, health, and everything pup-related from our tail-waggingly smart AI.",
  keywords: ["dog AI", "pet care", "dog training", "puppy advice", "dog health", "pet assistant", "PawGPT"],
  authors: [{ name: "PawGPT Team" }],
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
