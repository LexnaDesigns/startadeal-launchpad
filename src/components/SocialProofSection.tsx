import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    role: "Licensed Dealer, Ontario",
    content: "This course gave me the exact roadmap I needed. The auction secrets alone paid for the entire program ten times over.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "New Dealer, USA",
    content: "The licensing guidance was invaluable. I avoided costly mistakes and got approved faster than I ever thought possible.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Independent Dealer",
    content: "The networking and mentorship are worth their weight in gold. Having experienced dealers to call on has been game-changing.",
    rating: 5,
  },
];

const stats = [
  { value: "1000+", label: "Students Enrolled" },
  { value: "95%", label: "Success Rate" },
  { value: "24/7", label: "Community Support" },
  { value: "Lifetime", label: "Mentorship Access" },
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
