import React from 'react';
import { UtensilsCrossed, Bike, Clock, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const DiningOptionsSection: React.FC = () => {
  const { diningMode, setDiningMode, tableDetails, setTableDetails, deliveryDetails, setDeliveryDetails } = useCart();

  return (
    <section id="dining-options" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <span>Seamless Hospitality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-semibold text-stone-900">
            Two Ways to Enjoy Savory Table
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Whether dining under our vaulted timber beams or savoring chef-curated plates in your dining room, every order is crafted with uncompromising care.
          </p>
        </div>

        {/* 2-Column Dining Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Table Service (Dine-in) */}
          <div className={`p-8 rounded-3xl border transition-all ${
            diningMode === 'dine-in'
              ? 'border-amber-600/70 bg-stone-50 ring-2 ring-amber-600/20 shadow-lg'
              : 'border-stone-200 bg-white hover:border-stone-300'
          }`}>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                In-Restaurant
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-serif-display font-semibold text-stone-900">
              Table Service & In-Bistro Ordering
            </h3>
            
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Take your seat and order directly from your mobile device. Your dishes are paced by our floor manager and delivered warm directly to your numbered table.
            </p>

            {/* Feature List */}
            <ul className="mt-6 space-y-2.5 text-xs text-stone-600 border-t border-stone-200/80 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Instant kitchen ticketing without waiting for paper menus</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Complimentary warm sourdough & whipped sea salt butter</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Zero service fees or added transaction surcharges</span>
              </li>
            </ul>

            {/* Quick Interactive Table Picker */}
            <div className="mt-6 p-4 bg-white rounded-2xl border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700">Your Current Table:</span>
                <span className="font-bold text-amber-800 tabular-nums">Table #{tableDetails.tableNumber}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <select
                  value={tableDetails.tableNumber}
                  onChange={(e) => setTableDetails(prev => ({ ...prev, tableNumber: parseInt(e.target.value) }))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-medium bg-white text-stone-800"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16].map((num) => (
                    <option key={num} value={num}>Table #{num}</option>
                  ))}
                </select>

                <select
                  value={tableDetails.area}
                  onChange={(e) => setTableDetails(prev => ({ ...prev, area: e.target.value as any }))}
                  className="px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-medium bg-white text-stone-800"
                >
                  <option value="main-dining">Main Dining Hall</option>
                  <option value="patio">Courtyard Patio</option>
                  <option value="chef-counter">Chef Counter</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setDiningMode('dine-in')}
                className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  diningMode === 'dine-in'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {diningMode === 'dine-in' ? '✓ Dine-In Mode Selected' : 'Switch to Table Service'}
              </button>
            </div>
          </div>

          {/* Card 2: Doorstep Delivery */}
          <div className={`p-8 rounded-3xl border transition-all ${
            diningMode === 'delivery'
              ? 'border-amber-600/70 bg-stone-50 ring-2 ring-amber-600/20 shadow-lg'
              : 'border-stone-200 bg-white hover:border-stone-300'
          }`}>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Bike className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                To Your Door
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-serif-display font-semibold text-stone-900">
              Artisanal Doorstep Delivery
            </h3>
            
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Every dish is packed into custom thermal biocontainers that lock in heat and protect sauce consistency. Delivered directly to your home or office.
            </p>

            {/* Feature List */}
            <ul className="mt-6 space-y-2.5 text-xs text-stone-600 border-t border-stone-200/80 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>30-40 minute guaranteed delivery radius in SF Downtown</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Eco-friendly compostable sugarcane & unbleached fiber boxes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Real-time courier milestone notification & status tracker</span>
              </li>
            </ul>

            {/* Quick Interactive Delivery Address Form Preview */}
            <div className="mt-6 p-4 bg-white rounded-2xl border border-stone-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700">Destination:</span>
                <span className="text-stone-500 font-medium">Flat $3.50 Courier Fee</span>
              </div>
              
              <div className="space-y-2">
                <input
                  type="text"
                  value={deliveryDetails.address}
                  onChange={(e) => setDeliveryDetails(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Street address..."
                  className="w-full px-3 py-1.5 rounded-lg border border-stone-200 text-xs text-stone-800"
                />
              </div>

              <button
                type="button"
                onClick={() => setDiningMode('delivery')}
                className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  diningMode === 'delivery'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {diningMode === 'delivery' ? '✓ Delivery Mode Selected' : 'Switch to Delivery'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
