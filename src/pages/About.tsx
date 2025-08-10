import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";

const instructors = [
  {
    name: "Elena Marchetti",
    specialty: "Ballet & Contemporary",
    experience: "15+ years",
    bio: "Former principal dancer with the National Ballet Company, Elena brings grace and precision to every class.",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Jordan Williams",
    specialty: "Hip-Hop & Street Dance",
    experience: "12+ years",
    bio: "Award-winning choreographer and performer who has worked with top recording artists.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Sofia Rodriguez",
    specialty: "Jazz & Musical Theater",
    experience: "10+ years",
    bio: "Broadway veteran with a passion for storytelling through movement and expression.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  }
];

const achievements = [
  {
    icon: Award,
    title: "Regional Champions",
    description: "Our students have won 50+ regional dance competitions"
  },
  {
    icon: Heart,
    title: "Community Focus",
    description: "Actively supporting local arts programs and charities"
  },
  {
    icon: Users,
    title: "500+ Students",
    description: "A thriving community of dancers of all ages and levels"
  },
  {
    icon: Sparkles,
    title: "Professional Training",
    description: "Many alumni now dance professionally worldwide"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="bg-gradient-gold bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2010, Moon Walker Dance Studio has been a beacon of artistic excellence 
              and creative expression in our community. We believe that dance is not just movement—it's 
              a language that speaks to the soul.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At Moon Walker Dance Studio, we're dedicated to nurturing the artist within every student. 
                  Our mission is to provide exceptional dance education in a supportive environment where 
                  creativity flourishes and confidence grows.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe in the transformative power of dance to build discipline, express emotion, 
                  and create lasting friendships. Whether you're taking your first steps or preparing 
                  for a professional career, we're here to guide your journey.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={achievement.title} className="bg-card border-border">
                    <CardContent className="p-6 text-center">
                      <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Meet Our <span className="bg-gradient-gold bg-clip-text text-transparent">Instructors</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn from passionate professionals who are dedicated to your growth and success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <Card 
                  key={instructor.name}
                  className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {instructor.name}
                    </h3>
                    
                    <div className="text-primary font-medium mb-2">
                      {instructor.specialty}
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-4">
                      {instructor.experience} experience
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {instructor.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in technique, artistry, and personal growth.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Inclusivity</h3>
                <p className="text-muted-foreground">
                  Dance is for everyone. We welcome students of all backgrounds and abilities.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Creativity</h3>
                <p className="text-muted-foreground">
                  We encourage artistic expression and individual voice in every movement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;