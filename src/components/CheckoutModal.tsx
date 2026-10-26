import React, { useState } from 'react';
import { X, UtensilsCrossed, Bike, CreditCard, DollarSign, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    diningMode,
    setDiningMode,
    tableDetails,
    setTableDetails,
    deliveryDetails,
    setDeliveryDetails,
    cartItems,
    subtotal,
    tax,
    deliveryFee,
    tipAmount,
    total,
    placeOrder,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'table_cash'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleCompleteOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(paymentMethod);
      setIsSubmitting(false);
    }, 800);
  };

  const tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50/70 shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif-display font-semibold text-stone-900">
              Complete Your Order
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Review dining coordinates and transmit order to the kitchen
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsCheckoutOpen(false)}
            className="w-9 h-9 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Step 1: Dining Mode Review */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
                1. Dining Logistics
              </h3>
              <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-xs">
                <button
                  type="button"
                  onClick={() => setDiningMode('dine-in')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    diningMode === 'dine-in' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600'
                  }`}
                >
                  Table Service
                </button>
                <button
                  type="button"
                  onClick={() => setDiningMode('delivery')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    diningMode === 'delivery' ? 'bg-white text-stone-900 shadow-2xs font-semibold' : 'text-stone-600'
                  }`}
                >
                  Delivery
                </button>
              </div>
            </div>

            {diningMode === 'dine-in' ? (
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-2">
                    Select Your Table Number
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tableNumbers.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setTableDetails(prev => ({ ...prev, tableNumber: num }))}
                        className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          tableDetails.tableNumber === num
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Dining Area
                    </label>
                    <select
                      value={tableDetails.area}
                      onChange={(e) => setTableDetails(prev => ({ ...prev, area: e.target.value as any }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="main-dining">Main Dining Hall</option>
                      <option value="patio">Heated Courtyard Patio</option>
                      <option value="chef-counter">Chef's Open Counter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Party Size (Guests)
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={12}
                      value={tableDetails.guestCount}
                      onChange={(e) => setTableDetails(prev => ({ ...prev, guestCount: parseInt(e.target.value) || 1 }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Notes for Table Server (Optional)
                  </label>
                  <input
                    type="text"
                    value={tableDetails.notes}
                    onChange={(e) => setTableDetails(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="e.g. Celebrating an anniversary, please bring extra sparkling water"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            ) : (
              <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200/80 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Recipient Name
                    </label>
                    <input
                      type="text"
                      value={deliveryDetails.customerName}
                      onChange={(e) => setDeliveryDetails(prev => ({ ...prev, customerName: e.target.value }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number (For Delivery Updates)
                    </label>
                    <input
                      type="text"
                      value={deliveryDetails.phone}
                      onChange={(e) => setDeliveryDetails(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      value={deliveryDetails.address}
                      onChange={(e) => setDeliveryDetails(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Apt / Suite
                    </label>
                    <input
                      type="text"
                      value={deliveryDetails.suite}
                      onChange={(e) => setDeliveryDetails(prev => ({ ...prev, suite: e.target.value }))}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Delivery Instructions
                  </label>
                  <input
                    type="text"
                    value={deliveryDetails.instructions}
                    onChange={(e) => setDeliveryDetails(prev => ({ ...prev, instructions: e.target.value }))}
                    placeholder="e.g. Ring doorbell, leave on front porch"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Payment Method */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
              2. Payment Method
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-amber-600 bg-amber-50/50 text-stone-950 ring-1 ring-amber-600'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <CreditCard className="w-5 h-5 text-amber-700" />
                  {paymentMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">Credit / Debit Card</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">Ending in •••• 4242</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('apple_pay')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'apple_pay'
                    ? 'border-amber-600 bg-amber-50/50 text-stone-950 ring-1 ring-amber-600'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="font-bold text-xs bg-stone-900 text-white px-2 py-0.5 rounded-md">Pay</span>
                  {paymentMethod === 'apple_pay' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">Apple Pay / Wallet</p>
                  <p className="text-[11px] text-stone-500 mt-0.5">1-Touch Express</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('table_cash')}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  paymentMethod === 'table_cash'
                    ? 'border-amber-600 bg-amber-50/50 text-stone-950 ring-1 ring-amber-600'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <DollarSign className="w-5 h-5 text-emerald-700" />
                  {paymentMethod === 'table_cash' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900">
                    {diningMode === 'dine-in' ? 'Pay at Table' : 'Cash upon Delivery'}
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">Settle with server</p>
                </div>
              </button>
            </div>
          </div>

          {/* Step 3: Itemized Final Order Review */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
              3. Order Manifest ({cartItems.length} items)
            </h3>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 space-y-2 text-xs">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-1 border-b border-stone-200/50 last:border-0">
                  <div className="text-stone-800">
                    <span className="font-semibold text-stone-950 mr-1.5">{item.quantity}×</span>
                    <span>{item.dish.name}</span>
                    {item.selectedOptions.length > 0 && (
                      <span className="text-stone-500 ml-1">
                        ({item.selectedOptions.map(o => o.name).join(', ')})
                      </span>
                    )}
                  </div>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    ${((item.dish.price + item.selectedOptions.reduce((s, o) => s + o.price, 0)) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="pt-3 border-t border-stone-200 space-y-1 text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (8.5%)</span>
                  <span className="tabular-nums">${tax.toFixed(2)}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="tabular-nums">${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                {tipAmount > 0 && (
                  <div className="flex justify-between">
                    <span>Gratuity</span>
                    <span className="tabular-nums">${tipAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-stone-950 pt-2 border-t border-stone-300">
                  <span>Total Due</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={() => setIsCheckoutOpen(false)}
            className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            &larr; Back to Cart
          </button>

          <button
            type="button"
            onClick={handleCompleteOrder}
            disabled={isSubmitting || cartItems.length === 0}
            className="flex-1 max-w-sm flex items-center justify-center gap-2 py-3.5 px-6 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-98 disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Transmitting to Kitchen...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Confirm & Place Order</span>
                <span>·</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </span>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
