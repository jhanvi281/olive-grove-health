import { Star, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "General Physician",
      experience: "12 years",
      rating: 4.9,
      reviews: 238,
      available: true,
      price: 45,
      tags: ["Family Medicine", "Pediatrics"],
      initials: "SM",
    },
    {
      name: "Dr. James Chen",
      specialty: "Cardiologist",
      experience: "15 years",
      rating: 4.8,
      reviews: 184,
      available: true,
      price: 75,
      tags: ["Heart Health", "Prevention"],
      initials: "JC",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatologist",
      experience: "8 years",
      rating: 4.9,
      reviews: 312,
      available: false,
      price: 60,
      tags: ["Skin Care", "Cosmetic"],
      initials: "ER",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Mental Health",
      experience: "10 years",
      rating: 5.0,
      reviews: 156,
      available: true,
      price: 65,
      tags: ["Therapy", "Anxiety"],
      initials: "MB",
    },
  ];

  return (
    <section id="doctors" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Expert Care
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient">Doctors</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Connect with highly qualified, verified medical professionals ready to help you feel your best.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="relative h-32 bg-gradient-to-br from-primary to-olive-light p-6">
                {/* Availability Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.available 
                    ? "bg-green-500/20 text-green-100" 
                    : "bg-red-500/20 text-red-100"
                }`}>
                  {doctor.available ? "Available Now" : "Busy"}
                </div>

                {/* Avatar */}
                <div className="absolute -bottom-8 left-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-card shadow-elevated flex items-center justify-center text-2xl font-bold text-primary border-4 border-card">
                      {doctor.initials}
                    </div>
                    {doctor.available && (
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-card animate-pulse" />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-12 p-6">
                <h3 className="font-heading text-lg font-semibold text-card-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{doctor.specialty}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(doctor.rating)
                            ? "fill-destructive text-destructive"
                            : "text-border"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{doctor.rating}</span>
                  <span className="text-sm text-muted-foreground">({doctor.reviews})</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Experience */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {doctor.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {doctor.reviews} reviews
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-primary">${doctor.price}</span>
                    <span className="text-sm text-muted-foreground">/session</span>
                  </div>
                  <Button 
                    variant={doctor.available ? "default" : "secondary"} 
                    size="sm"
                    disabled={!doctor.available}
                  >
                    {doctor.available ? "Book Now" : "Notify Me"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Doctors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
