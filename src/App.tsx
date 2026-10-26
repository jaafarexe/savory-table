import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { DiningOptionsSection } from './components/DiningOptionsSection';
import { CraftSection } from './components/CraftSection';
import { Footer } from './components/Footer';
import { DishDetailModal } from './components/DishDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderStatusModal } from './components/OrderStatusModal';
import { Dish } from './types';

function MainAppContent() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenu = () => {
    handleNavigate('menu');
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection onExploreMenu={handleExploreMenu} />
        <MenuSection onSelectDish={(dish) => setSelectedDish(dish)} />
        <DiningOptionsSection />
        <CraftSection />
      </main>

      {/* Footer & Information */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
      <CartDrawer />
      <CheckoutModal />
      <OrderStatusModal />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
