import React, { useState } from 'react';
import { X, Plus, Minus, Star, Leaf, Clock, AlertCircle, Check } from 'lucide-react';
import { Dish, DishOption } from '../types';
import { DishIllustration } from './DishIllustration';
import { useCart } from '../context/CartContext';

interface DishDetailModalProps {
  dish: Dish | null;
  onClose: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<DishOption[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  if (!dish) return null;

  const handleToggleOption = (option: DishOption) => {
    setSelectedOptions(prev => {
      const exists = prev.some(o => o.id === option.id);
      if (exists) {
        return prev.filter(o => o.id !== option.id);
      } else {
        return [...prev, option];
      }
    });
  };

  const optionsTotal = selectedOptions.reduce((acc, opt) => acc + opt.price, 0);
  const calculatedTotal = (dish.price + optionsTotal) * quantity;

  const handleAddToCart = () => {
    addToCart(dish, quantity, selectedOptions, specialInstructions);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-stone-100 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md"
          aria-label="Close dish modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Visual Header */}
        <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-stone-900 shrink-0 overflow-hidden">
          <DishIllustration type={dish.visualType} name={dish.name} />

          {/* Visual Overlay Badges */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2 z-10">
            {dish.isPopular && (
              <span className="flex items-center gap-1 text-amber-300 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Chef's Popular Pick</span>
              </span>
            )}
            {dish.isVegetarian && (
              <span className="flex items-center gap-1 text-emerald-300 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vegetarian Recipe</span>
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Header Info */}
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-serif-display font-semibold text-stone-900">
                {dish.name}
              </h2>
              <span className="text-2xl font-bold text-stone-900 tabular-nums shrink-0">
                ${dish.price.toFixed(2)}
              </span>
            </div>

            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              {dish.description}
            </p>

            {/* Nutrition & Timing Specs */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-3 border-t border-stone-100">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Prep: {dish.prepTime}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{dish.calories} Calories</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">Category: {dish.category}</span>
            </div>
          </div>

          {/* Sourced Ingredients */}
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/70">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2">
              Featured Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-stone-700">
              {dish.ingredients.map((ing, idx) => (
                <span key={idx} className="bg-white px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Allergens Notice */}
          {dish.allergens.length > 0 && (
            <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50/80 p-3 rounded-xl border border-amber-200">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>
                <strong>Allergen Notice:</strong> Contains {dish.allergens.join(', ')}. Please advise the kitchen if you have severe dietary sensitivities.
              </span>
            </div>
          )}

          {/* Customization Options */}
          {dish.options && dish.options.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-stone-900">
                Enhance Your Dish
              </h4>
              <div className="space-y-2">
                {dish.options.map(option => {
                  const isChecked = selectedOptions.some(o => o.id === option.id);
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleToggleOption(option)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-sm transition-all cursor-pointer text-left ${
                        isChecked
                          ? 'border-amber-600 bg-amber-50/60 text-stone-900 font-medium'
                          : 'border-stone-200 hover:border-stone-300 bg-white text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-300'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span>{option.name}</span>
                      </div>
                      <span className="font-semibold text-stone-900 tabular-nums">
                        {option.price > 0 ? `+$${option.price.toFixed(2)}` : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Requests Field */}
          <div className="space-y-2">
            <label htmlFor="dish-notes" className="block text-xs font-semibold text-stone-700 uppercase tracking-wide">
              Special Kitchen Instructions
            </label>
            <input
              id="dish-notes"
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra dressing on side, allergy notes, less salt..."
              className="w-full px-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-stone-400"
            />
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          
          {/* Quantity Stepper */}
          <div className="flex items-center bg-white rounded-xl border border-stone-200 p-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-600 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-bold text-stone-900 tabular-nums text-sm">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Order CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-stone-900 hover:bg-amber-600 text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
          >
            <span>Add to Order</span>
            <span>·</span>
            <span className="tabular-nums">${calculatedTotal.toFixed(2)}</span>
          </button>

        </div>

      </div>

    </div>
  );
};
