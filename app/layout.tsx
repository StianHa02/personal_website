import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stian's Website and Portfolio",
  description: "Welcome to Stian's personal website and portfolio, showcasing a blend of creativity and technical expertise. Explore a curated collection of projects, insights, and experiences that reflect Stian's passion for innovation and design. Dive into a world where technology meets artistry, and discover the unique journey of a developer dedicated to pushing boundaries and creating impactful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
              {children}
      </ThemeProvider>
      <Analytics/>
      <SpeedInsights />
      </body>
    </html>
  );
}
