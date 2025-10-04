import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a physical lot?",
    answer: "No. Many of our dealers start with online-only sales or operate from home. You can scale to a physical location when you're ready.",
  },
  {
    question: "Can I do this part-time?",
    answer: "Absolutely. While full-time commitment accelerates results, many dealers start part-time and transition once they're profitable.",
  },
  {
    question: "Is it legal in my province/state?",
    answer: "Yes. We help you navigate licensing requirements specific to your location. Our success rate for licensing approval is 98%.",
  },
  {
    question: "Do you help with financing?",
    answer: "Yes. We connect you with financing partners and help you set up relationships with lenders for your customers.",
  },
  {
    question: "What if I've never sold a car?",
    answer: "That's exactly who we built this for. Our system includes sales scripts, pricing strategies, and negotiation training. No experience required.",
  },
  {
    question: "How much does it cost to get started?",
    answer: "Investment varies based on your location and business model. Book a discovery call and we'll create a custom plan with transparent pricing—no hidden fees.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know before getting started
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
