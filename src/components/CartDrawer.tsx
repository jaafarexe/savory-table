import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, UtensilsCrossed, Bike, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { DishIllustration } from './DishIllustration';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    tax,
    deliveryFee,
    tipPercentage,
    setTipPercentage,
    tipAmount,
    total,
    diningMode,
    setDiningMode,
    tableDetails,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const tipOptions = [0, 10, 15, 18, 20];

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-stone-200 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Cart Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/60 shrink-0">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-stone-800" />
              <h2 className="text-lg font-serif-display font-semibold text-stone-900">
                Your Order Summary
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-stone-500 hover:text-rose-600 transition-colors px-2 py-1 cursor-pointer"
                  title="Clear all items"
                >
                  Clear All
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dining Mode Segment in Cart */}
          <div className="p-4 bg-stone-100/70 border-b border-stone-200 shrink-0">
            <div className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
              Order Type
            </div>
            <div className="grid grid-cols-2 gap-2 p-1 bg-white rounded-xl border border-stone-200">
              <button
                type="button"
                onClick={() => setDiningMode('dine-in')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  diningMode === 'dine-in'
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Table Service</span>
              </button>
              <button
                type="button"
                onClick={() => setDiningMode('delivery')}
                className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  diningMode === 'delivery'
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Delivery</span>
              </button>
            </div>

            <div className="mt-2 text-xs text-stone-500 flex items-center justify-between">
              {diningMode === 'dine-in' ? (
                <span>Assigned to Table #{tableDetails.tableNumber}</span>
              ) : (
                <span>Doorstep delivery (flat $3.50)</span>
              )}
              <span className="text-amber-800 font-medium">Fast Kitchen Priority</span>
            </div>
          </div>

          {/* Scrollable Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display font-semibold text-lg text-stone-900">
                  Your order is empty
                </h3>
                <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                  Browse our starters, handmade pasta, prime mains, and artisanal cocktails to start crafting your meal.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Browse Full Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemOptionsPrice = item.selectedOptions.reduce((s, o) => s + o.price, 0);
                const linePrice = (item.dish.price + itemOptionsPrice) * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="p-4 bg-stone-50/80 rounded-2xl border border-stone-200/80 space-y-3"
                  >
                    <div className="flex gap-3">
                      {/* Mini Graphic Illustration */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-900 shrink-0 border border-stone-200">
                        <DishIllustration type={item.dish.visualType} name={item.dish.name} className="w-full h-full" />
                      </div>

                      {/* Line Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-display font-semibold text-sm text-stone-900 leading-tight">
                            {item.dish.name}
                          </h4>
                          <span className="font-semibold text-stone-900 text-sm tabular-nums shrink-0">
                            ${linePrice.toFixed(2)}
                          </span>
                        </div>

                        {/* Selected Options */}
                        {item.selectedOptions.length > 0 && (
                          <div className="mt-1 space-y-0.5">
                            {item.selectedOptions.map((opt) => (
                              <p key={opt.id} className="text-xs text-stone-500 flex items-center justify-between">
                                <span>+ {opt.name}</span>
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Special Note */}
                        {item.specialInstructions && (
                          <p className="mt-1 text-xs text-amber-800 italic bg-amber-50/70 px-2 py-0.5 rounded-md border border-amber-200/60 inline-block">
                            "{item.specialInstructions}"
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Stepper & Remove */}
                    <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
                        title="Remove dish"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="flex items-center bg-white rounded-lg border border-stone-200 p-0.5 shadow-2xs">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-md flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-stone-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-md flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Financial Breakdown & Checkout Button */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-4 shrink-0">
              
              {/* Tip Selection */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone-600 font-medium">
                  <span>Hospitality Gratuity</span>
                  <span className="tabular-nums font-semibold">${tipAmount.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-5 gap-1">
                  {tipOptions.map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTipPercentage(pct)}
                      className={`py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        tipPercentage === pct
                          ? 'bg-amber-600 border-amber-600 text-white font-semibold'
                          : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      {pct === 0 ? 'None' : `${pct}%`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subtotal lines */}
              <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span>Food & Beverage Subtotal</span>
                  <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Sales Tax (8.5%)</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                {diningMode === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Doorstep Delivery Fee</span>
                    <span className="tabular-nums">${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                {diningMode === 'dine-in' && (
                  <div className="flex justify-between text-stone-500">
                    <span>Table Service & Setup</span>
                    <span className="font-medium text-emerald-700">Complimentary</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-stone-950 pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer group"
              >
                <span>Proceed to Order Summary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant kitchen transmission · Demo checkout flow</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
