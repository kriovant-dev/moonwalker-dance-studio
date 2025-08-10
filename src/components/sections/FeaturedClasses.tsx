import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import balletImage from "@/assets/ballet-class.jpg";
import hiphopImage from "@/assets/hiphop-class.jpg";
import contemporaryImage from "@/assets/contemporary-class.jpg";

const classes = [
  {
    name: "Classical Ballet",
    description: "Develop grace, technique, and artistry through the timeless beauty of classical ballet.",
    image: balletImage,
    duration: "60 min",
    level: "All Levels",
    price: "$35",
    highlights: ["Barre Work", "Center Floor", "Pointe Preparation"]
  },
  {
    name: "Hip-Hop Fusion",
    description: "Express yourself with high-energy moves blending street dance with contemporary styles.",
    image: hiphopImage,
    duration: "45 min",
    level: "Beginner+",
    price: "$30",
    highlights: ["Urban Choreography", "Breaking", "Freestyle"]
  },
  {
    name: "Contemporary",
    description: "Explore emotional storytelling through fluid movements and creative expression.",
    image: contemporaryImage,
    duration: "55 min",
    level: "Intermediate",
    price: "$40",
    highlights: ["Floor Work", "Improvisation", "Lyrical Movement"]
  }
];

const FeaturedClasses = () => {
  return (
    <section className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-gold bg-clip-text text-transparent">Classes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular dance styles and find the perfect class for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card 
              key={classItem.name} 
              className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {classItem.price}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {classItem.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {classItem.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {classItem.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {classItem.level}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-primary" />
                    4.9
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {classItem.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full group/btn relative overflow-hidden"
                  variant="outline"
                >
                  <span className="relative z-10">Book This Class</span>
                  <div className="absolute inset-0 bg-gradient-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Classes
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;