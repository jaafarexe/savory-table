import React from 'react';
import { Dish } from '../types';

interface DishIllustrationProps {
  type: Dish['visualType'];
  className?: string;
  name: string;
}

export const DishIllustration: React.FC<DishIllustrationProps> = ({ type, className = '', name }) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none ${className}`}
      role="img"
      aria-label={name}
    >
      {/* Dynamic Background Studio Lighting Mesh */}
      <div className="absolute inset-0 bg-stone-900 transition-transform duration-500 group-hover:scale-105" />

      {type === 'pasta' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="plate-grad-pasta" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#292524" />
              <stop offset="75%" stopColor="#1c1917" />
              <stop offset="100%" stopColor="#0c0a09" />
            </radialGradient>
            <radialGradient id="pasta-glow" cx="45%" cy="40%" r="40%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#854d0e" />
            </radialGradient>
            <linearGradient id="truffle-dark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>
          {/* Ceramic Plate */}
          <circle cx="200" cy="150" r="125" fill="url(#plate-grad-pasta)" stroke="#44403c" strokeWidth="2" />
          <circle cx="200" cy="150" r="105" fill="#1c1917" stroke="#292524" strokeWidth="1.5" />
          <circle cx="200" cy="150" r="85" fill="#171514" />
          
          {/* Butter & Parmesan Emulsion base */}
          <ellipse cx="200" cy="152" rx="68" ry="48" fill="#eab308" opacity="0.3" filter="blur(6px)" />

          {/* Twirled Tagliatelle Ribbons */}
          <path d="M 150 150 Q 180 120 220 140 T 250 160" fill="none" stroke="url(#pasta-glow)" strokeWidth="10" strokeLinecap="round" />
          <path d="M 160 165 Q 210 110 240 145 T 235 175" fill="none" stroke="url(#pasta-glow)" strokeWidth="9" strokeLinecap="round" />
          <path d="M 145 138 Q 190 170 230 130 T 255 145" fill="none" stroke="url(#pasta-glow)" strokeWidth="8.5" strokeLinecap="round" />
          <path d="M 175 125 Q 215 155 210 175 T 170 160" fill="none" stroke="url(#pasta-glow)" strokeWidth="8" strokeLinecap="round" />
          <path d="M 185 140 Q 200 120 225 150 T 195 170" fill="none" stroke="#fde047" strokeWidth="7" strokeLinecap="round" />

          {/* Black Umbrian Truffle Shavings */}
          <path d="M 180 135 Q 192 128 198 140 Q 190 146 180 135 Z" fill="url(#truffle-dark)" stroke="#52525b" strokeWidth="0.8" />
          <path d="M 215 138 Q 230 132 232 144 Q 220 150 215 138 Z" fill="url(#truffle-dark)" stroke="#52525b" strokeWidth="0.8" />
          <path d="M 195 155 Q 212 150 210 165 Q 196 168 195 155 Z" fill="url(#truffle-dark)" stroke="#52525b" strokeWidth="0.8" />

          {/* Micro Herbs & Cracked Pepper */}
          <circle cx="170" cy="142" r="1.5" fill="#1e293b" />
          <circle cx="225" cy="158" r="1.5" fill="#1e293b" />
          <circle cx="205" cy="132" r="1.5" fill="#1e293b" />
          <circle cx="188" cy="165" r="1.5" fill="#1e293b" />
          {/* Fresh Chives */}
          <line x1="185" y1="130" x2="198" y2="124" stroke="#84cc16" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="212" y1="148" x2="228" y2="142" stroke="#84cc16" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="172" y1="158" x2="184" y2="152" stroke="#84cc16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'steak' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="slate-plate" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#292524" />
              <stop offset="100%" stopColor="#141211" />
            </radialGradient>
            <linearGradient id="steak-sear" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="40%" stopColor="#291206" />
              <stop offset="80%" stopColor="#1c0e04" />
            </linearGradient>
            <radialGradient id="herb-butter" cx="40%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="80%" stopColor="#ca8a04" />
            </radialGradient>
          </defs>
          <rect x="50" y="30" width="300" height="240" rx="16" fill="url(#slate-plate)" stroke="#44403c" strokeWidth="2" />
          {/* Steak Cut Silhouette */}
          <path d="M 120 120 C 130 90, 240 85, 275 110 C 295 130, 285 200, 255 215 C 210 230, 130 220, 115 185 C 105 160, 110 135, 120 120 Z" fill="url(#steak-sear)" stroke="#1a0c02" strokeWidth="2" />
          
          {/* Diamond Grill Char Marks */}
          <line x1="135" y1="110" x2="245" y2="200" stroke="#0a0502" strokeWidth="3.5" opacity="0.8" />
          <line x1="165" y1="98" x2="275" y2="185" stroke="#0a0502" strokeWidth="3.5" opacity="0.8" />
          <line x1="140" y1="190" x2="250" y2="105" stroke="#0a0502" strokeWidth="3.5" opacity="0.8" />
          <line x1="170" y1="210" x2="275" y2="125" stroke="#0a0502" strokeWidth="3.5" opacity="0.8" />

          {/* Melting Bone Marrow & Herb Butter Medallion */}
          <ellipse cx="200" cy="145" rx="20" ry="14" fill="url(#herb-butter)" />
          <ellipse cx="204" cy="150" rx="28" ry="18" fill="#eab308" opacity="0.4" filter="blur(4px)" />

          {/* Rosemary Sprig */}
          <path d="M 195 145 Q 225 135 240 125" fill="none" stroke="#3f6212" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="210" y1="140" x2="208" y2="132" stroke="#4d7c0f" strokeWidth="2" />
          <line x1="220" y1="137" x2="225" y2="129" stroke="#4d7c0f" strokeWidth="2" />
          <line x1="230" y1="132" x2="232" y2="122" stroke="#4d7c0f" strokeWidth="2" />

          {/* Maldon Sea Salt Flakes */}
          <rect x="180" y="132" width="3" height="3" fill="#ffffff" opacity="0.9" transform="rotate(20 180 132)" />
          <rect x="220" y="160" width="3.5" height="3.5" fill="#ffffff" opacity="0.9" transform="rotate(45 220 160)" />
          <rect x="155" y="150" width="2.5" height="2.5" fill="#ffffff" opacity="0.8" />

          {/* Charred Broccolini Side */}
          <path d="M 85 140 Q 105 145 125 155" stroke="#166534" strokeWidth="5" strokeLinecap="round" />
          <circle cx="85" cy="138" r="8" fill="#14532d" />
          <circle cx="92" cy="144" r="6" fill="#15803d" />
        </svg>
      )}

      {type === 'burrata' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="stoneware-bowl" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5f5f4" />
              <stop offset="85%" stopColor="#e7e5e4" />
              <stop offset="100%" stopColor="#d6d3d1" />
            </radialGradient>
            <radialGradient id="burrata-cheese" cx="42%" cy="38%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </radialGradient>
            <linearGradient id="peach-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#7c2d12" />
            </linearGradient>
          </defs>
          {/* Ceramic Dish */}
          <circle cx="200" cy="150" r="120" fill="url(#stoneware-bowl)" stroke="#e7e5e4" strokeWidth="4" />
          <circle cx="200" cy="150" r="102" fill="#fafaf9" />

          {/* EVOO and Balsamic Glaze Swirls */}
          <path d="M 130 180 Q 160 215 220 205 T 265 175" fill="none" stroke="#84cc16" strokeWidth="4" opacity="0.6" strokeLinecap="round" />
          <path d="M 140 130 Q 180 110 240 125 T 260 155" fill="none" stroke="#292524" strokeWidth="2.5" opacity="0.8" strokeLinecap="round" />

          {/* Grilled Peach Wedges */}
          <path d="M 135 125 Q 160 100 175 125 Q 155 145 135 125 Z" fill="url(#peach-grad)" />
          <line x1="145" y1="115" x2="155" y2="135" stroke="#451a03" strokeWidth="2" />
          
          <path d="M 230 160 Q 255 140 265 168 Q 240 185 230 160 Z" fill="url(#peach-grad)" />
          <line x1="242" y1="152" x2="252" y2="172" stroke="#451a03" strokeWidth="2" />

          {/* Plump Burrata Sphere */}
          <ellipse cx="200" cy="150" rx="46" ry="42" fill="url(#burrata-cheese)" stroke="#e2e8f0" strokeWidth="1" />
          {/* Burrata Top Cinch */}
          <path d="M 194 125 Q 200 120 206 125 Q 203 132 194 125 Z" fill="#e2e8f0" />

          {/* Fresh Basil Leaves */}
          <path d="M 165 160 C 150 150, 160 135, 175 145 C 175 155, 170 165, 165 160 Z" fill="#15803d" />
          <path d="M 225 135 C 240 125, 245 140, 235 150 C 225 150, 220 140, 225 135 Z" fill="#16a34a" />
        </svg>
      )}

      {type === 'fondant' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="slate-dessert" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#262626" />
              <stop offset="100%" stopColor="#171717" />
            </radialGradient>
            <linearGradient id="choc-cake" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#451a03" />
              <stop offset="100%" stopColor="#291206" />
            </linearGradient>
            <radialGradient id="choc-lava" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b0764" />
              <stop offset="60%" stopColor="#1c0c04" />
              <stop offset="100%" stopColor="#0f0702" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="150" r="120" fill="url(#slate-dessert)" stroke="#404040" strokeWidth="2" />
          
          {/* Raspberry Coulis Swirl */}
          <path d="M 120 190 Q 150 230 240 220 Q 280 200 270 150" fill="none" stroke="#be123c" strokeWidth="6" strokeLinecap="round" />

          {/* Warm Fondant Cake */}
          <ellipse cx="180" cy="165" rx="48" ry="34" fill="url(#choc-cake)" />
          <path d="M 132 165 Q 132 135 180 135 Q 228 135 228 165 Z" fill="#381907" />
          
          {/* Molten Lava Center Spilling Out */}
          <path d="M 170 165 C 160 175, 175 195, 195 195 C 215 195, 215 175, 195 165 Z" fill="#1a0c02" />
          <ellipse cx="190" cy="184" rx="20" ry="10" fill="#240e02" />

          {/* Vanilla Gelato Quenelle */}
          <ellipse cx="235" cy="140" rx="22" ry="16" fill="#fef9c3" stroke="#fef08a" strokeWidth="1" transform="rotate(-15 235 140)" />

          {/* Fresh Raspberry & Mint */}
          <circle cx="250" cy="165" r="7" fill="#e11d48" />
          <circle cx="260" cy="168" r="6" fill="#be123c" />
          <path d="M 235 125 Q 242 118 248 122 Q 242 130 235 125 Z" fill="#22c55e" />
        </svg>
      )}

      {type === 'salmon' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="122" fill="#262626" stroke="#404040" strokeWidth="2" />
          <circle cx="200" cy="150" r="95" fill="#1c1917" />
          {/* Pea & Mint Puree base */}
          <ellipse cx="190" cy="160" rx="65" ry="45" fill="#65a30d" opacity="0.85" />
          {/* Crisp Pan-Seared Seabass Fillet */}
          <path d="M 145 140 Q 195 120 245 135 Q 250 165 240 180 Q 185 195 140 175 Z" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          {/* Golden Crisp Skin */}
          <path d="M 146 142 Q 195 125 244 137 L 242 150 Q 195 138 144 154 Z" fill="#b45309" />
          {/* Saffron Drops & Microgreens */}
          <circle cx="160" cy="180" r="3" fill="#eab308" />
          <circle cx="230" cy="175" r="3.5" fill="#eab308" />
          <line x1="180" y1="130" x2="195" y2="125" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
          <line x1="205" y1="135" x2="218" y2="132" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'risotto' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="120" fill="#292524" stroke="#44403c" strokeWidth="2" />
          <circle cx="200" cy="150" r="92" fill="#1c1917" />
          {/* Creamy Carnaroli Rice bed */}
          <ellipse cx="200" cy="150" rx="72" ry="52" fill="#d97706" opacity="0.3" filter="blur(6px)" />
          <ellipse cx="200" cy="150" rx="66" ry="46" fill="#fef3c7" opacity="0.9" />
          {/* Sauteed Morel & Chanterelle mushrooms */}
          <path d="M 175 140 Q 190 125 195 140 Q 185 155 175 140 Z" fill="#78350f" />
          <path d="M 205 145 Q 220 135 225 150 Q 210 162 205 145 Z" fill="#92400e" />
          <path d="M 185 160 Q 200 152 205 165 Q 192 172 185 160 Z" fill="#451a03" />
          {/* Thyme sprig */}
          <line x1="170" y1="135" x2="225" y2="155" stroke="#4d7c0f" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'cocktail' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          {/* Lowball Tumbler Glass */}
          <path d="M 145 80 L 155 225 Q 155 235 165 235 L 235 235 Q 245 235 245 225 L 255 80 Z" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" />
          {/* Amber Bourbon Liquid */}
          <path d="M 152 145 L 158 220 Q 158 228 168 228 L 232 228 Q 242 228 242 220 L 248 145 Z" fill="#b45309" fillOpacity="0.85" />
          {/* Crystal Clear Carved Ice Cube */}
          <rect x="175" y="145" width="50" height="50" rx="6" fill="#ffffff" fillOpacity="0.35" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
          {/* Flamed Rosemary Sprig */}
          <path d="M 195 160 Q 210 90 220 65" stroke="#365314" strokeWidth="3" strokeLinecap="round" />
          <line x1="205" y1="120" x2="215" y2="115" stroke="#4d7c0f" strokeWidth="2.5" />
          <line x1="210" y1="100" x2="222" y2="95" stroke="#4d7c0f" strokeWidth="2.5" />
          <line x1="215" y1="80" x2="228" y2="75" stroke="#4d7c0f" strokeWidth="2.5" />
          {/* Orange Peel Twist */}
          <path d="M 160 135 Q 170 120 185 130" fill="none" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      )}

      {type === 'soda' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          {/* Highball Tall Glass */}
          <rect x="160" y="60" width="80" height="180" rx="8" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Hibiscus Yuzu Gradient Fluid */}
          <rect x="163" y="105" width="74" height="130" rx="6" fill="#be123c" fillOpacity="0.8" />
          {/* Ice Blocks */}
          <rect x="175" y="115" width="28" height="28" rx="4" fill="#ffffff" fillOpacity="0.4" />
          <rect x="195" y="155" width="28" height="28" rx="4" fill="#ffffff" fillOpacity="0.4" />
          {/* Effervescent Bubbles */}
          <circle cx="180" cy="180" r="2.5" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="190" cy="200" r="2" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="215" cy="135" r="2" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="205" cy="170" r="1.5" fill="#ffffff" fillOpacity="0.7" />
          {/* Yuzu Citrus Wheel Rim */}
          <ellipse cx="170" cy="62" rx="14" ry="7" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
          {/* Fresh Mint Top */}
          <circle cx="210" cy="62" r="6" fill="#22c55e" />
        </svg>
      )}

      {type === 'tart' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="115" fill="#262626" stroke="#404040" strokeWidth="2" />
          {/* Fluted Pastry Crust */}
          <ellipse cx="200" cy="155" rx="62" ry="44" fill="#d97706" />
          {/* Silky Lemon Curd Layer */}
          <ellipse cx="200" cy="152" rx="55" ry="38" fill="#facc15" />
          {/* Torched Italian Meringue Rosettes */}
          <ellipse cx="180" cy="148" rx="14" ry="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
          <ellipse cx="215" cy="145" rx="14" ry="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
          <ellipse cx="198" cy="162" rx="14" ry="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
          {/* Candied Thyme Garnish */}
          <line x1="175" y1="130" x2="225" y2="165" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {type === 'affogato' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="115" fill="#1c1917" stroke="#38332e" strokeWidth="2" />
          {/* Footed Glass Coupe */}
          <ellipse cx="200" cy="150" rx="58" ry="42" fill="#ffffff" fillOpacity="0.08" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Espresso Pool */}
          <ellipse cx="200" cy="160" rx="46" ry="28" fill="#451a03" />
          {/* Bronte Pistachio Gelato Scoop */}
          <ellipse cx="200" cy="142" rx="28" ry="24" fill="#a3e635" stroke="#84cc16" strokeWidth="1" />
          {/* Crema Swirl */}
          <path d="M 175 160 Q 200 172 225 158" fill="none" stroke="#d97706" strokeWidth="2" opacity="0.8" />
          {/* Crushed Pistachio bits */}
          <rect x="190" y="132" width="3" height="3" fill="#4d7c0f" />
          <rect x="208" y="136" width="3.5" height="3.5" fill="#365314" />
        </svg>
      )}

      {type === 'polenta' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="118" fill="#1c1917" stroke="#38332e" strokeWidth="2" />
          {/* Golden Polenta Cubes */}
          <rect x="145" y="130" width="44" height="40" rx="6" fill="#facc15" stroke="#ca8a04" strokeWidth="2" transform="rotate(-6 145 130)" />
          <rect x="205" y="125" width="44" height="40" rx="6" fill="#facc15" stroke="#ca8a04" strokeWidth="2" transform="rotate(8 205 125)" />
          {/* Truffle Shaving & Rosemary Aioli Drop */}
          <ellipse cx="165" cy="145" rx="8" ry="5" fill="#18181b" />
          <ellipse cx="225" cy="140" rx="8" ry="5" fill="#18181b" />
          <circle cx="200" cy="165" r="9" fill="#fef08a" opacity="0.8" />
        </svg>
      )}

      {type === 'soup' && (
        <svg viewBox="0 0 400 300" className="w-full h-full object-cover">
          <circle cx="200" cy="150" r="120" fill="#292524" stroke="#44403c" strokeWidth="2" />
          <circle cx="200" cy="150" r="90" fill="#1c1917" />
          {/* Golden Butternut Velouté */}
          <circle cx="200" cy="150" r="72" fill="#ea580c" opacity="0.9" />
          {/* Brown Butter & Crème Fraîche Swirl */}
          <path d="M 165 145 Q 200 125 235 150 Q 205 175 165 145 Z" fill="none" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="200" cy="150" r="8" fill="#ffffff" />
          {/* Spiced Pepitas */}
          <circle cx="185" cy="138" r="3" fill="#15803d" />
          <circle cx="215" cy="162" r="3" fill="#15803d" />
          <circle cx="210" cy="135" r="2.5" fill="#15803d" />
        </svg>
      )}

      {/* Subtle Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
