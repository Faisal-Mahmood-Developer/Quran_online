import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Mic, Heart } from "lucide-react";

export const Courses = () => {
  const courses = [
    {
      title: "Quran Recitation (Tilawah)",
      description: "Master proper pronunciation and beautiful recitation of the Holy Quran with Tajweed rules.",
      duration: "6 months",
      students: "1,200+",
      rating: "4.9",
      price: "",
      level: "Beginner to Advanced",
      icon: <Mic className="h-6 w-6" />,
      features: ["Tajweed Rules", "Proper Pronunciation", "Live Practice Sessions", "Recording Reviews"]
    },
    {
      title: "Quran Memorization (Hifz)",
      description: "Comprehensive program for memorizing the Holy Quran with proven techniques and support.",
      duration: "2-4 years",
      students: "800+",
      rating: "4.8",
      price: "",
      level: "All Levels",
      icon: <Heart className="h-6 w-6" />,
      features: ["Memory Techniques", "Daily Schedules", "Progress Tracking", "Revision Support"]
    },
    {
      title: "Quran Understanding (Tafseer)",
      description: "Deep study of Quranic meanings, context, and interpretation by qualified scholars.",
      duration: "12 months",
      students: "600+",
      rating: "4.9",
      price: "",
      level: "Intermediate",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Classical Commentary", "Historical Context", "Arabic Language", "Discussion Forums"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-islamic-gold text-primary">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive Quranic Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully designed programs that cater to different aspects of Quranic learning.
              Each course is taught by qualified instructors and includes personalized support.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <Card key={index} className="h-full shadow-islamic hover:shadow-gold transition-all duration-300 border-l-4 border-l-islamic-emerald">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-islamic-light rounded-lg text-islamic-emerald">
                      {course.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Clock className="h-4 w-4 text-islamic-emerald mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Duration</div>
                      <div className="text-sm font-semibold">{course.duration}</div>
                    </div>
                    <div>
                      <Users className="h-4 w-4 text-islamic-emerald mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Students</div>
                      <div className="text-sm font-semibold">{course.students}</div>
                    </div>
                    <div>
                      <Star className="h-4 w-4 text-islamic-gold mx-auto mb-1" />
                      <div className="text-xs text-muted-foreground">Rating</div>
                      <div className="text-sm font-semibold">{course.rating}/5</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-islamic-emerald rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                      <div className="text-xs text-muted-foreground">per month</div>
                    </div>
                    <Button onClick={() => window.location.href = "https://wa.me/923121371229"}>
                      Enroll Now
                    </Button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Not sure which course is right for you? Our academic counselors are here to help!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-islamic-emerald text-islamic-emerald hover:bg-islamic-emerald hover:text-white"
              onClick={() => window.open('https://wa.me/923121371229', '_blank')}
            >
              Get Free Consultation
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};