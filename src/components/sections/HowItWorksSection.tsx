import { MessageSquare, Users, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Describe Symptoms",
      description: "Tell us what's bothering you. Our AI-powered system helps you articulate your symptoms accurately.",
      image: "symptom",
    },
    {
      number: "02",
      icon: Users,
      title: "Choose Your Doctor",
      description: "Browse through our verified doctors. Filter by specialty, availability, and ratings to find your perfect match.",
      image: "doctor",
    },
    {
      number: "03",
      icon: Stethoscope,
      title: "Get Treatment",
      description: "Connect via video call, receive diagnosis, and get your digital prescription instantly.",
      image: "treatment",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Getting quality healthcare has never been easier. Just three simple steps to connect with a doctor.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-8 px-4 py-2 bg-primary text-primary-foreground font-heading font-bold text-sm rounded-full shadow-soft">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Mock Interface Preview */}
                  <div className="bg-muted/50 rounded-xl p-4 border border-border">
                    {step.image === "symptom" && (
                      <div className="space-y-3">
                        <div className="h-3 bg-border rounded-full w-3/4" />
                        <div className="h-3 bg-border rounded-full w-1/2" />
                        <div className="flex gap-2 mt-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Headache</span>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Fever</span>
                        </div>
                      </div>
                    )}
                    {step.image === "doctor" && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="h-2.5 bg-border rounded-full w-24 mb-1.5" />
                          <div className="h-2 bg-border rounded-full w-16" />
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                    )}
                    {step.image === "treatment" && (
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-12 bg-primary/20 rounded-lg" />
                        <div className="flex flex-col items-end gap-1.5">
                          <div className="h-2 bg-border rounded-full w-20" />
                          <div className="px-2 py-1 bg-green-500/10 text-green-600 text-xs rounded">Connected</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 w-8 h-8 bg-background border border-border rounded-full items-center justify-center shadow-soft">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
