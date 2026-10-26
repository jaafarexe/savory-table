import React from 'react';
import { ShoppingBag, UtensilsCrossed, Bike, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { totalItemCount, subtotal, setIsCartOpen, diningMode, setDiningMode, activeOrder, setIsOrderStatusOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-2xl font-serif-display font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors flex items-center gap-2 text-left"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 shrink-0" aria-hidden="true" />
          Savory Table
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('menu')}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 pb-1 hover:border-b-2 hover:border-stone-900 cursor-pointer"
          >
            Menu
          </button>
          <button
            onClick={() => onNavigate('dining-options')}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 pb-1 hover:border-b-2 hover:border-stone-900 cursor-pointer"
          >
            Dining Options
          </button>
          <button
            onClick={() => onNavigate('craft')}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 pb-1 hover:border-b-2 hover:border-stone-900 cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={() => onNavigate('hours-location')}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0 pb-1 hover:border-b-2 hover:border-stone-900 cursor-pointer"
          >
            Hours & Location
          </button>
          {activeOrder && (
            <button
              onClick={() => setIsOrderStatusOpen(true)}
              className="text-amber-800 hover:text-amber-950 font-semibold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-amber-700" />
              Order Status ({activeOrder.id})
            </button>
          )}
        </nav>

        {/* Zone 3: 1 primary action area */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Dining Mode Segment */}
          <div className="hidden sm:flex items-center p-1 bg-stone-100 rounded-lg text-xs font-medium text-stone-600 border border-stone-200">
            <button
              onClick={() => setDiningMode('dine-in')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                diningMode === 'dine-in'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'hover:text-stone-900'
              }`}
              title="Table Service at Savory Table"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Table Service</span>
            </button>
            <button
              onClick={() => setDiningMode('delivery')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                diningMode === 'delivery'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'hover:text-stone-900'
              }`}
              title="Direct Door Delivery"
            >
              <Bike className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Delivery</span>
            </button>
          </div>

          {/* Cart Trigger Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded-lg text-sm font-medium transition-all shadow-xs cursor-pointer group"
            aria-label={`Shopping bag with ${totalItemCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-stone-300 group-hover:text-white transition-colors" />
            <span className="hidden xs:inline whitespace-nowrap">Order</span>
            {totalItemCount > 0 ? (
              <span className="inline-flex items-center justify-center text-xs font-semibold bg-amber-500 text-stone-950 px-2 py-0.5 rounded-full tabular-nums">
                {totalItemCount} · ${subtotal.toFixed(2)}
              </span>
            ) : (
              <span className="text-xs text-stone-400 tabular-nums">$0.00</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
