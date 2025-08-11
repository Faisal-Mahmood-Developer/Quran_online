import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-islamic-emerald/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Umy <span className="text-islamic-gold">Majid</span> Academy
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Learn the Holy Quran Online
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Join thousands of students worldwide in mastering Quranic recitation, memorization, and understanding through our comprehensive online programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-islamic-gold text-primary shadow-gold hover:bg-islamic-gold/90 text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">5000+</div>
              <div className="text-white/80">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">50+</div>
              <div className="text-white/80">Qualified Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-islamic-gold mb-2">24/7</div>
              <div className="text-white/80">Learning Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};