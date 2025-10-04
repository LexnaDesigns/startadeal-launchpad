import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes this course different?",
    answer: "We provide real-world dealer knowledge, not just theory. You get lifetime mentorship from successful dealers, access to our global community, and insider secrets about auctions and inventory.",
  },
  {
    question: "Do I need experience in the car industry?",
    answer: "No experience is required. Our course is designed for complete beginners and covers everything from licensing to your first sale.",
  },
  {
    question: "Does this work in my location?",
    answer: "Yes. We cover licensing for both Canada and USA, and our auction strategies apply across North America. We'll help you understand your specific market.",
  },
  {
    question: "What kind of support do I get?",
    answer: "You receive 1-on-1 mentorship from experienced dealers, lifetime access to our course updates, and membership in our worldwide dealer community for ongoing help.",
  },
  {
    question: "How long does it take to become a dealer?",
    answer: "Timeline varies by location, but our course shows you exactly how long it takes in your area and how to avoid delays that slow down most applicants.",
  },
  {
    question: "What's included in the course?",
    answer: "Complete licensing guidance, every car auction explained, 2025 industry opportunities, inventory sourcing secrets, networking, and personalized mentorship. Book a call to learn more.",
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
