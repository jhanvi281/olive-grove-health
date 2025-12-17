import { Shield, Lock, Award, CheckCircle, Quote } from "lucide-react";

const TrustSection = () => {
  const trustBadges = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health data is protected by industry-leading security standards",
    },
    {
      icon: Lock,
      title: "End-to-End Encrypted",
      description: "All communications are secured with military-grade encryption",
    },
    {
      icon: Award,
      title: "Verified Professionals",
      description: "Every doctor undergoes thorough credential verification",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Regular audits ensure consistent quality of care",
    },
  ];

  const testimonials = [
    {
      quote: "MediConnect changed how I approach healthcare. The convenience is unmatched, and the doctors are truly caring professionals.",
      name: "Amanda Peterson",
      role: "Busy Professional",
      rating: 5,
    },
    {
      quote: "As someone with mobility issues, being able to consult doctors from home has been life-changing. The olive-themed interface is so calming!",
      name: "Robert James",
      role: "Retired Teacher",
      rating: 5,
    },
    {
      quote: "Got my prescription in under 15 minutes. The AI symptom checker was surprisingly accurate and saved me so much time.",
      name: "Michelle Torres",
      role: "Mother of Three",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 olive-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Trust & Security
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Health, <span className="text-gradient">Our Priority</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            We take your privacy and security seriously. Here's why thousands trust MediConnect with their healthcare.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center font-heading text-2xl font-semibold text-foreground mb-10">
            What Our Patients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-destructive text-destructive"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-card-foreground font-accent italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-olive-light flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
