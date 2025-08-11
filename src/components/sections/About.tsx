import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Heart, Globe, Award } from "lucide-react";
import quranStudyImage from "@/assets/quran-study.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-islamic-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-islamic-gold text-primary">About Our Academy</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Empowering Quranic Education Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Umy Majid Academy, we believe that every Muslim deserves access to quality Quranic education. 
              Our mission is to make the sacred teachings of the Quran accessible to learners across the globe 
              through innovative online learning platforms.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={quranStudyImage} 
                alt="Quran Study" 
                className="rounded-2xl shadow-islamic w-full h-auto"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Our Vision & Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We envision a world where every Muslim can access authentic Quranic education regardless of 
                their geographical location. Our dedicated team of qualified scholars and teachers work 
                tirelessly to provide personalized learning experiences that cater to students of all ages and levels.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-islamic-emerald mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Authentic Teaching</h4>
                    <p className="text-muted-foreground">Traditional methodology combined with modern technology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-islamic-emerald mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Qualified Instructors</h4>
                    <p className="text-muted-foreground">Certified teachers with years of experience in Quranic studies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-islamic-emerald mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Flexible Schedule</h4>
                    <p className="text-muted-foreground">Learn at your own pace with 24/7 access to resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-islamic hover:shadow-gold transition-all duration-300">
              <CardContent className="p-0">
                <Heart className="h-12 w-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Compassionate Learning</h3>
                <p className="text-muted-foreground">
                  We create a nurturing environment where students feel supported in their spiritual journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-islamic hover:shadow-gold transition-all duration-300">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Global Community</h3>
                <p className="text-muted-foreground">
                  Connect with fellow Muslims from around the world in our inclusive learning community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 shadow-islamic hover:shadow-gold transition-all duration-300">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-islamic-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Excellence in Education</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in Quranic education with certified completion programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};