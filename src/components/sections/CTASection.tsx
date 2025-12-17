import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient olive-pattern" />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-xl float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Leaf className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Start Your Healing Journey Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Ready to Experience{" "}
            <span className="relative inline-block">
              Healthcare
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full" />
            </span>{" "}
            Differently?
          </h2>

          {/* Subtext */}
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
            Join over 50,000 patients who have discovered the peace of mind that comes with MediConnect. Your first consultation is on us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Button 
              variant="accent" 
              size="xl" 
              className="group text-lg"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="xl"
              className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 hover:border-primary-foreground/50 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: "400ms" }}>
            No credit card required • Free first consultation • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
