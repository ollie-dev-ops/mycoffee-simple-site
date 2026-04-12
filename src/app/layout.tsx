import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "MyCoffee 買咖啡｜中壢精品咖啡與 AI 選豆",
  description: "MyCoffee 買咖啡官網與 AI 選豆體驗。把專業選豆流程變成顧客看得懂、玩得起來的咖啡決策系統。",
  metadataBase: new URL("https://mycoffeetaiwan.com"),
  openGraph: {
    title: "MyCoffee 買咖啡｜中壢精品咖啡與 AI 選豆",
    description: "品牌官網＋手機優先 AI 選豆頁，讓顧客更快找到最適合的咖啡。",
    url: "https://mycoffeetaiwan.com",
    siteName: "MyCoffee 買咖啡",
    locale: "zh_TW",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
