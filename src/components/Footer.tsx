import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold">Natural Healing</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Premium herbal products crafted with care to support your wellness journey naturally.
            </p>
            <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>for your health</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Order Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">info@naturalhealing.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  123 Wellness Street<br />
                  Natural City, NC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10AM - 4PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-accent/20 rounded-lg">
              <p className="text-sm text-primary-foreground/90">
                💚 Free consultation available during business hours
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Natural Healing. All rights reserved. Made with natural ingredients and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;