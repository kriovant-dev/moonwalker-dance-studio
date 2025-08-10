import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-gold bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your dance journey? We'd love to hear from you. 
              Reach out with any questions or to schedule your visit.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="interest" className="text-foreground">What classes are you interested in?</Label>
                      <Input 
                        id="interest" 
                        placeholder="Ballet, Hip-Hop, Contemporary..."
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your dance experience and goals..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      Send Message
                      <Mail className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                  Visit Our Studio
                </h2>

                <div className="space-y-8 mb-8">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Dance Avenue<br />
                        Studio City, CA 90210<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-DANCE</p>
                      <p className="text-muted-foreground">(555) 123-3263</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@moonwalkerdance.com</p>
                      <p className="text-muted-foreground">info@moonwalkerdance.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Studio Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                        <p>Saturday: 8:00 AM - 8:00 PM</p>
                        <p>Sunday: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="hover:text-primary hover:border-primary">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:text-primary hover:border-primary">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="sm" className="hover:text-primary hover:border-primary">
                      <Youtube className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Quick Actions */}
                <Card className="mt-8 bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        Schedule a Studio Tour
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Book a Trial Class
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        Download Class Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Find Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Located in the heart of Studio City, we're easily accessible by car or public transit.
              </p>
            </div>

            <Card className="overflow-hidden bg-card border-border">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map would be embedded here<br />
                    123 Dance Avenue, Studio City, CA 90210
                  </p>
                </div>
              </div>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Parking available on-site • Public transit accessible • Wheelchair accessible entrance
              </p>
              <Button variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;