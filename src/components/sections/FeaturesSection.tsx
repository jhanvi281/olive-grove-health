import { Video, BadgeCheck, FileText, Brain } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Instant Video Consult",
      description: "Connect face-to-face with doctors instantly through secure HD video calls. No waiting rooms, no travel time.",
      color: "primary",
    },
    {
      icon: BadgeCheck,
      title: "Verified Doctors Only",
      description: "Every doctor is thoroughly verified with credential checks. Your health is in trusted hands.",
      color: "accent",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive legally valid digital prescriptions directly to your device. Easy to share with any pharmacy.",
      color: "secondary",
    },
    {
      icon: Brain,
      title: "24/7 AI Symptom Check",
      description: "Our AI assistant helps you understand symptoms and guides you to the right specialist.",
      color: "earth",
    },
  ];

  const colorClasses = {
    primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
    accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
    secondary: "bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground",
    earth: "bg-earth/10 text-earth group-hover:bg-earth group-hover:text-earth-foreground",
  };

  return (
    <section id="features" className="py-24 bg-background relative">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healthcare Made <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Experience the future of healthcare with our comprehensive platform designed around your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Patients Served" },
            { number: "500+", label: "Verified Doctors" },
            { number: "4.9", label: "Average Rating" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
