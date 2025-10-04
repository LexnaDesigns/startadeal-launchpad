import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Former Tech Sales Rep",
    content: "I went from knowing nothing about cars to closing my first deal in 3 weeks. The CRM and coaching made all the difference.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Small Business Owner",
    content: "The licensing process scared me at first, but their team walked me through every step. Now I have a legal, profitable dealership.",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Former Restaurant Manager",
    content: "Best decision I ever made. I'm making more money working fewer hours, and I actually own my business. No more working for someone else.",
    rating: 5,
  },
];

const stats = [
  { value: "$10M+", label: "Inventory Placed" },
  { value: "98%", label: "Licensing Success" },
  { value: "500+", label: "Units Sold" },
  { value: "100+", label: "Dealers Launched" },
];

export function SocialProofSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="mb-4">
            It's Already <span className="gradient-text">Working</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people. Real results. No fluff.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-lift card-glow animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
