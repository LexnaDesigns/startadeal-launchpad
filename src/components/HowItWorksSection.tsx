import { Calendar, Map, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "Step 1",
    title: "Book a Discovery Call",
    description: "We'll discuss your goals, location, and timeline. No commitment required—just an honest conversation about what's possible.",
  },
  {
    icon: Map,
    step: "Step 2",
    title: "Custom Launch Map",
    description: "Get your personalized roadmap covering CRM setup, dealer licensing, supplier onboarding, and your first 90 days of sales strategy.",
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "Start Selling",
    description: "We help you launch, market, and close deals. Everything we build is 100% yours to keep and scale as you grow.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            The <span className="gradient-text">Fast-Track</span> Blueprint
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From zero to launch in 90 days or less
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center card-glow">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-background border-2 border-primary rounded-full px-3 py-1 text-xs font-bold">
                    {step.step}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="mb-3 text-3xl">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 mt-32 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Everything we build is 100% yours to keep."
          </p>
        </div>
      </div>
    </section>
  );
}
