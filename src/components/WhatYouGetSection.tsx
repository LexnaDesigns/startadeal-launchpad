import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Custom CRM System (fully configured for your dealership)",
  "Startup Coaching & Weekly Check-ins",
  "Dealer Licensing Help (we handle the paperwork headaches)",
  "Direct Supplier Access (inventory from day one)",
  "Marketing Templates & Sales Scripts",
  "Ongoing Support (we're with you for the long haul)",
  "Legal & Compliance Guidance",
  "Financing Partner Connections",
];

export function WhatYouGetSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">
              What You <span className="gradient-text">Actually Get</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Not a course. Not a webinar. A complete dealership infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-border hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border-2 border-primary/30 text-center card-glow">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Everything is Built for You
            </p>
            <p className="text-muted-foreground">
              We don't just teach you—we build it with you. And it's 100% yours to keep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
