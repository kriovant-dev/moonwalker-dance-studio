import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, Star } from "lucide-react";

const danceStyles = [
  {
    name: "Classical Ballet",
    description: "Build strength, flexibility, and grace through traditional ballet technique. Perfect foundation for all dance styles.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ages: "5+ years",
    duration: "60 min",
    price: "$35",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    features: ["Barre Work", "Center Floor", "Pointe Preparation", "Performance Opportunities"]
  },
  {
    name: "Hip-Hop Fusion",
    description: "High-energy classes combining street dance, breaking, and contemporary urban styles with creative choreography.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ages: "8+ years",
    duration: "45 min",
    price: "$30",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: ["Urban Choreography", "Breaking Basics", "Freestyle Sessions", "Battle Preparation"]
  },
  {
    name: "Contemporary",
    description: "Express emotions through fluid movements combining ballet technique with modern dance freedom and creativity.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ages: "10+ years",
    duration: "55 min",
    price: "$40",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    features: ["Floor Work", "Improvisation", "Lyrical Movement", "Emotional Expression"]
  },
  {
    name: "Jazz Dance",
    description: "Energetic and fun dance style featuring sharp movements, leaps, and turns with Broadway and commercial influences.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ages: "6+ years",
    duration: "50 min",
    price: "$32",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
    features: ["Broadway Style", "Commercial Jazz", "Musical Theater", "Performance Skills"]
  },
  {
    name: "Latin Salsa",
    description: "Learn the passionate rhythms of Latin dance including salsa, bachata, and merengue in a social setting.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    ages: "16+ years",
    duration: "55 min",
    price: "$28",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    features: ["Partner Dancing", "Social Dancing", "Cultural Context", "Live Music Sessions"]
  },
  {
    name: "Lyrical Dance",
    description: "Combine ballet technique with emotional storytelling through music, creating beautiful and expressive performances.",
    levels: ["Intermediate", "Advanced"],
    ages: "12+ years",
    duration: "50 min",
    price: "$38",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    features: ["Musical Interpretation", "Emotional Expression", "Storytelling", "Performance Preparation"]
  }
];

const Classes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="bg-gradient-gold bg-clip-text text-transparent">Classes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover your passion with our diverse range of dance styles. From classical ballet to contemporary fusion, 
              we offer something for every dancer at every level.
            </p>
            <Button size="lg" className="group">
              Book Your Trial Class
              <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {danceStyles.map((style, index) => (
                <Card 
                  key={style.name}
                  className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.name}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {style.price}
                      </div>
                    </div>

                    <CardContent className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                        {style.name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {style.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {style.levels.map((level) => (
                          <Badge key={level} variant="secondary">
                            {level}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {style.duration}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          Ages {style.ages}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-2">What You'll Learn:</h4>
                        <div className="flex flex-wrap gap-2">
                          {style.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1" size="sm">
                          Book Class
                        </Button>
                        <Button variant="outline" size="sm">
                          Free Trial
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Start Dancing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community and discover the joy of dance. Book your first class today 
              and take the first step on your dance journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Schedule a Visit
                <Star className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                New Student Special
              </h3>
              <p className="text-muted-foreground mb-4">
                Get your first class free and 20% off your first month when you register for any program.
              </p>
              <p className="text-sm text-muted-foreground">
                *Offer valid for new students only. Cannot be combined with other offers.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Classes;