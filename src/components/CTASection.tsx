import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta-section" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="mb-6">
            Ready to Start Your <span className="gradient-text">Dealership?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            No pressure. No fluff. Just real results.
          </p>
          
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Book a free strategy call and we'll show you exactly how we can help you launch 
            a profitable dealership—even if you've never sold a car before.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              variant="hero" 
              size="xl"
              className="group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request a Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-card/50 border border-border rounded-full px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            <span>100+ dealers launched • Proven system • Zero fluff</span>
          </div>
        </div>
      </div>
    </section>
  );
}
