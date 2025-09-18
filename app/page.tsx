import { FaqHeader } from "@/components/faq-header"
import { FaqList } from "@/components/faq-list"
import { FaqFooter } from "@/components/faq-footer"
import { FloatingChatbot } from "@/components/floating-chatbot"

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <FaqHeader />
      <main>
        <FaqList />
      </main>
      <FaqFooter />
      <FloatingChatbot />
    </div>
  )
}
