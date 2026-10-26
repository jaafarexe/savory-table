import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { Dish, CartItem, DiningMode, TableDetails, DeliveryDetails, Order, DishOption, OrderStatus } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  diningMode: DiningMode;
  tableDetails: TableDetails;
  deliveryDetails: DeliveryDetails;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  tipPercentage: number;
  tipAmount: number;
  total: number;
  totalItemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  activeOrder: Order | null;
  setActiveOrder: (order: Order | null) => void;
  isOrderStatusOpen: boolean;
  setIsOrderStatusOpen: (open: boolean) => void;
  addToCart: (dish: Dish, quantity?: number, selectedOptions?: DishOption[], specialInstructions?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  setDiningMode: (mode: DiningMode) => void;
  setTableDetails: React.Dispatch<React.SetStateAction<TableDetails>>;
  setDeliveryDetails: React.Dispatch<React.SetStateAction<DeliveryDetails>>;
  setTipPercentage: (percentage: number) => void;
  placeOrder: (paymentMethod: 'card' | 'apple_pay' | 'table_cash') => Order;
  advanceOrderStatus: () => void;
  resetDemoOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [diningMode, setDiningMode] = useState<DiningMode>('dine-in');
  
  const [tableDetails, setTableDetails] = useState<TableDetails>({
    tableNumber: 7,
    guestCount: 2,
    notes: '',
    area: 'main-dining',
  });

  const [deliveryDetails, setDeliveryDetails] = useState<DeliveryDetails>({
    customerName: 'Alex Morgan',
    phone: '(415) 890-4219',
    address: '742 Montgomery St',
    suite: 'Apt 4B',
    instructions: 'Ring buzzer #402. Leave at doorstep.',
    contactless: true,
  });

  const [tipPercentage, setTipPercentage] = useState<number>(18);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [activeOrder, setActiveOrder] = useState<Order | null>(null);
  const [isOrderStatusOpen, setIsOrderStatusOpen] = useState<boolean>(false);

  // Financial calculations
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const optionsTotal = item.selectedOptions.reduce((optSum, o) => optSum + o.price, 0);
      return acc + (item.dish.price + optionsTotal) * item.quantity;
    }, 0);
  }, [cartItems]);

  const tax = useMemo(() => {
    return Math.round(subtotal * 0.085 * 100) / 100;
  }, [subtotal]);

  const deliveryFee = useMemo(() => {
    if (subtotal === 0) return 0;
    return diningMode === 'delivery' ? 3.50 : 0;
  }, [subtotal, diningMode]);

  const tipAmount = useMemo(() => {
    if (subtotal === 0) return 0;
    return Math.round(subtotal * (tipPercentage / 100) * 100) / 100;
  }, [subtotal, tipPercentage]);

  const total = useMemo(() => {
    if (subtotal === 0) return 0;
    return Math.round((subtotal + tax + deliveryFee + tipAmount) * 100) / 100;
  }, [subtotal, tax, deliveryFee, tipAmount]);

  const totalItemCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const addToCart = (
    dish: Dish,
    quantity = 1,
    selectedOptions: DishOption[] = [],
    specialInstructions = ''
  ) => {
    // Generate unique signature based on options and instructions
    const sortedOptionIds = selectedOptions.map(o => o.id).sort().join('|');
    const signature = `${dish.id}__${sortedOptionIds}__${specialInstructions.trim()}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === signature);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            id: signature,
            dish,
            quantity,
            selectedOptions,
            specialInstructions: specialInstructions.trim(),
          },
        ];
      }
    });

    // Provide instant feedback by opening cart drawer
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = (paymentMethod: 'card' | 'apple_pay' | 'table_cash'): Order => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newOrder: Order = {
      id: `ST-${randomSuffix}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      diningMode,
      tableDetails: diningMode === 'dine-in' ? { ...tableDetails } : undefined,
      deliveryDetails: diningMode === 'delivery' ? { ...deliveryDetails } : undefined,
      items: [...cartItems],
      subtotal,
      tax,
      serviceFee: deliveryFee,
      tip: tipAmount,
      total,
      status: 'received',
      estimatedMinutes: diningMode === 'dine-in' ? 18 : 32,
      paymentMethod,
    };

    setActiveOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setIsOrderStatusOpen(true);
    return newOrder;
  };

  const advanceOrderStatus = () => {
    if (!activeOrder) return;
    const stages: OrderStatus[] = ['received', 'preparing', 'plating', 'ready', 'delivered'];
    const currentIndex = stages.indexOf(activeOrder.status);
    if (currentIndex < stages.length - 1) {
      const nextStatus = stages[currentIndex + 1];
      setActiveOrder(prev => (prev ? { ...prev, status: nextStatus } : null));
    }
  };

  const resetDemoOrder = () => {
    setActiveOrder(null);
    setIsOrderStatusOpen(false);
  };

  // Auto-progress demo simulation timer when active order is placed
  useEffect(() => {
    if (!activeOrder || activeOrder.status === 'delivered') return;

    const timer = setTimeout(() => {
      advanceOrderStatus();
    }, 18000); // 18 seconds simulated progression per stage

    return () => clearTimeout(timer);
  }, [activeOrder?.status]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        diningMode,
        tableDetails,
        deliveryDetails,
        subtotal,
        tax,
        deliveryFee,
        tipPercentage,
        tipAmount,
        total,
        totalItemCount,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeOrder,
        setActiveOrder,
        isOrderStatusOpen,
        setIsOrderStatusOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setDiningMode,
        setTableDetails,
        setDeliveryDetails,
        setTipPercentage,
        placeOrder,
        advanceOrderStatus,
        resetDemoOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
