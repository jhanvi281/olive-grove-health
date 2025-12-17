import { Button } from "@/components/ui/button";
import { Play, Shield, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient olive-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Trusted by 50,000+ patients
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
              Healing Connections in the{" "}
              <span className="relative">
                Olive Grove
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Connect with verified doctors from the comfort of your home. Experience healthcare that feels like walking through a peaceful olive grove.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button variant="accent" size="xl" className="group">
                Book Consultation Now
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Star className="w-5 h-5 text-destructive" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Doctor Cards */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Main Doctor Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-card rounded-2xl shadow-elevated p-6 animate-scale-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-olive-light flex items-center justify-center text-primary-foreground text-xl font-bold">
                    DR
                  </div>
                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-card-foreground">Dr. Sarah Olive</h4>
                  <p className="text-sm text-muted-foreground">General Physician</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-destructive text-destructive" />
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9 (238)</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">Family Medicine</span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">Pediatrics</span>
              </div>
              <Button variant="hero" className="w-full">
                Book Now - $45
              </Button>
            </div>

            {/* Floating Chat Bubble 1 */}
            <div className="absolute top-10 left-0 bg-card rounded-2xl shadow-card p-4 max-w-[200px] float animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-bold">
                  JK
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Just connected</p>
                </div>
              </div>
              <p className="text-sm text-card-foreground">"Amazing experience! Got my prescription in minutes."</p>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-10 right-0 bg-card rounded-2xl shadow-card p-4 float-delayed animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">12</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Doctors Online</p>
                  <p className="text-sm font-semibold text-card-foreground">Ready to help you</p>
                </div>
              </div>
            </div>

            {/* Video Call Preview */}
            <div className="absolute top-20 right-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-olive-light shadow-elevated flex items-center justify-center animate-bounce-gentle">
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/20 backdrop-blur flex items-center justify-center">
                <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
