"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { beanOrderLink, beanReserveLink, beans, type Bean } from "@/data/beans"

const flavorOptions = ["果香", "花香", "堅果", "巧克力"] as const
const bodyOptions = ["清爽", "中等", "濃厚"] as const
const acidOptions = ["不怕酸", "一點點", "很怕酸"] as const

type Flavor = (typeof flavorOptions)[number]
type Body = (typeof bodyOptions)[number]
type Acid = (typeof acidOptions)[number]

const acidToRoast: Record<Acid, Bean["roast"]> = {
  不怕酸: "淺焙",
  一點點: "中焙",
  很怕酸: "深焙",
}

const acidCopy: Record<Acid, string> = {
  不怕酸: "可以接受明亮酸值，先看淺焙花果香系。",
  一點點: "想保留香氣也要有平衡感，中焙通常更舒服。",
  很怕酸: "先避開太亮的酸值，往堅果、巧克力與中焙方向走。",
}

function scoreBean(bean: Bean, flavor: Flavor | null, body: Body | null, acid: Acid | null) {
  let score = 0

  if (flavor && bean.flavor === flavor) score += 5
  if (body && bean.body === body) score += 4

  if (acid) {
    const targetRoast = acidToRoast[acid]
    if (bean.roast === targetRoast) score += 4
    if (acid === "不怕酸" && (bean.acidity === "高" || bean.acidity === "中高")) score += 2
    if (acid === "一點點" && bean.roast === "中焙") score += 2
    if (acid === "很怕酸" && (bean.acidity === "低" || bean.acidity === "低中")) score += 3
  }

  if (bean.featured) score += 1
  return score
}

export function BeanMatchExperience() {
  const [flavor, setFlavor] = useState<Flavor | null>(null)
  const [body, setBody] = useState<Body | null>(null)
  const [acid, setAcid] = useState<Acid | null>(null)

  const results = useMemo(() => {
    return [...beans]
      .map((bean) => ({ bean, score: scoreBean(bean, flavor, body, acid) }))
      .sort((a, b) => b.score - a.score || a.bean.price - b.bean.price)
  }, [flavor, body, acid])

  const topResults = results.slice(0, 3)
  const lead = topResults[0]?.bean
  const ready = Boolean(flavor && body && acid)

  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <Card className="relative overflow-hidden border border-white/60 bg-white/92 shadow-[0_30px_90px_-45px_rgba(32,22,10,0.45)]">
        <BorderBeam size={160} duration={10} colorFrom="#f7b267" colorTo="#7c5c45" />
        <CardHeader className="space-y-3">
          <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-900">
            3 個問題，30 秒完成
          </Badge>
          <CardTitle className="text-2xl text-stone-900 sm:text-3xl">像店員在旁邊引導你一樣，慢慢縮小選擇</CardTitle>
          <CardDescription className="text-base leading-7 text-stone-600">
            先決定主風味，再補口感和酸值偏好。問題不多，答案也都很直覺，手機上操作會特別順。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <QuestionGroup
            title="1. 你今天想喝什麼味道？"
            hint="這一題會先決定你偏向花香、果香，還是更穩定的堅果與巧克力系。"
            options={flavorOptions}
            value={flavor}
            onChange={(value) => setFlavor(value as Flavor)}
            emojiMap={{ 果香: "🍓", 花香: "🌸", 堅果: "🌰", 巧克力: "🍫" }}
          />

          <Separator className="bg-stone-200" />

          <QuestionGroup
            title="2. 你喜歡什麼口感？"
            hint="從像茶一樣清爽，到更有厚度、比較適合奶感或濃郁風味。"
            options={bodyOptions}
            value={body}
            onChange={(value) => setBody(value as Body)}
            emojiMap={{ 清爽: "🍃", 中等: "⚖️", 濃厚: "☕" }}
          />

          <Separator className="bg-stone-200" />

          <QuestionGroup
            title="3. 你怕酸嗎？"
            hint="這一題不在測你專不專業，只是幫你避開不喜歡的焙度方向。"
            options={acidOptions}
            value={acid}
            onChange={(value) => setAcid(value as Acid)}
            emojiMap={{ 不怕酸: "✨", 一點點: "🙂", 很怕酸: "🛟" }}
          />
        </CardContent>
      </Card>

      <Card className="border border-stone-900/10 bg-stone-950 text-stone-50 shadow-[0_30px_90px_-45px_rgba(0,0,0,0.82)] lg:sticky lg:top-6">
        <CardHeader className="space-y-4">
          <Badge className="bg-amber-300 text-stone-900">推薦摘要</Badge>
          <CardTitle className="text-2xl sm:text-3xl">{ready ? `今天最適合你的是 ${lead?.name ?? "這杯"}` : "先回答 3 個問題，我幫你把選擇變少"}</CardTitle>
          <CardDescription className="text-stone-300">
            {ready && acid ? acidCopy[acid] : "你回答完後，右邊會出現 Top 3 推薦、推薦理由，以及可以直接去點餐的入口。"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <SummaryPill label="風味" value={flavor ?? "待選擇"} />
            <SummaryPill label="口感" value={body ?? "待選擇"} />
            <SummaryPill label="酸值偏好" value={acid ?? "待選擇"} />
          </div>

          {lead ? (
            <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-amber-200">今日首選</p>
                  <h3 className="mt-2 text-3xl font-semibold">{lead.name}</h3>
                </div>
                <Badge variant="outline" className="border-white/20 bg-white/10 text-white">
                  $ {lead.price}
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-200">{lead.description}</p>
              <p className="mt-3 text-sm leading-7 text-stone-300">適合你：{lead.bestFor}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {lead.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="grid gap-3">
            {topResults.map(({ bean, score }, index) => (
              <div key={bean.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-stone-300">Top {index + 1}</p>
                    <h4 className="text-lg font-semibold">{bean.name}</h4>
                  </div>
                  <Badge variant="outline" className="border-white/20 bg-white/10 text-white">
                    匹配度 {score}
                  </Badge>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-stone-200">
                  <span className="rounded-full bg-white/10 px-3 py-1">{bean.flavor}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{bean.roast}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{bean.body}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">$ {bean.price}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-300">{bean.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-stone-300">
            <p className="text-amber-200">店內建議話術</p>
            <p className="mt-2">「你先跟我說喜歡什麼味道、想要清爽還是厚一點，我用 AI 幫你配一支最適合今天的豆子。」</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={beanOrderLink} target="_blank" rel="noopener noreferrer" className="block flex-1">
              <ShimmerButton className="h-12 w-full text-sm font-semibold" background="rgba(214, 143, 63, 1)">
                直接去 iCHEF 點餐
              </ShimmerButton>
            </Link>
            <Link
              href={beanReserveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              先預約座位
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function QuestionGroup({
  title,
  hint,
  options,
  value,
  onChange,
  emojiMap,
}: {
  title: string
  hint: string
  options: readonly string[]
  value: string | null
  onChange: (value: string) => void
  emojiMap: Record<string, string>
}) {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-stone-500">{hint}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const active = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`min-h-14 rounded-2xl border px-4 py-3 text-left transition ${
                active
                  ? "border-amber-400 bg-amber-50 text-stone-900 shadow-[0_12px_40px_-24px_rgba(196,118,23,0.8)]"
                  : "border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50"
              }`}
            >
              <span className="flex items-center gap-3 text-sm font-medium sm:text-base">
                <span className="text-lg">{emojiMap[option]}</span>
                {option}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

function SummaryPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
      <span className="text-stone-400">{label}：</span>
      <span className="text-white">{value}</span>
    </div>
  )
}
