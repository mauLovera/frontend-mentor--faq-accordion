import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"

import "./globals.css"
import Banner from "@/components/ui/Banner"

const sans = Work_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ Accordian",
  description: "Frontend Mentor FAQ's",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={"overflow-x-hidden " + sans.className}>
      <body className="sm:py-[167px] relative flex min-h-[100svh] flex-col items-center gap-6 overflow-x-hidden bg-light-pink px-6 py-[142px]">
        <Banner />
        {children}
      </body>
    </html>
  )
}
