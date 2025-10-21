import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Leaf, Shield, Heart, Star } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import heroImage from '@/assets/hero-home.png';

const Index = () => {
  const featuredProducts = products.slice(0, 6);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Natural herbs and healing plants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-nature-green/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4 animate-scale-in">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            🌿 Pure Natural Healing
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Power of
            <span className="block text-accent">Natural Wellness</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Premium herbal products crafted with care to support your journey toward optimal health and vitality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
              <Link to="/products">
                Shop Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 bg-white/10 backdrop-blur-sm">
              <Link to="/about">
                Discover Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-nature-green-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Natural Healing?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality herbal products backed by traditional wisdom and modern science
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth border-nature-green/20 hover-scale animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">100% Natural</h3>
                <p className="text-muted-foreground">
                  All our products are sourced from organic farms and contain no artificial additives or preservatives
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth border-nature-green/20 hover-scale animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Quality Tested</h3>
                <p className="text-muted-foreground">
                  Every batch is rigorously tested for purity, potency, and safety to ensure you get the best
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-elegant transition-smooth border-nature-green/20 hover-scale animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">Made with Love</h3>
                <p className="text-muted-foreground">
                  Handcrafted in small batches with care and attention to traditional preparation methods
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular herbal remedies, trusted by thousands for their healing properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-nature-green hover:bg-primary text-primary-foreground">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from real people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                text: "The turmeric powder has been amazing for my joint pain. I've noticed a significant improvement in just a few weeks!"
              },
              {
                name: "Michael Chen",
                rating: 5,
                text: "Excellent quality products and fast shipping. The ashwagandha capsules have really helped with my stress levels."
              },
              {
                name: "Emma Davis",
                rating: 5,
                text: "I love that everything is 100% natural. The chamomile tea has become part of my nightly routine for better sleep."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-nature-green/20">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
