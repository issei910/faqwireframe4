import { Button } from "@/components/ui/button"

export function FaqHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-base">FAQ</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Тусламжийн төв</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-base" asChild>
              <a href="https://kaimon.mn/#/homepage">Нүүр хуудас</a>
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground text-base" asChild>
              <a href="mailto:info@kaimon.mn">Холбоо барих</a>
            </Button>
          </nav>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Түгээмэл асуултууд</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Таны хайж буй мэдээлэл энд байна.
            <br />
            Тодорхойгүй зүйл байвал бидэнтэй чөлөөтэй холбоо барина уу.
          </p>
        </div>
      </div>
    </header>
  )
}
