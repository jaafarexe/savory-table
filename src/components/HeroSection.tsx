import React from 'react';
import { UtensilsCrossed, Bike, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { DishIllustration } from './DishIllustration';

interface HeroSectionProps {
  onExploreMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu }) => {
  const { diningMode, setDiningMode, tableDetails, deliveryDetails, setTableDetails, activeOrder, setIsOrderStatusOpen } = useCart();

  return (
    <section id="hero" className="relative overflow-hidden bg-stone-900 text-stone-100 py-12 md:py-20 border-b border-stone-800">
      {/* Ambient background styling */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-stone-700/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 tracking-wider uppercase">
              <span>Seasonal California Bistro</span>
              <span aria-hidden="true">·</span>
              <span>Farm-to-Table Fresh</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2018</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-medium tracking-tight text-stone-50 leading-[1.15] text-balance">
              Artisanal flavors, served to your table or doorstep.
            </h1>

            <p className="text-stone-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Handcrafted pastas, prime dry-aged cuts, and wild botanical infusions created with ingredients harvested daily from Northern California family growers.
            </p>

            {/* Dining Mode Selector Card */}
            <div className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700/80 backdrop-blur-sm max-w-xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs text-stone-400 font-medium pb-2 border-b border-stone-700">
                <span>Select Your Dining Experience</span>
                <span className="text-amber-400 font-medium">Order live demo enabled</span>
              </div>

              {/* Segmented Dining Buttons */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-stone-900/90 rounded-xl border border-stone-700/50">
                <button
                  type="button"
                  onClick={() => setDiningMode('dine-in')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    diningMode === 'dine-in'
                      ? 'bg-amber-600 text-white shadow-md font-semibold'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <UtensilsCrossed className="w-4 h-4 shrink-0" />
                  <span>Dine-In Table</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDiningMode('delivery')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    diningMode === 'delivery'
                      ? 'bg-amber-600 text-white shadow-md font-semibold'
                      : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <Bike className="w-4 h-4 shrink-0" />
                  <span>Doorstep Delivery</span>
                </button>
              </div>

              {/* Contextual Mode Info */}
              {diningMode === 'dine-in' ? (
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">Assigned:</span>
                    <span className="font-semibold text-stone-100">Table #{tableDetails.tableNumber}</span>
                    <span className="text-stone-500">({tableDetails.area === 'main-dining' ? 'Main Dining Room' : 'Patio'})</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Avg prep ~15-20 mins</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300 pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-medium text-stone-200 truncate max-w-xs">{deliveryDetails.address}, {deliveryDetails.suite}</span>
                  </div>
                  <div className="text-stone-400">
                    <span>Delivery fee $3.50 · ~30-40 mins</span>
                  </div>
                </div>
              )}
            </div>

            {/* Main Action Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreMenu}
                className="flex items-center gap-2 px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-600/20 cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {activeOrder && (
                <button
                  type="button"
                  onClick={() => setIsOrderStatusOpen(true)}
                  className="flex items-center gap-2 px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 font-medium text-sm rounded-xl transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>View Active Order ({activeOrder.id})</span>
                </button>
              )}
            </div>

            {/* Adjacency Trust Proof */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-4 border-t border-stone-800">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Kitchen open now (11:30 AM – 10:30 PM)
              </span>
              <span aria-hidden="true">·</span>
              <span>4.9 ★ from 1,280+ guests</span>
              <span aria-hidden="true">·</span>
              <span>424 Montgomery St, SF</span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Bento Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-4 bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700 shadow-2xl overflow-hidden">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-stone-700/60 bg-stone-950">
                <DishIllustration type="pasta" name="Handcrafted Truffle Tagliatelle" className="w-full h-full" />
                
                {/* Visual Label Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400 font-medium">Chef's Signature</p>
                      <h3 className="text-stone-100 font-serif-display font-semibold text-lg">Handmade Truffle Tagliatelle</h3>
                    </div>
                    <span className="text-stone-100 font-bold text-lg tabular-nums">$29.50</span>
                  </div>
                </div>
              </div>

              {/* Supporting Chef's Note */}
              <div className="mt-4 px-2 flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="text-stone-300 font-medium">Fresh daily pasta</span>
                  <span aria-hidden="true">·</span>
                  <span>Shaved Umbrian truffles</span>
                </div>
                <span className="text-amber-400 font-medium">Popular Choice</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
