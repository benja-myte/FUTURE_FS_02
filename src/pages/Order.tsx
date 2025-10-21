import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import heroOrder from '@/assets/hero-order.png';
import { formatPrice } from '@/lib/formatters';

interface OrderFormData {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

const Order = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
      toast({
        title: "Item removed",
        description: "Product has been removed from your cart.",
      });
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['fullName', 'phone', 'address', 'city'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof OrderFormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (state.items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const orderSummary = state.items
      .map(item => `${item.quantity}x ${item.product.name} - ₦${formatPrice(item.product.price * item.quantity)}`)
      .join('\n');
    
    const message = `New Order Request:

Customer Information:
Name: ${formData.fullName}
Phone: ${formData.phone}
${formData.email ? `Email: ${formData.email}` : ''}
Address: ${formData.address}, ${formData.city} ${formData.postalCode}

Order Details:
${orderSummary}

Total: ₦${formatPrice(state.total)}

${formData.notes ? `Notes: ${formData.notes}` : ''}`;

    const whatsappUrl = `https://wa.me/2349118021733?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setOrderSubmitted(true);
    clearCart();
    
    toast({
      title: "Order submitted!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
  };

  if (orderSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center p-8">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-nature-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Order Submitted!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your order. We've received your request via WhatsApp and will contact you shortly to confirm the details.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="bg-nature-green hover:bg-primary text-primary-foreground">
                <Link to="/products">Continue Shopping</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroOrder}
            alt="Complete your order"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-nature-green/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Complete Your Order</h1>
          <p className="text-lg text-primary-foreground/90">
            Review your cart and provide delivery details
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {state.items.length === 0 ? (
          <Card className="max-w-md mx-auto text-center p-8">
            <CardContent className="pt-6">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-primary mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Add some products to your cart to place an order
              </p>
              <Button asChild className="bg-nature-green hover:bg-primary text-primary-foreground">
                <Link to="/products">Shop Products</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Your Cart ({state.itemCount} items)</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/products">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Continue Shopping
                      </Link>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.product.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.product.description}
                        </p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.product.category}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <div className="flex-1 text-left sm:text-right">
                          <div className="font-semibold text-primary">
                            ₦{formatPrice(item.product.price * item.quantity)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ₦{formatPrice(item.product.price)} each
                          </div>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Order Form & Summary */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.product.name}</span>
                        <span>₦{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">₦{formatPrice(state.total)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Order Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitOrder} className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Special Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Any special instructions or requests..."
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-nature-green hover:bg-primary text-primary-foreground text-lg py-6"
                    >
                      Place Order via WhatsApp
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. Your order will be sent via WhatsApp for confirmation.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;