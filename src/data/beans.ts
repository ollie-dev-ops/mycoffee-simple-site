export type Bean = {
  id: string
  name: string
  category: "single-origin"
  price: number
  flavor: "果香" | "花香" | "堅果" | "巧克力"
  roast: "淺焙" | "中焙" | "深焙"
  body: "清爽" | "中等" | "濃厚"
  acidity: "高" | "中高" | "低中" | "低"
  tags: string[]
  description: string
  ichefCategory: string
  available: boolean
  featured: boolean
  image: string
  bestFor: string
}

export const beans: Bean[] = [
  {
    id: "yirgacheffe",
    name: "耶家雪菲",
    category: "single-origin",
    price: 70,
    flavor: "花香",
    roast: "淺焙",
    body: "清爽",
    acidity: "高",
    tags: ["茉莉", "柑橘", "茶感", "乾淨"],
    description: "花香明亮、口感輕盈，適合喜歡乾淨細緻風味的人。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/store-01.jpg",
    bestFor: "第一次想喝精品手沖、喜歡香氣細緻與乾淨尾韻的人",
  },
  {
    id: "naranjo",
    name: "納蘭荷",
    category: "single-origin",
    price: 70,
    flavor: "果香",
    roast: "淺焙",
    body: "清爽",
    acidity: "高",
    tags: ["莓果", "熱帶水果", "明亮", "甜感"],
    description: "果香奔放、酸甜活潑，適合第一次想喝有記憶點精品咖啡的人。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/store-04.jpg",
    bestFor: "喜歡水果香、想要有記憶點的清爽系咖啡愛好者",
  },
  {
    id: "gesha-natural",
    name: "日曬藝伎",
    category: "single-origin",
    price: 90,
    flavor: "花香",
    roast: "淺焙",
    body: "清爽",
    acidity: "高",
    tags: ["花香", "熱帶果汁感", "尾韻細緻", "層次感"],
    description: "香氣細緻、風味層次漂亮，適合想體驗精品咖啡代表作的人。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/store-04.jpg",
    bestFor: "想喝到精品咖啡代表作、重視香氣與層次感的人",
  },
  {
    id: "sidama-natural",
    name: "日曬希達馬",
    category: "single-origin",
    price: 90,
    flavor: "果香",
    roast: "淺焙",
    body: "中等",
    acidity: "中高",
    tags: ["莓果甜感", "果汁感", "平衡", "香甜"],
    description: "保有果香與甜感，同時比極輕盈款更有一些厚度。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/store-01.jpg",
    bestFor: "喜歡果香但又想多一點厚度與甜感的人",
  },
  {
    id: "honey-estate",
    name: "蜜處裡莊園",
    category: "single-origin",
    price: 120,
    flavor: "巧克力",
    roast: "中焙",
    body: "中等",
    acidity: "低中",
    tags: ["蜂蜜甜感", "可可", "厚度適中", "滑順"],
    description: "甜感飽滿、口感滑順，適合想要平衡順口、又不想太酸的人。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/dessert.png",
    bestFor: "平常愛喝順口咖啡、想從安全好喝開始的人",
  },
  {
    id: "green-hill",
    name: "綠山",
    category: "single-origin",
    price: 120,
    flavor: "堅果",
    roast: "中焙",
    body: "中等",
    acidity: "低",
    tags: ["堅果", "焦糖", "可可尾韻", "穩定"],
    description: "堅果可可調性明確、接受度高，適合平常就愛喝順口咖啡的人。",
    ichefCategory: "手烘咖啡",
    available: true,
    featured: true,
    image: "/images/store-01.jpg",
    bestFor: "怕酸、偏好穩定順口與厚實尾韻的人",
  },
]

export const beanOrderLink = "https://shop.ichefpos.com/store/139TPDhT/ordering"
export const beanReserveLink = "https://shop.ichefpos.com/store/139TPDhT/reserve"
