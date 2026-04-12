import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { BeanMatchExperience } from "@/components/bean-match-experience"
import { Badge } from "@/components/ui/badge"
import { GridPattern } from "@/components/ui/grid-pattern"

export const metadata: Metadata = {
  title: "AI 選豆｜MyCoffee 買咖啡",
  description: "用 3 個問題，快速找到最適合你的咖啡豆。手機優先的 AI 選豆體驗。",
}

export default function BeanMatchPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f1e8_0%,#f2ece3_35%,#eee6dc_100%)] text-stone-900">
      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <GridPattern width={52} height={52} className="opacity-30 [mask-image:radial-gradient(circle_at_top,white,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl space-y-6">
          <header className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/72 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.6)] backdrop-blur">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-5 sm:p-6 lg:p-8">
                <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-900">MyCoffee 買咖啡 AI 選豆</Badge>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">把專業選豆流程，變成顧客 30 秒就能完成的體驗</h1>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                  這一頁不是要教客人咖啡理論，而是用最少的問題，幫他快速得到有理由的推薦。手機上用起來要順，店員在旁邊講也要順。
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/" className="inline-flex h-11 items-center justify-center rounded-full border border-stone-300 px-5 text-sm font-medium text-stone-800 transition hover:bg-stone-50">
                    回首頁
                  </Link>
                  <a href="https://shop.ichefpos.com/store/139TPDhT/ordering" target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-stone-900 px-5 text-sm font-medium text-white transition hover:bg-stone-800">
                    直接看菜單
                  </a>
                </div>
              </div>
              <div className="relative min-h-[260px] lg:min-h-full">
                <Image src="/images/store-02.jpg" alt="買咖啡店內空間實拍" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
              </div>
            </div>
          </header>

          <BeanMatchExperience />
        </div>
      </section>
    </main>
  )
}
