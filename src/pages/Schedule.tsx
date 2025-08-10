
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "Monday",
    classes: [
      { time: "9:00 AM", name: "Ballet Basics", instructor: "Elena Marchetti", level: "Beginner", duration: "60 min", room: "Studio A" },
      { time: "4:00 PM", name: "Kids Hip-Hop", instructor: "Jordan Williams", level: "Kids (8-12)", duration: "45 min", room: "Studio B" },
      { time: "6:00 PM", name: "Contemporary", instructor: "Sofia Rodriguez", level: "Intermediate", duration: "55 min", room: "Studio A" },
      { time: "8:00 PM", name: "Adult Jazz", instructor: "Sofia Rodriguez", level: "All Levels", duration: "50 min", room: "Studio B" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "10:00 AM", name: "Senior Ballet", instructor: "Elena Marchetti", level: "Advanced", duration: "60 min", room: "Studio A" },
      { time: "3:30 PM", name: "Teen Contemporary", instructor: "Sofia Rodriguez", level: "Teen (13-18)", duration: "55 min", room: "Studio B" },
      { time: "5:30 PM", name: "Hip-Hop Fusion", instructor: "Jordan Williams", level: "Intermediate", duration: "45 min", room: "Studio A" },
      { time: "7:30 PM", name: "Latin Salsa", instructor: "Carlos Mendez", level: "Beginner", duration: "55 min", room: "Studio B" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "9:30 AM", name: "Lyrical Dance", instructor: "Elena Marchetti", level: "Intermediate", duration: "50 min", room: "Studio A" },
      { time: "4:00 PM", name: "Kids Ballet", instructor: "Elena Marchetti", level: "Kids (5-10)", duration: "45 min", room: "Studio B" },
      { time: "6:00 PM", name: "Breaking Basics", instructor: "Jordan Williams", level: "Beginner", duration: "45 min", room: "Studio A" },
      { time: "8:00 PM", name: "Contemporary Flow", instructor: "Sofia Rodriguez", level: "Advanced", duration: "55 min", room: "Studio B" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "10:00 AM", name: "Ballet Technique", instructor: "Elena Marchetti", level: "Intermediate", duration: "60 min", room: "Studio A" },
      { time: "3:30 PM", name: "Teen Hip-Hop", instructor: "Jordan Williams", level: "Teen (13-18)", duration: "45 min", room: "Studio B" },
      { time: "5:30 PM", name: "Jazz Funk", instructor: "Sofia Rodriguez", level: "Intermediate", duration: "50 min", room: "Studio A" },
      { time: "7:30 PM", name: "Partner Salsa", instructor: "Carlos Mendez", level: "Intermediate", duration: "55 min", room: "Studio B" }
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "9:00 AM", name: "Pointe Preparation", instructor: "Elena Marchetti", level: "Advanced", duration: "60 min", room: "Studio A" },
      { time: "4:00 PM", name: "Kids Jazz", instructor: "Sofia Rodriguez", level: "Kids (6-11)", duration: "45 min", room: "Studio B" },
      { time: "6:00 PM", name: "Urban Dance", instructor: "Jordan Williams", level: "All Levels", duration: "45 min", room: "Studio A" },
      { time: "8:00 PM", name: "Adult Contemporary", instructor: "Sofia Rodriguez", level: "Beginner", duration: "55 min", room: "Studio B" }
    ]
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:00 AM", name: "Ballet Workshop", instructor: "Elena Marchetti", level: "All Levels", duration: "90 min", room: "Studio A" },
      { time: "11:00 AM", name: "Family Dance", instructor: "Sofia Rodriguez", level: "Family", duration: "45 min", room: "Studio B" },
      { time: "2:00 PM", name: "Hip-Hop Intensive", instructor: "Jordan Williams", level: "Intermediate", duration: "75 min", room: "Studio A" },
      { time: "4:00 PM", name: "Performance Prep", instructor: "All Instructors", level: "Competition Team", duration: "120 min", room: "Both Studios" }
    ]
  },
  {
    day: "Sunday",
    classes: [
      { time: "10:00 AM", name: "Gentle Movement", instructor: "Elena Marchetti", level: "Seniors", duration: "45 min", room: "Studio B" },
      { time: "12:00 PM", name: "Open Rehearsal", instructor: "Various", level: "All Levels", duration: "60 min", room: "Studio A" },
      { time: "2:00 PM", name: "Masterclass", instructor: "Guest Artist", level: "Advanced", duration: "90 min", room: "Studio A" }
    ]
  }
];

const upcomingEvents = [
  {
    date: "March 15",
    title: "Spring Showcase Auditions",
    time: "6:00 PM - 8:00 PM",
    description: "Open auditions for our annual Spring Showcase performance."
  },
  {
    date: "March 22",
    title: "Guest Workshop: Broadway Jazz",
    time: "2:00 PM - 4:00 PM",
    description: "Special workshop with Broadway performer Lisa Chen."
  },
  {
    date: "April 5",
    title: "Student Recital",
    time: "7:00 PM",
    description: "Semi-annual student performance showcasing all dance styles."
  }
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Class <span className="bg-gradient-gold bg-clip-text text-transparent">Schedule</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Find the perfect class time that fits your schedule. We offer classes throughout the week 
              for all ages and skill levels.
            </p>
            <Button size="lg" className="group">
              Register for Classes
              <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Weekly Schedule
              </h2>
              <p className="text-xl text-muted-foreground">
                All classes run weekly. Drop-in classes welcome!
              </p>
            </div>

            <div className="space-y-8">
              {scheduleData.map((day) => (
                <Card key={day.day} className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      {day.day}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {day.classes.map((classItem, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="font-medium text-foreground">{classItem.time}</span>
                              <Badge variant="outline" className="text-xs">
                                {classItem.duration}
                              </Badge>
                            </div>
                            
                            <h4 className="font-semibold text-foreground mb-1">
                              {classItem.name}
                            </h4>
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{classItem.instructor}</span>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {classItem.level}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {classItem.room}
                              </div>
                            </div>
                          </div>
                          
                          <Button size="sm" variant="outline">
                            Book
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
                Upcoming <span className="bg-gradient-gold bg-clip-text text-transparent">Events</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Special workshops, performances, and studio events
              </p>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-center min-w-[80px]">
                        <div className="font-bold text-lg">{event.date.split(' ')[1]}</div>
                        <div className="text-sm opacity-90">{event.date.split(' ')[0]}</div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                      
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Hours */}
        <section className="py-20 bg-dark-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8">
              Studio Hours
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Weekdays</h3>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-xl font-semibold text-primary">9:00 AM - 10:00 PM</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Saturday</h3>
                  <p className="text-muted-foreground">Weekend Classes</p>
                  <p className="text-xl font-semibold text-primary">8:00 AM - 8:00 PM</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Sunday</h3>
                  <p className="text-muted-foreground">Light Schedule</p>
                  <p className="text-xl font-semibold text-primary">10:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;
