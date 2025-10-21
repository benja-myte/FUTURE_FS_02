export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  price: number;
  image: string;
  category: string;
  usage?: string;
  ingredients?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}