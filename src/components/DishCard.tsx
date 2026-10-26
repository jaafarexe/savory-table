import React from 'react';
import { Plus, Star, Leaf, Clock, Flame } from 'lucide-react';
import { Dish } from '../types';
import { DishIllustration } from './DishIllustration';

interface DishCardProps {
  dish: Dish;
  onSelectDish: (dish: Dish) => void;
  onQuickAdd: (dish: Dish, e: React.MouseEvent) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onSelectDish, onQuickAdd }) => {
  return (
    <article
      onClick={() => onSelectDish(dish)}
      className="group relative bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Visual Canvas Area */}
      <div className="relative aspect-4/3 w-full bg-stone-900 overflow-hidden">
        <DishIllustration type={dish.visualType} name={dish.name} />

        {/* Quiet Botanical / Popular Text Indicators - Zero Pill Compliance */}
        <div className="absolute top-3 left-3 flex items-center gap-2 text-xs font-medium z-10">
          {dish.isPopular && (
            <span className="flex items-center gap-1 text-amber-300 drop-shadow-md bg-stone-950/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Popular</span>
            </span>
          )}
          {dish.isVegetarian && (
            <span className="flex items-center gap-1 text-emerald-300 drop-shadow-md bg-stone-950/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide">
              <Leaf className="w-3 h-3 text-emerald-400" />
              <span>Vegetarian</span>
            </span>
          )}
        </div>

        {/* Quick Add Overlay on Hover */}
        <div className="absolute bottom-3 right-3 z-10">
          <button
            type="button"
            onClick={(e) => onQuickAdd(dish, e)}
            className="flex items-center gap-1 px-3 py-1.5 bg-stone-950/90 hover:bg-amber-600 text-stone-100 rounded-lg text-xs font-semibold backdrop-blur-md shadow-md transition-all active:scale-95 cursor-pointer"
            title={`Quick add ${dish.name} to order`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          
          {/* Metadata Row: Category & Prep Time */}
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="uppercase tracking-wider font-medium text-[11px] text-amber-700">
              {dish.category}
            </span>
            <div className="flex items-center gap-1 text-stone-400">
              <Clock className="w-3 h-3" />
              <span>{dish.prepTime}</span>
            </div>
          </div>

          {/* Dish Title */}
          <h3 className="font-serif-display font-semibold text-lg text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
            {dish.name}
          </h3>

          {/* Appetizing Description */}
          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Footer: Price & Calorie Info */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-stone-950 font-bold text-lg tabular-nums">
              ${dish.price.toFixed(2)}
            </span>
            <span className="text-xs text-stone-400 tabular-nums">
              {dish.calories} kcal
            </span>
          </div>

          <span className="text-xs font-medium text-amber-700 group-hover:underline flex items-center gap-0.5">
            Customize &rarr;
          </span>
        </div>
      </div>
    </article>
  );
};
