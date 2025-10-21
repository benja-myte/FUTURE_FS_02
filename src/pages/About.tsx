import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, Heart, Star } from 'lucide-react';
import heroAbout from '@/assets/hero-about.png';

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroAbout}
            alt="About our herbal business"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-nature-green/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Story of Natural Healing
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Committed to bringing you the finest herbal remedies with integrity and care
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-nature-green text-primary-foreground">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Bridging Ancient Wisdom with Modern Wellness
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2018, HerbalHealing was born from a deep belief that nature provides the best remedies for our health and well-being. Our founder, Dr. Maria Santos, after years of studying traditional herbal medicine and modern nutritional science, decided to create a bridge between ancient wisdom and contemporary wellness needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every product we offer is carefully selected and tested to ensure it meets our high standards for purity, potency, and effectiveness. We work directly with organic farmers and ethical suppliers to bring you herbs that are not only good for you, but good for the planet too.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-nature-green-light border-nature-green/20 hover-scale animate-fade-in">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-healing-mint border-nature-green/20">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted-foreground">Premium Products</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-accent/20 border-accent/30">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground">Natural Ingredients</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-earth-brown-light border-earth-brown/20">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from sourcing to serving our customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth hover-scale animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  We're committed to environmentally responsible practices in all our operations
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Rigorous testing and quality control ensure every product meets our high standards
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting local farmers and communities while serving our customers with care
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">Wellness</h3>
                <p className="text-muted-foreground text-sm">
                  Your health and well-being are at the center of everything we create
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Founder</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate expert behind our herbal healing mission
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 mx-auto bg-gradient-hero rounded-full flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-primary mb-2">Dr. Maria Santos</h3>
                    <Badge className="mb-4 bg-healing-sage text-primary-foreground">Founder & Herbalist</Badge>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      With over 15 years of experience in herbal medicine and a Ph.D. in Botanical Sciences, Dr. Santos brings together traditional knowledge and scientific rigor to create products that truly make a difference in people's lives.
                    </p>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "I believe that everyone deserves access to pure, effective natural remedies. My mission is to honor the wisdom of traditional healing while ensuring every product meets the highest standards of quality and safety."
                    </p>
                    
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">4.9/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-nature-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quality Assurance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our products are backed by rigorous testing and industry certifications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">USDA Organic Certified</h3>
                <p className="text-muted-foreground text-sm">All our products meet strict organic standards</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">GMP Facility</h3>
                <p className="text-muted-foreground text-sm">Manufactured in Good Manufacturing Practice facilities</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Third-Party Tested</h3>
                <p className="text-muted-foreground text-sm">Independent lab testing for purity and potency</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;