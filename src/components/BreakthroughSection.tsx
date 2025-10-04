import { Brain, Wrench, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "No Experience Needed",
    description: "We've built dealerships for accountants, teachers, and tech workers. Your background doesn't matter—your drive does.",
  },
  {
    icon: Wrench,
    title: "Tools + Coaching Included",
    description: "Get your own CRM, licensing support, and weekly coaching. Everything you need is provided—no hidden fees or upsells.",
  },
  {
    icon: Car,
    title: "Real Inventory from Day One",
    description: "Access our trusted supplier network immediately. Start listing and selling cars before you even have a physical lot.",
  },
];

export function BreakthroughSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            A New Era for <span className="gradient-text">Auto Entrepreneurs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The old way was broken. We built something better.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-lift card-glow hover:border-primary/50 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary glow-primary" />
              </div>
              
              <h3 className="mb-3 text-2xl">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
