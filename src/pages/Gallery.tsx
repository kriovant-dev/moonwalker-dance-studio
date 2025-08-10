
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Award, Heart } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    title: "Spring Recital 2024",
    category: "Performance",
    description: "Our students showcasing their ballet techniques"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    title: "Hip-Hop Workshop",
    category: "Class",
    description: "High-energy hip-hop session with guest instructor"
  },
  {
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    title: "Contemporary Expression",
    category: "Performance",
    description: "Emotional storytelling through contemporary dance"
  },
  {
    src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
    title: "Jazz Dance Competition",
    category: "Competition",
    description: "Our team at the Regional Dance Championships"
  },
  {
    src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    title: "Lyrical Performance",
    category: "Performance",
    description: "Beautiful lyrical piece from our advanced students"
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    title: "Studio Life",
    category: "Behind the Scenes",
    description: "Daily practice and dedication in our studios"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    title: "Street Dance Battle",
    category: "Event",
    description: "Annual street dance battle event"
  },
  {
    src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    title: "Master Class Series",
    category: "Workshop",
    description: "Special workshop with professional dancer"
  },
  {
    src: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
    title: "Annual Showcase",
    category: "Performance",
    description: "Grand finale of our annual student showcase"
  }
];

const videoGallery = [
  {
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    title: "Spring Recital Highlights",
    duration: "3:24",
    category: "Performance"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    title: "Hip-Hop Class in Action",
    duration: "2:15",
    category: "Class"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
    title: "Contemporary Solo Performance",
    duration: "4:12",
    category: "Performance"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&h=400&fit=crop",
    title: "Behind the Scenes: Rehearsal",
    duration: "5:30",
    category: "Behind the Scenes"
  }
];

const achievements = [
  {
    year: "2024",
    title: "Regional Dance Competition",
    award: "1st Place - Contemporary Division",
    icon: Award
  },
  {
    year: "2023",
    title: "State Championships",
    award: "2nd Place - Hip-Hop Team",
    icon: Award
  },
  {
    year: "2023",
    title: "Community Choice Award",
    award: "Best Dance Studio",
    icon: Heart
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="bg-gradient-gold bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Step into our world of dance through photos and videos showcasing performances, 
              classes, and the vibrant life at Moon Walker Dance Studio.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Photo Gallery
              </h2>
              <p className="text-xl text-muted-foreground">
                Moments captured from our performances, classes, and events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {image.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {image.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {image.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Video Gallery
              </h2>
              <p className="text-xl text-muted-foreground">
                Watch our dancers in action through these performance highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoGallery.map((video, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden bg-card border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {video.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-background/80 backdrop-blur-sm text-foreground">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {video.title}
                    </h3>
                    <Button variant="outline" size="sm" className="w-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Recent <span className="bg-gradient-gold bg-clip-text text-transparent">Achievements</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Celebrating our students' successes and studio milestones
              </p>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-primary font-medium">{achievement.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.award}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our dance community and create your own memorable moments. 
              Your journey starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Join Our Classes
                <Heart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
