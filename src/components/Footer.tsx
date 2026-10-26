import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="hours-location" className="bg-stone-950 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <span className="text-xl font-serif-display font-semibold text-stone-100 tracking-tight">
                Savory Table
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Modern California bistro offering handcrafted seasonal cuisine, in-house table ordering, and expedited artisanal delivery.
            </p>
            <p className="text-xs text-stone-500">
              Executive Chef: Marcus Moreau
            </p>
          </div>

          {/* Service Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-200 uppercase tracking-wide">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Bistro & Delivery Hours</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex justify-between">
                <span>Monday – Thursday</span>
                <span className="text-stone-200 tabular-nums">11:30 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday – Saturday</span>
                <span className="text-stone-200 tabular-nums">11:30 AM – 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Brunch & Dinner</span>
                <span className="text-stone-200 tabular-nums">10:30 AM – 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-200 uppercase tracking-wide">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Location & Reservations</span>
            </div>
            <div className="space-y-2 text-xs text-stone-400">
              <p>424 Montgomery Street</p>
              <p>Financial District, San Francisco, CA 94104</p>
              <div className="pt-2 flex items-center gap-2 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>(415) 890-4200</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-amber-500" />
                <span>reservations@savorytable.com</span>
              </div>
            </div>
          </div>

          {/* Dietary Standards */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-stone-200 uppercase tracking-wide">
              Hospitality Standards
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              We accommodate gluten-free, vegan, and nut-sensitive guests. Please specify any allergy notes during checkout or table selection.
            </p>
            <div className="text-xs text-stone-400 pt-2 border-t border-stone-800/80">
              <span>Valet parking available on Bush St after 5:00 PM.</span>
            </div>
          </div>

        </div>

        {/* Clean 1-Line Footer Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Savory Table Bistro LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer">Nutritional Information</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
