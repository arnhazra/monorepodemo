import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.sass"

const quickSand = Quicksand({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nest + Next Monorepo",
  description: "Nest + Next Monorepo",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={quickSand.className}>{children}</body>
    </html>
  )
}
