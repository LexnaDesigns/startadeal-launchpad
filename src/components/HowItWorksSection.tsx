import { Calendar, Map, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "Step 1",
    title: "Book Your Call",
    description: "Schedule a consultation to discuss your goals and learn how our program can help you enter the car dealership industry.",
  },
  {
    icon: Map,
    step: "Step 2",
    title: "Get Your Blueprint",
    description: "Access our comprehensive course covering licensing, inventory sourcing, auctions, and industry secrets from successful dealers.",
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "Launch & Grow",
    description: "Receive ongoing mentorship, join our dealer network, and build your profitable dealership with lifetime support.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            Your Path to <span className="gradient-text">Dealership Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven system designed for aspiring dealers
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
            "Join dealers worldwide who have mastered the industry"
          </p>
        </div>
      </div>
    </section>
  );
}
