import React, { useState, useMemo } from 'react';
import { Search, X, Leaf, Star, Sparkles, Filter } from 'lucide-react';
import { Dish, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { DishCard } from './DishCard';
import { useCart } from '../context/CartContext';

interface MenuSectionProps {
  onSelectDish: (dish: Dish) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDish }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegetarianOnly, setVegetarianOnly] = useState<boolean>(false);
  const [popularOnly, setPopularOnly] = useState<boolean>(false);

  const categories: { id: MenuCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Dishes', count: MENU_ITEMS.length },
    { id: 'starters', label: 'Starters', count: MENU_ITEMS.filter(d => d.category === 'starters').length },
    { id: 'mains', label: 'Mains', count: MENU_ITEMS.filter(d => d.category === 'mains').length },
    { id: 'desserts', label: 'Desserts', count: MENU_ITEMS.filter(d => d.category === 'desserts').length },
    { id: 'drinks', label: 'Drinks & Elixirs', count: MENU_ITEMS.filter(d => d.category === 'drinks').length },
  ];

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter(dish => {
      // Category match
      if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (vegetarianOnly && !dish.isVegetarian) {
        return false;
      }
      // Popular filter
      if (popularOnly && !dish.isPopular) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesIngredients = dish.ingredients.some(ing => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, vegetarianOnly, popularOnly, searchQuery]);

  const handleQuickAdd = (dish: Dish, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(dish, 1, [], '');
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setVegetarianOnly(false);
    setPopularOnly(false);
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Autumn Seasonal Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-semibold text-stone-900 mt-1">
              Curated A La Carte Menu
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Prepared to order using certified local produce, sustainably foraged mushrooms, and prime dry-aged heritage meats.
            </p>
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or ingredients..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar & Dietary Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-stone-600 hover:text-stone-950 border border-stone-200 hover:border-stone-300'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-xs tabular-nums ${
                  selectedCategory === cat.id ? 'text-amber-300' : 'text-stone-400'
                }`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Dietary Checkbox Toggles */}
          <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setVegetarianOnly(!vegetarianOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                vegetarianOnly
                  ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${vegetarianOnly ? 'text-emerald-600' : 'text-stone-400'}`} />
              <span>Vegetarian Only</span>
            </button>

            <button
              type="button"
              onClick={() => setPopularOnly(!popularOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                popularOnly
                  ? 'bg-amber-50 border-amber-500 text-amber-800 font-semibold'
                  : 'bg-white border-stone-200 text-stone-600 hover:border-stone-300'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${popularOnly ? 'text-amber-600 fill-amber-500' : 'text-stone-400'}`} />
              <span>Popular Picks</span>
            </button>
          </div>

        </div>

        {/* Results Counter & Active Query Status */}
        <div className="flex items-center justify-between text-xs text-stone-500">
          <span>
            Showing <strong className="text-stone-900 font-semibold tabular-nums">{filteredDishes.length}</strong> items
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {(selectedCategory !== 'all' || vegetarianOnly || popularOnly || searchQuery) && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-amber-700 hover:text-amber-900 font-medium underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-serif-display font-semibold text-lg text-stone-900">
              No matching dishes found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              We couldn't find any dishes that match your active filters or search terms. Try adjusting your search query or reset filters.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Show Full Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onSelectDish={onSelectDish}
                onQuickAdd={handleQuickAdd}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
