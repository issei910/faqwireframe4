import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import faqs from "@/data/faqs"

export function FaqList() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-card border border-border rounded-xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:no-underline py-8 text-lg font-semibold leading-relaxed">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-600 dark:text-blue-400 pb-8 text-base leading-relaxed whitespace-pre-line font-medium">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
