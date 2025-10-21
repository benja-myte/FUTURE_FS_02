import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message sent!",
      description: "Your message has been sent via WhatsApp. We'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in learning more about your herbal products.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with any questions about our products or to start your wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-nature-green/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MessageCircle className="w-5 h-5" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg py-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Get instant responses to your questions!
                </p>
              </CardContent>
            </Card>

            <Card className="border-nature-green/20">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-nature-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Herbal Gardens Way<br />
                      Wellness District<br />
                      Natural City, NC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-nature-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-nature-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      info@herbalhealing.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-nature-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-nature-green/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-primary mb-3">Why Contact Us?</h3>
                <div className="space-y-2">
                  <Badge variant="outline" className="block w-fit bg-healing-mint border-nature-green text-nature-green">
                    ✓ Product recommendations
                  </Badge>
                  <Badge variant="outline" className="block w-fit bg-healing-mint border-nature-green text-nature-green">
                    ✓ Dosage guidance
                  </Badge>
                  <Badge variant="outline" className="block w-fit bg-healing-mint border-nature-green text-nature-green">
                    ✓ Custom wellness plans
                  </Badge>
                  <Badge variant="outline" className="block w-fit bg-healing-mint border-nature-green text-nature-green">
                    ✓ Bulk order inquiries
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-nature-green/20">
              <CardHeader>
                <CardTitle className="text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us about your wellness goals, questions about our products, or any other inquiries..."
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-nature-green hover:bg-primary text-primary-foreground text-lg py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your message will be sent via WhatsApp for the fastest response.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How do I know which products are right for me?",
                answer: "We recommend consulting with our herbalist via WhatsApp or phone. We can provide personalized recommendations based on your health goals and current wellness routine."
              },
              {
                question: "Are your products safe to take with medications?",
                answer: "Always consult with your healthcare provider before starting any herbal supplements, especially if you're taking medications. We're happy to provide ingredient lists and research information."
              },
              {
                question: "How long does shipping take?",
                answer: "We typically process orders within 1-2 business days. Shipping usually takes 3-5 business days depending on your location. We'll provide tracking information once your order ships."
              },
              {
                question: "Do you offer bulk pricing?",
                answer: "Yes! We offer discounts for bulk orders and regular customers. Contact us directly to discuss pricing for larger quantities or subscription options."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-nature-green/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-primary mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;