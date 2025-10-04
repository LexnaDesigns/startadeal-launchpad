import { FileCheck, TrendingUp, Users, Car, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: FileCheck,
    title: "Getting a Dealer License",
    description: "Learn how much money you need, how long it will take, and the most common mistakes applicants make in Canada & USA.",
  },
  {
    icon: TrendingUp,
    title: "Opportunities",
    description: "Understand where the most money is made in the car industry in 2025 and how to capitalize on emerging trends.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Meet other dealers and join our community of Car Dealers worldwide. Get help with anything you need.",
  },
  {
    icon: Car,
    title: "Inventory",
    description: "Every single car auction in Ontario and beyond, including their benefits and profitable secrets explained.",
  },
  {
    icon: UserCheck,
    title: "1-on-1 Mentorship",
    description: "Get personalized support from experts who have already succeeded in the industry. Ongoing lifetime support.",
  },
];

export function BreakthroughSection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            Why This <span className="gradient-text">Course?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the car dealership business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
