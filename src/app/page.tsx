import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, MapPin, Sparkles, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GridPattern } from "@/components/ui/grid-pattern"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { beanOrderLink, beanReserveLink, beans } from "@/data/beans"

const serviceCards = [
  {
    title: "精品咖啡講人話",
    description: "把花香、果香、堅果、巧克力講成顧客聽得懂的選擇，不讓專業變成距離。",
  },
  {
    title: "AI 選豆是成交流程",
    description: "不是炫技，而是把選豆標準化，讓客人 30 秒就能進入推薦與點餐。",
  },
  {
    title: "適合約人，也適合自己慢下來",
    description: "中壢車站附近，精品咖啡與甜點一起成立，空間感和節奏都放得剛剛好。",
  },
]

export default function Home() {
  const featuredBeans = beans.filter((bean) => bean.featured).slice(0, 3)

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f3ec_0%,#f4eee6_38%,#efe7de_100%)] text-stone-900">
      <section className="relative overflow-hidden border-b border-white/40">
        <GridPattern width={60} height={60} className="opacity-25 [mask-image:radial-gradient(circle_at_top,white,transparent_72%)]" />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_60px_-36px_rgba(31,18,4,0.35)] backdrop-blur sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">MC</div>
              <div>
                <p className="text-sm font-semibold">MyCoffee 買咖啡</p>
                <p className="text-xs text-stone-500">精品咖啡 × 甜點 × AI 選豆</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
              <a href="#brand">品牌感受</a>
              <a href="#beans">推薦豆款</a>
              <a href="#selector">AI 選豆</a>
              <a href="#visit">來店資訊</a>
            </nav>
            <Link href="/bean-match" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800">
              開始選豆
              <ArrowRight className="h-4 w-4" />
            </Link>
          </header>

          <div className="grid gap-8 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-20 lg:pt-14">
            <div className="space-y-7">
              <Badge variant="outline" className="border-amber-200 bg-white/80 px-4 py-1.5 text-amber-900">
                手機優先的精品咖啡品牌官網
              </Badge>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                  把專業選豆，
                  <span className="block text-amber-800">變成顧客也會喜歡的體驗。</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  MyCoffee 不想讓顧客站在櫃台前猶豫太久。我們把店內的專業判斷，整理成清楚、安心、帶有參與感的選豆流程，讓一杯好咖啡更容易被選中。
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/bean-match" className="block">
                  <ShimmerButton className="h-12 w-full px-6 text-sm font-semibold sm:w-auto" background="rgba(123, 74, 36, 1)">
                    30 秒開始 AI 選豆
                  </ShimmerButton>
                </Link>
                <Link
                  href={beanOrderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 bg-white/85 px-6 text-sm font-medium text-stone-900 transition hover:bg-white"
                >
                  查看線上菜單
                </Link>
              </div>

              <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
                <StatCard icon={<Sparkles className="h-4 w-4" />} label="推薦方式" value="3 題完成配豆" />
                <StatCard icon={<Coffee className="h-4 w-4" />} label="現有豆單" value="已接 iCHEF 品項" />
                <StatCard icon={<Timer className="h-4 w-4" />} label="現場體驗" value="手機操作更順" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <Card className="relative overflow-hidden border border-white/60 bg-white/80 shadow-[0_36px_120px_-55px_rgba(38,23,8,0.55)] backdrop-blur sm:row-span-2">
                <BorderBeam size={160} duration={12} colorFrom="#f7b267" colorTo="#7b4a24" />
                <div className="relative aspect-[4/5]">
                  <Image src="/images/store-03.jpg" alt="買咖啡店內環境實拍" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 36vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                    <p className="text-sm text-amber-200">中壢中央東路 52 號</p>
                    <h2 className="mt-3 text-3xl font-semibold">暖色精品，留給每一個想慢下來的人</h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-stone-200">
                      不是做很吵的 AI 網站，而是把品牌、空間、專業與點餐體驗串成同一件事。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border border-white/60 bg-white/75 shadow-[0_22px_70px_-50px_rgba(0,0,0,0.65)]">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/ichef-real-01.jpg" alt="買咖啡實拍素材" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 20vw" />
                </div>
              </Card>

              <Card className="overflow-hidden border border-white/60 bg-[#2b211a] text-white shadow-[0_22px_70px_-50px_rgba(0,0,0,0.7)]">
                <CardHeader>
                  <Badge className="w-fit bg-amber-300 text-stone-900">品牌節奏</Badge>
                  <CardTitle className="text-2xl">讓客人更快選到， 也更容易記住你</CardTitle>
                  <CardDescription className="text-stone-300">
                    先感受到品牌，再進入工具，最後自然導去訂位或點餐。這是品牌站該有的節奏。
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="brand" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceCards.map((item) => (
            <Card key={item.title} className="border border-white/50 bg-white/80 shadow-[0_20px_60px_-44px_rgba(34,19,2,0.6)] backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-stone-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-stone-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="beans" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="outline" className="border-stone-300 bg-white/70 text-stone-700">推薦豆款</Badge>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">沒有硬塞假圖，直接把選擇講清楚</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-stone-600">
              目前這一版先把重點放在風味與選擇理由。沒有對應的單豆實拍時，我們就用乾淨的資訊卡呈現，不亂用不精準的圖片。
            </p>
          </div>
          <Link href="/bean-match" className="inline-flex items-center gap-2 text-sm font-medium text-amber-900 hover:text-amber-700">
            前往 AI 選豆
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredBeans.map((bean, index) => (
            <Card key={bean.id} className="border border-stone-900/8 bg-white/88 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.9)]">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-900">推薦 0{index + 1}</Badge>
                  <span className="text-sm font-medium text-stone-500">$ {bean.price}</span>
                </div>
                <CardTitle className="text-2xl text-stone-950">{bean.name}</CardTitle>
                <CardDescription className="leading-7 text-stone-600">{bean.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-stone-200 bg-stone-50 text-stone-700">{bean.flavor}</Badge>
                  <Badge variant="outline" className="border-stone-200 bg-stone-50 text-stone-700">{bean.roast}</Badge>
                  <Badge variant="outline" className="border-stone-200 bg-stone-50 text-stone-700">{bean.body}</Badge>
                </div>
                <p className="text-sm leading-7 text-stone-600">{bean.bestFor}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="selector" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Card className="overflow-hidden border border-stone-900/10 bg-stone-950 text-white shadow-[0_30px_100px_-50px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[4/3]">
              <Image src="/images/store-02.jpg" alt="買咖啡空間實拍" fill className="object-cover opacity-55" sizes="(max-width: 1024px) 100vw, 40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/20" />
              <div className="absolute inset-0 p-6 sm:p-8">
                <Badge className="bg-amber-300 text-stone-900">AI 選豆不是炫技，是成交工具</Badge>
                <h2 className="mt-4 text-3xl font-semibold">把選豆流程變成顧客會願意完成的 3 個步驟</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-stone-200 sm:text-base">
                  味道、口感、酸值偏好。先讓客人做出簡單選擇，再用你的專業做推薦，這樣工具才有商業價值。
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="主 CTA 很清楚" copy="首頁第一屏只做一件事：導去 AI 選豆或線上菜單，不讓人迷路。" icon={<Sparkles className="h-5 w-5" />} />
            <FeatureCard title="流程可在手機完成" copy="大按鈕、單欄問答、少干擾，現場客人拿手機就能選。" icon={<Coffee className="h-5 w-5" />} />
            <FeatureCard title="資訊層級更乾淨" copy="品牌、推薦豆款、AI 選豆、來店資訊分段清楚，避免首頁變得雜亂。" icon={<ArrowRight className="h-5 w-5" />} />
            <FeatureCard title="圖片只放對的位置" copy="空間圖用來營造品牌，產品圖用來補生活感，不再把不對的圖硬塞進豆卡。" icon={<Timer className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border border-white/50 bg-white/82 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.65)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <Image src="/images/dessert-afternoon.png" alt="甜點與咖啡的午後氛圍" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <Badge variant="outline" className="w-fit border-stone-300 bg-stone-50 text-stone-700">來店資訊</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-stone-950">從一杯好咖啡開始，也可以直接安排今天的停留</h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">
                品牌站最後一段不只放聯絡資訊，也要收住整體情緒：一杯咖啡、一塊甜點、舒服的停留，最後自然導到訂位與點餐。
              </p>
              <div className="mt-6 space-y-4 text-stone-600">
                <p className="flex items-start gap-3 leading-7"><MapPin className="mt-1 h-4 w-4 shrink-0 text-amber-800" />桃園市中壢區中央東路 52 號</p>
                <p className="leading-7">平日 09:00-18:00｜假日 12:00-18:00</p>
                <p className="leading-7">公開聯絡電話：03 422 6209</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={beanReserveLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-stone-900 px-6 text-sm font-medium text-white transition hover:bg-stone-800">
                  立即訂位
                </Link>
                <Link href="/bean-match" className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 px-6 text-sm font-medium text-stone-900 transition hover:bg-stone-50">
                  先做 AI 選豆
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/72 px-4 py-4 shadow-[0_18px_40px_-35px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="flex items-center gap-2 text-amber-800">
        {icon}
        <span className="text-xs font-medium uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="mt-2 text-base font-semibold text-stone-900">{value}</p>
    </div>
  )
}

function FeatureCard({ title, copy, icon }: { title: string; copy: string; icon: React.ReactNode }) {
  return (
    <Card className="border border-white/50 bg-white/82 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)]">
      <CardHeader>
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-900">{icon}</div>
        <CardTitle className="text-xl text-stone-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-stone-600">{copy}</p>
      </CardContent>
    </Card>
  )
}
