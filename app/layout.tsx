import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sumanth Reddy Majjiga - Software Engineer Portfolio",
  description:
    "Software Engineer specializing in Java, Python, JavaScript, Spring Boot, and AI/ML. Building scalable applications and exploring emerging technologies.",
  generator: "v0.app",
  keywords: ["Software Engineer", "Java", "Python", "JavaScript", "Spring Boot", "AI/ML", "Full Stack Developer"],
  authors: [{ name: "Sumanth Reddy Majjiga" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
