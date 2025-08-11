import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-islamic-gold">Umy Majid Academy</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Dedicated to providing authentic Quranic education to Muslims worldwide through 
              innovative online learning platforms and traditional teaching methods.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-white hover:text-islamic-gold hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-islamic-gold hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-islamic-gold hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-islamic-gold hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-islamic-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-white/80 hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Student Portal</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-islamic-gold">Our Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Quran Recitation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Quran Memorization</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Quran Understanding</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Arabic Language</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Islamic Studies</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Kids Programs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-islamic-gold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-islamic-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Email</p>
                  <p className="text-white">sadiahameed810@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-islamic-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Phone</p>
                  <p className="text-white">+92 312 1371229</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-islamic-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Office</p>
                  <p className="text-white">Sargodha<br />Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Newsletter Subscription */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold mb-2 text-islamic-gold">Stay Connected</h4>
          <p className="text-white/80 mb-4">Subscribe to our newsletter for Islamic content and academy updates</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-l-lg border-0 text-primary"
            />
            <Button className="bg-islamic-gold text-primary hover:bg-islamic-gold/90 rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Umy Majid Academy. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Islamic Greeting */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-islamic-gold font-semibold">بارك الله فيكم - May Allah bless you all</p>
        </div>
      </div>
    </footer>
  );
};