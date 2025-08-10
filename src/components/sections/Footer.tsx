import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-elegant border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Studio Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-3xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Moon Walker
                </div>
                <div className="text-sm text-muted-foreground font-light">
                  Dance Studio
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                Where passion meets artistry. Join our community of dancers and discover 
                the transformative power of movement in a supportive, professional environment.
              </p>

              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {["About Us", "Classes", "Schedule", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      123 Dance Avenue<br />
                      Studio City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">(555) 123-DANCE</p>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">hello@moonwalkerdance.com</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Studio Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 9AM - 10PM<br />
                  Sat-Sun: 8AM - 8PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Moon Walker Dance Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;