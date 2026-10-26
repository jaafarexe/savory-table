export type MenuCategory = 'all' | 'starters' | 'mains' | 'desserts' | 'drinks';

export type DiningMode = 'dine-in' | 'delivery';

export interface DishOption {
  id: string;
  name: string;
  price: number;
}

export interface Dish {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  price: number;
  description: string;
  ingredients: string[];
  isVegetarian: boolean;
  isPopular: boolean;
  calories: number;
  prepTime: string;
  allergens: string[];
  options?: DishOption[];
  badge?: string;
  visualType: 'burrata' | 'pasta' | 'steak' | 'salmon' | 'risotto' | 'polenta' | 'fondant' | 'tart' | 'cocktail' | 'soda' | 'affogato' | 'soup';
}

export interface CartItem {
  id: string; // unique cart line item id (dishId + optionsHash)
  dish: Dish;
  quantity: number;
  selectedOptions: DishOption[];
  specialInstructions: string;
}

export interface TableDetails {
  tableNumber: number;
  guestCount: number;
  notes: string;
  area: 'main-dining' | 'patio' | 'chef-counter';
}

export interface DeliveryDetails {
  customerName: string;
  phone: string;
  address: string;
  suite: string;
  instructions: string;
  contactless: boolean;
}

export type OrderStatus = 'received' | 'preparing' | 'plating' | 'ready' | 'delivered';

export interface Order {
  id: string;
  createdAt: string;
  diningMode: DiningMode;
  tableDetails?: TableDetails;
  deliveryDetails?: DeliveryDetails;
  items: CartItem[];
  subtotal: number;
  tax: number;
  serviceFee: number;
  tip: number;
  total: number;
  status: OrderStatus;
  estimatedMinutes: number;
  paymentMethod: 'card' | 'apple_pay' | 'table_cash';
}
