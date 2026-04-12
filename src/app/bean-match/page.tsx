import type { Metadata } from "next"
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
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f1e8_0%,#f2ece3_35%,#efe8de_100%)] text-stone-900">
      <section className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <GridPattern width={52} height={52} className="opacity-30 [mask-image:radial-gradient(circle_at_top,white,transparent_75%)]" />
        <div className="relative mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_20px_70px_-45px_rgba(0,0,0,0.6)] backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-900">MyCoffee 買咖啡 AI 選豆</Badge>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">把專業選豆流程，變成顧客 30 秒就能懂的體驗</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                你只要選味道、口感、怕不怕酸，我們就會用店內現有豆單幫你配出最適合的 Top 3。
              </p>
            </div>
            <Link href="/" className="inline-flex h-11 items-center justify-center rounded-full border border-stone-300 px-5 text-sm font-medium text-stone-800 transition hover:bg-stone-50">
              回首頁
            </Link>
          </header>

          <BeanMatchExperience />
        </div>
      </section>
    </main>
  )
}
