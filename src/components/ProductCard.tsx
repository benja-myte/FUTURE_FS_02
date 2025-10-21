import React from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Leaf, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { formatPrice } from '@/lib/formatters';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group hover:shadow-elegant transition-smooth border-border bg-gradient-card overflow-hidden hover-scale animate-fade-in h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-nature-green text-primary-foreground">
              {product.category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-nature-green transition-smooth cursor-pointer" onClick={() => onViewDetails(product)}>
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.benefits.slice(0, 3).map((benefit, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-healing-mint border-nature-green text-nature-green"
            >
              <Leaf className="w-3 h-3 mr-1" />
              {benefit}
            </Badge>
          ))}
          {product.benefits.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{product.benefits.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-primary">
            ₦{formatPrice(product.price)}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button 
          onClick={() => onViewDetails(product)}
          variant="outline"
          className="w-full"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Details
        </Button>
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-nature-green hover:bg-primary text-primary-foreground font-medium transition-smooth"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;