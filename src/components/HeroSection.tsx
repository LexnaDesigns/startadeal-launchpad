import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-blueprint.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("cta-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-5xl text-center animate-fade-in-up">
          <h1 className="mb-6 leading-tight">
            Discover the Blueprint to Owning a{" "}
            <span className="gradient-text">Profitable Car Dealership</span>
          </h1>
          
          <p className="mx-auto mb-4 max-w-3xl text-xl md:text-2xl text-muted-foreground font-light">
            Ready to Enter the Car Business? This Course Has Everything You Need to Succeed!
          </p>
          
          <p className="mb-10 text-sm text-muted-foreground/80 font-medium tracking-wide">
            Join dealers worldwide who have mastered the industry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              MAKE ME A DEALER
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="herOutline" 
              size="xl"
              onClick={scrollToContact}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-8 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="h-2 w-1 bg-primary rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}
