import React from 'react';
import { X, CheckCircle2, Clock, ChefHat, Sparkles, Utensils, Bike, RotateCcw, Play, Phone, HelpCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderStatus } from '../types';

export const OrderStatusModal: React.FC = () => {
  const {
    activeOrder,
    isOrderStatusOpen,
    setIsOrderStatusOpen,
    advanceOrderStatus,
    resetDemoOrder,
  } = useCart();

  if (!isOrderStatusOpen || !activeOrder) return null;

  const stages: { key: OrderStatus; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      key: 'received',
      label: 'Order Confirmed',
      desc: 'Transmitted to chef station',
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
      key: 'preparing',
      label: 'Kitchen Preparing',
      desc: 'Pan searing, tossing & grilling',
      icon: <ChefHat className="w-5 h-5" />,
    },
    {
      key: 'plating',
      label: 'Quality Plating',
      desc: 'Chef garnishing & packaging',
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      key: 'ready',
      label: activeOrder.diningMode === 'dine-in' ? 'Served to Table' : 'Out for Delivery',
      desc: activeOrder.diningMode === 'dine-in' ? `Presented to Table #${activeOrder.tableDetails?.tableNumber}` : 'Courier en route to your doorstep',
      icon: activeOrder.diningMode === 'dine-in' ? <Utensils className="w-5 h-5" /> : <Bike className="w-5 h-5" />,
    },
    {
      key: 'delivered',
      label: activeOrder.diningMode === 'dine-in' ? 'Enjoy Your Meal!' : 'Delivered Safely',
      desc: 'Bon appétit at Savory Table',
      icon: <CheckCircle2 className="w-5 h-5" />,
    },
  ];

  const currentStageIndex = stages.findIndex(s => s.key === activeOrder.status);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-stone-900 text-stone-100 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span>Live Order Tracker</span>
              <span aria-hidden="true">·</span>
              <span>Order #{activeOrder.id}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif-display font-semibold text-stone-50 mt-1">
              {activeOrder.status === 'delivered' 
                ? (activeOrder.diningMode === 'dine-in' ? 'Table Service Complete' : 'Order Delivered!')
                : 'Your Dishes Are Underway'}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsOrderStatusOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close status tracker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Estimated Time Badge Card */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-amber-800">
                  Estimated Ready Window
                </p>
                <p className="text-xl font-serif-display font-bold text-stone-900 tabular-nums">
                  {activeOrder.status === 'delivered' ? 'Completed' : `${activeOrder.estimatedMinutes} Minutes`}
                </p>
              </div>
            </div>

            <div className="text-xs text-stone-600 text-left sm:text-right">
              <p className="font-semibold text-stone-900">
                {activeOrder.diningMode === 'dine-in'
                  ? `Table #${activeOrder.tableDetails?.tableNumber} (${activeOrder.tableDetails?.area})`
                  : activeOrder.deliveryDetails?.address}
              </p>
              <p className="text-stone-500 mt-0.5">Placed today at {activeOrder.createdAt}</p>
            </div>
          </div>

          {/* Interactive Progress Stepper */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Kitchen & Preparation Milestones
            </h3>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
              {stages.map((stage, idx) => {
                const isCompleted = idx < currentStageIndex;
                const isCurrent = idx === currentStageIndex;
                const isUpcoming = idx > currentStageIndex;

                return (
                  <div key={stage.key} className="relative flex items-start gap-4 group">
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-6 top-0 w-6 h-6 rounded-full flex items-center justify-center transition-all z-10 ${
                        isCompleted
                          ? 'bg-amber-600 text-white'
                          : isCurrent
                          ? 'bg-amber-500 text-white ring-4 ring-amber-100'
                          : 'bg-stone-200 text-stone-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 -mt-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold ${
                          isCurrent ? 'text-amber-800' : isCompleted ? 'text-stone-900' : 'text-stone-400'
                        }`}>
                          {stage.label}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Demo Control Hub for User Testing */}
          <div className="p-4 bg-stone-100/80 rounded-2xl border border-stone-200 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
              <span>Interactive Demo Simulator</span>
              <span className="text-[11px] text-amber-700 font-normal">Auto-advances every 18s</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={advanceOrderStatus}
                disabled={activeOrder.status === 'delivered'}
                className="flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-lg transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Advance to Next Stage</span>
              </button>

              <button
                type="button"
                onClick={resetDemoOrder}
                className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-semibold rounded-lg transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset & Start New Order</span>
              </button>
            </div>
          </div>

          {/* Itemized Receipt Summary */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Order Receipt
            </h4>
            <div className="bg-stone-50 rounded-xl p-3.5 space-y-1.5 text-xs">
              {activeOrder.items.map((item) => (
                <div key={item.id} className="flex justify-between text-stone-700">
                  <span>
                    {item.quantity}× {item.dish.name}
                  </span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    ${((item.dish.price + item.selectedOptions.reduce((s, o) => s + o.price, 0)) * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="pt-2 border-t border-stone-200 flex justify-between font-bold text-stone-950 text-sm">
                <span>Total Paid ({activeOrder.paymentMethod === 'card' ? 'Card •••• 4242' : activeOrder.paymentMethod === 'apple_pay' ? 'Apple Pay' : 'Table Cash'})</span>
                <span className="tabular-nums">${activeOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-500">
            <Phone className="w-3.5 h-3.5 text-stone-400" />
            <span>Need assistance? Staff direct line: (415) 890-4200</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOrderStatusOpen(false)}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Close & Keep Watching
          </button>
        </div>

      </div>

    </div>
  );
};
