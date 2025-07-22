import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SocialBar } from "@/components/social-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SolarDeals India - Best Solar Products & Solutions",
  description:
    "India's leading solar marketplace. Compare solar panels, inverters, and complete systems from top Indian manufacturers. Get personalized recommendations and instant cost estimates.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " pb-16 sm:pb-0"}>
        <SocialBar />
        {children}
      </body>
    </html>
  )
}
