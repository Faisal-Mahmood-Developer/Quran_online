import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Calendar, 
  Award, 
  Shield, 
  Headphones, 
  Download,
  Clock,
  Globe
} from "lucide-react";
import onlineLearningImage from "@/assets/online-learning.jpg";

export const Features = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Live Interactive Classes",
      description: "Join real-time sessions with qualified teachers and fellow students from around the world."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Choose class times that work for your schedule with options available 24/7."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Programs",
      description: "Receive official certificates upon completion of our structured learning programs."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe Learning Environment",
      description: "Secure platform ensuring a respectful and focused Islamic learning atmosphere."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated student support team."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Offline Resources",
      description: "Download materials and recordings to study offline at your convenience."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Self-Paced Learning",
      description: "Progress through lessons at your own speed with personalized learning paths."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Community",
      description: "Connect with Muslim learners worldwide and build lasting friendships."
    }
  ];

  return (
    <section id="features" className="py-20 bg-islamic-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-islamic-gold text-primary">Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Modern Learning. Traditional Values.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of cutting-edge technology and authentic Islamic education. 
              Our platform is designed to make your Quranic learning journey smooth, engaging, and spiritually enriching.
            </p>
          </div>

          {/* Main Feature Highlight */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Revolutionary Online Learning Experience
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art learning management system combines the best of traditional Islamic 
                education with modern technology. Experience interactive lessons, real-time feedback, 
                and personalized learning paths designed specifically for Quranic studies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-emerald rounded-full"></div>
                  <span className="text-muted-foreground">HD video conferencing with screen sharing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-emerald rounded-full"></div>
                  <span className="text-muted-foreground">Interactive digital Quran with Tajweed highlighting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-emerald rounded-full"></div>
                  <span className="text-muted-foreground">Progress tracking and performance analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-islamic-emerald rounded-full"></div>
                  <span className="text-muted-foreground">Mobile app for learning on the go</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={onlineLearningImage} 
                alt="Online Learning Platform" 
                className="rounded-2xl shadow-islamic w-full h-auto"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center shadow-islamic hover:shadow-gold transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary p-8 rounded-2xl text-white shadow-islamic">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of students who have transformed their relationship with the Quran through our programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-islamic-gold text-primary font-semibold rounded-lg shadow-gold hover:bg-islamic-gold/90 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};