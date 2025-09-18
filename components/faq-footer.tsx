import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Clock } from "lucide-react"

export function FaqFooter() {
  return (
    <footer className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Хайж буй хариултаа олж чадсангүй юу?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
            {`Тодорхойгүй зүйл байвал бидэнтэй холбогдоорой.\nМанай дэмжлэгийн баг танд туслах болно.`}
          </p>
        </div>

        <div className="max-w-md mx-auto mb-16">
          <Card className="text-center border-border shadow-sm hover:shadow-md transition-shadow duration-200">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground mb-2">Имэйл дэмжлэг</CardTitle>
              <CardDescription className="text-base">Имэйлээр чөлөөтэй холбогдоорой</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Даваа-Баасан 09:00-18:00</span>
              </div>
              <p className="text-base font-medium text-foreground">info@kaimon.mn</p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="mailto:info@kaimon.mn">Имэйл илгээх</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-border pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="https://kaimon.mn/#/homepage">Нүүр хуудас</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="https://kaimon.mn/#/user-manual">Хэрэглэх заавар</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="https://kaimon.mn/#/term-of-use">Үйлчилгээний нөхцөл</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="https://kaimon.mn/#/prohibited-items">Хориотой бараа</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
                <a href="https://kaimon.mn/#/size-and-price">Хэмжээ ба үнэ</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 Kaimon. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
