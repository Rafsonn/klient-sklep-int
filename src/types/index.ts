export interface Price {
  main: number;
  fractional: number;
}

export interface Product {
  id: number;
  name: string;
  price: Price;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  items: CartItem[];
  totalPrice: number;
  date: string;
}
