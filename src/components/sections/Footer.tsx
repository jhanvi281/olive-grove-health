import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { name: "Video Consultation", href: "#" },
      { name: "AI Symptom Checker", href: "#" },
      { name: "Digital Prescriptions", href: "#" },
      { name: "Health Records", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Doctors", href: "#doctors" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-soft">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Medi<span className="text-primary">Connect</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Healing connections in the olive grove. Experience healthcare that brings you peace of mind from the comfort of your home.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@mediconnect.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@mediconnect.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MediConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
