import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, CreditCard, Settings, HelpCircle, Shield, RefreshCw } from "lucide-react"

const categories = [
  {
    id: "account",
    title: "アカウント関連",
    description: "ログイン、パスワード、プロフィール設定について",
    icon: User,
    count: 12,
  },
  {
    id: "billing",
    title: "お支払い・請求",
    description: "料金プラン、支払い方法、請求書について",
    icon: CreditCard,
    count: 8,
  },
  {
    id: "technical",
    title: "技術的な問題",
    description: "エラー、バグ、パフォーマンスの問題について",
    icon: Settings,
    count: 15,
  },
  {
    id: "general",
    title: "一般的な質問",
    description: "サービスの使い方、機能について",
    icon: HelpCircle,
    count: 20,
  },
  {
    id: "security",
    title: "セキュリティ",
    description: "プライバシー、データ保護、セキュリティ設定",
    icon: Shield,
    count: 6,
  },
  {
    id: "returns",
    title: "返品・キャンセルについて",
    description: "購入した商品の返品・交換や、配送依頼のキャンセルについて",
    icon: RefreshCw,
    count: 10,
  },
]

export function FaqCategories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">カテゴリから選択</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-card-foreground">{category.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{category.count}件の質問</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
