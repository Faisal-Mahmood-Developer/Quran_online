import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-islamic-gold text-primary">Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Start Your Quranic Journey Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our programs? Ready to enroll? Our dedicated team is here to guide you 
              every step of the way. Reach out to us and begin your spiritual learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-islamic">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-islamic-emerald" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">General Inquiries:</p>
                  <p className="font-semibold text-primary">sadiahameed810@gmail.com</p>
                  <p className="text-muted-foreground mb-2 mt-4">Admissions:</p>
                  <p className="font-semibold text-primary">sadiahameed810@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="shadow-islamic">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-islamic-emerald" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Phone:</p>
                  <p className="font-semibold text-primary">+92 312 1371229</p>
                  <p className="text-muted-foreground mb-2 mt-4">WhatsApp:</p>
                  <p className="font-semibold text-primary">+92 312 1371229</p>
                </CardContent>
              </Card>

              <Card className="shadow-islamic">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-islamic-emerald" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-islamic-emerald mt-4">
                    * Classes available 24/7 online
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-islamic">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Phone Number
                      </label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Course Interest
                    </label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option value="">Select a course</option>
                      <option value="recitation">Quran Recitation (Tilawah)</option>
                      <option value="memorization">Quran Memorization (Hifz)</option>
                      <option value="understanding">Quran Understanding (Tafseer)</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your learning goals and any questions you have..."
                      rows={5}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded border-input" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for updates and Islamic content
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-primary text-primary-foreground shadow-islamic hover:shadow-gold text-lg py-6">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-primary text-white shadow-islamic max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90">
                  For urgent matters or immediate enrollment support, contact our emergency helpline.
                </p>
                <Button className="bg-islamic-gold text-primary shadow-gold hover:bg-islamic-gold/90">
                  Call Emergency Line: +92 312 1371229
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};