import React from 'react';
import { Award, Wheat, Sprout, HeartHandshake } from 'lucide-react';

export const CraftSection: React.FC = () => {
  return (
    <section id="craft" className="py-16 md:py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              The Culinary Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-stone-50 leading-tight">
              Rooted in California soil, shaped by classical European craft.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            <p>
              At Savory Table, we believe honest ingredients need very little ornamentation. Every morning before dawn, our kitchen receives heirloom vegetables from Watsonville, pasture-raised meats from Sonoma County, and freshly pressed olive oil from the Napa foothills.
            </p>
            <p className="text-stone-400 text-sm">
              Our pasta dough is rolled by hand each afternoon using stone-ground semolina and farm eggs, yielding the distinctive silken tooth that defines our tagliatelle and agnolotti.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-stone-800">
          
          <div className="p-6 bg-stone-800/60 rounded-2xl border border-stone-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display font-semibold text-base text-stone-100">
              100% Farm Sourced
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              We partner exclusively with 9 certified organic growers within a 120-mile radius.
            </p>
          </div>

          <div className="p-6 bg-stone-800/60 rounded-2xl border border-stone-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Wheat className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display font-semibold text-base text-stone-100">
              Daily Hand-Rolled Pastas
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Egg ribbons extruded and folded fresh daily for ideal emulsion absorption.
            </p>
          </div>

          <div className="p-6 bg-stone-800/60 rounded-2xl border border-stone-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display font-semibold text-base text-stone-100">
              28-Day Dry Aging
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Prime cuts dry-aged on Himalayan salt blocks to concentrate marbling and umami.
            </p>
          </div>

          <div className="p-6 bg-stone-800/60 rounded-2xl border border-stone-700/60 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display font-semibold text-base text-stone-100">
              Living Wage Bistro
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Proudly supporting our culinary brigade with equitable wages and full health coverage.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
