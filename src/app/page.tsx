import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, MapPin, Sparkles, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GridPattern } from "@/components/ui/grid-pattern"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { beanOrderLink, beanReserveLink, beans } from "@/data/beans"

const signatureItems = [
  {
    title: "精品手沖與單品咖啡",
    description: "把花香、果香、堅果與巧克力調性講成人聽得懂的語言，讓選豆變得輕鬆。",
  },
  {
    title: "手作巴斯克與甜點",
    description: "店內甜點是陪咖啡一起被記住的第二個理由，適合下午來坐一下。",
  },
  {
    title: "中壢火車站附近",
    description: "步行可達，適合臨時想找一杯好咖啡，或約人聊天坐一下。",
  },
]

export default function Home() {
  const featuredBeans = beans.filter((bean) => bean.featured).slice(0, 3)

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,244,230,0.85),rgba(247,242,236,0.95)_30%,#f5f1ea_60%,#f1ece4_100%)] text-stone-900">
      <section className="relative overflow-hidden">
        <GridPattern
          width={56}
          height={56}
          className="opacity-30 [mask-image:radial-gradient(circle_at_top,white,transparent_75%)]"
        />
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-[0_20px_60px_-35px_rgba(31,18,4,0.35)] backdrop-blur sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">MC</div>
              <div>
                <p className="text-sm font-semibold">MyCoffee 買咖啡</p>
                <p className="text-xs text-stone-500">中壢精品咖啡 × AI 選豆體驗</p>
              </div>
            </Link>
            <nav className="hidden items-center gap-6 text-sm text-stone-600 md:flex">
              <a href="#brand">品牌感受</a>
              <a href="#signature">招牌推薦</a>
              <a href="#bean-ai">AI 選豆</a>
              <a href="#visit">來店資訊</a>
            </nav>
            <Link href="/bean-match" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800">
              開始選豆
              <ArrowRight className="h-4 w-4" />
            </Link>
          </header>

          <div className="grid gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-24 lg:pt-16">
            <div className="space-y-8">
              <Badge variant="outline" className="border-amber-200 bg-white/80 px-4 py-1.5 text-amber-900">
                精品咖啡店官網 × 手機優先 AI 選豆
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
                  不用很懂咖啡，
                  <span className="block text-amber-800">也能快速找到適合你的那一杯。</span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
                  MyCoffee 把店內的專業選豆流程，整理成一個顧客看得懂、玩得起來的體驗。你可以先感受品牌，再用 3 個問題找到今天最適合你的豆子。
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
                  className="inline-flex h-12 items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 text-sm font-medium text-stone-900 transition hover:bg-white"
                >
                  查看線上菜單
                </Link>
              </div>

              <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
                <StatCard icon={<Sparkles className="h-4 w-4" />} label="專業轉譯" value="3 題就能配豆" />
                <StatCard icon={<Coffee className="h-4 w-4" />} label="現有豆單" value="已接 iCHEF 品項" />
                <StatCard icon={<Timer className="h-4 w-4" />} label="店內體驗" value="手機操作更順" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-amber-200/60 blur-3xl" />
              <Card className="relative overflow-hidden border border-white/50 bg-white/80 shadow-[0_40px_120px_-50px_rgba(44,29,10,0.5)] backdrop-blur">
                <BorderBeam size={180} duration={12} colorFrom="#f7b267" colorTo="#7b4a24" />
                <div className="relative aspect-[4/4.6] overflow-hidden">
                  <Image
                    src="/images/store-04.jpg"
                    alt="買咖啡店內環境"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="text-sm text-amber-200">MyCoffee 買咖啡 · 中壢中央東路 52 號</p>
                    <h2 className="mt-3 text-3xl font-semibold">暖色精品，留給每一個想慢下來的人</h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-stone-200">
                      精品咖啡、甜點、舒服的空間，再加上一套顧客真的用得懂的 AI 選豆流程。
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="brand" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {signatureItems.map((item) => (
            <Card key={item.title} className="border border-white/40 bg-white/75 shadow-[0_20px_60px_-45px_rgba(34,19,2,0.6)] backdrop-blur">
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

      <section id="signature" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="outline" className="border-stone-300 bg-white/70 text-stone-700">店內推薦</Badge>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">先看招牌，再開始選豆</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-stone-600">
              我們把最適合拿來做選豆推薦的 6 支豆整理好了。首頁先讓你感受品牌與風味方向，進入 AI 選豆頁後再幫你快速縮小選擇。
            </p>
          </div>
          <Link href="/bean-match" className="inline-flex items-center gap-2 text-sm font-medium text-amber-900 hover:text-amber-700">
            前往 AI 選豆
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredBeans.map((bean, index) => (
            <Card key={bean.id} className="overflow-hidden border border-stone-900/8 bg-white/85 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.9)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={bean.image} alt={bean.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4">
                  <Badge className="bg-white/90 text-stone-900">Top {index + 1}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3 text-xl">
                  <span>{bean.name}</span>
                  <span className="text-base text-amber-800">$ {bean.price}</span>
                </CardTitle>
                <CardDescription className="leading-7 text-stone-600">{bean.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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

      <section id="bean-ai" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Card className="border border-stone-900/10 bg-stone-950 text-white shadow-[0_30px_100px_-50px_rgba(0,0,0,0.85)]">
            <CardHeader>
              <Badge className="w-fit bg-amber-300 text-stone-900">AI 選豆不是炫技，是成交工具</Badge>
              <CardTitle className="text-3xl">把專業選豆流程，變成顧客看得懂的決策系統</CardTitle>
              <CardDescription className="text-base leading-8 text-stone-300">
                顧客只要回答味道、口感、酸值偏好三件事，系統就能推薦 1 到 3 支最適合的豆子，提升參與感，也降低選擇困難。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-sm leading-7 text-stone-300">
              <div className="grid gap-3 sm:grid-cols-3">
                <StepPill index="01" title="選味道" copy="果香、花香、堅果、巧克力" />
                <StepPill index="02" title="選口感" copy="清爽、平衡、濃厚" />
                <StepPill index="03" title="選酸值" copy="怕不怕酸，對應焙度" />
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-amber-200">商業價值</p>
                <p className="mt-2 text-stone-100">降低顧客猶豫時間、提高互動感、讓員工話術標準化，也讓品牌更容易被記住。</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard title="手機操作更順" copy="整個 AI 選豆頁以單欄大按鈕設計，現場客人拿手機就能快速操作。" icon={<Sparkles className="h-5 w-5" />} />
            <FeatureCard title="直接導到 iCHEF" copy="選完豆可立即去點餐，或先預約座位，不需要再重新找菜單。" icon={<Coffee className="h-5 w-5" />} />
            <FeatureCard title="店員更好開口" copy="員工只要說『我們這邊有 AI 選豆』，就能自然把專業感講出來。" icon={<ArrowRight className="h-5 w-5" />} />
            <FeatureCard title="可持續優化" copy="未來只要替換豆單與圖片，就能繼續擴充成 LINE 選豆或完整 CRM 流程。" icon={<Timer className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border border-white/50 bg-white/80 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.65)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px]">
              <Image src="/images/dessert.png" alt="買咖啡甜點展示" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <Badge variant="outline" className="w-fit border-stone-300 bg-stone-50 text-stone-700">來店資訊</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-stone-950">從一杯好咖啡開始，也可以直接安排今天的停留</h2>
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
    <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-4 shadow-[0_18px_40px_-35px_rgba(0,0,0,0.8)] backdrop-blur">
      <div className="flex items-center gap-2 text-amber-800">{icon}<span className="text-xs font-medium uppercase tracking-[0.2em]">{label}</span></div>
      <p className="mt-2 text-base font-semibold text-stone-900">{value}</p>
    </div>
  )
}

function StepPill({ index, title, copy }: { index: string; title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs tracking-[0.3em] text-amber-200">{index}</p>
      <p className="mt-2 text-base font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-stone-300">{copy}</p>
    </div>
  )
}

function FeatureCard({ title, copy, icon }: { title: string; copy: string; icon: React.ReactNode }) {
  return (
    <Card className="border border-white/50 bg-white/80 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)]">
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
