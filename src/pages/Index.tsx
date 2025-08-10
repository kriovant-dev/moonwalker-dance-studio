import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import FeaturedClasses from "@/components/sections/FeaturedClasses";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedClasses />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
