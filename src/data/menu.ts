import { Dish } from '../types';

export const MENU_ITEMS: Dish[] = [
  // STARTERS
  {
    id: 'starter-burrata',
    name: 'Heirloom Burrata & Charred Peaches',
    category: 'starters',
    price: 18.5,
    description: 'Pugliese creamy burrata paired with wood-grilled organic peaches, wild arugula, 12-year Modena balsamic glaze, and hand-torn toasted rustic sourdough.',
    ingredients: ['Fresh Burrata', 'Organic Peaches', 'Wild Arugula', 'Aged Balsamic', 'Fleur de Sel', 'Extra Virgin Olive Oil'],
    isVegetarian: true,
    isPopular: true,
    calories: 420,
    prepTime: '8-10 min',
    allergens: ['Dairy', 'Gluten'],
    visualType: 'burrata',
    options: [
      { id: 'opt-burrata-prosciutto', name: 'Add San Daniele Prosciutto (+4.50)', price: 4.5 },
      { id: 'opt-burrata-extra-bread', name: 'Extra Grilled Sourdough (+2.50)', price: 2.5 }
    ]
  },
  {
    id: 'starter-polenta',
    name: 'Crispy Truffle Polenta Bites',
    category: 'starters',
    price: 16.0,
    description: 'Golden stone-ground polenta cubes crisped to perfection, layered with fontina cheese, shaved black summer truffle, and roasted garlic rosemary aioli.',
    ingredients: ['Stone-Ground Polenta', 'Fontina Fonduta', 'Black Truffle', 'Fresh Rosemary', 'Roasted Garlic Aioli'],
    isVegetarian: true,
    isPopular: false,
    calories: 380,
    prepTime: '10-12 min',
    allergens: ['Dairy', 'Eggs'],
    visualType: 'polenta',
    options: [
      { id: 'opt-polenta-parm', name: 'Double Shaved Parmigiano (+2.00)', price: 2.0 },
      { id: 'opt-polenta-aioli', name: 'Extra Rosemary Aioli (+1.50)', price: 1.5 }
    ]
  },
  {
    id: 'starter-bisque',
    name: 'Roasted Butternut Velouté',
    category: 'starters',
    price: 15.5,
    description: 'Silky roasted squash soup enriched with brown butter, spiced pepitas, sage oil, and a dollop of crème fraîche.',
    ingredients: ['Organic Butternut', 'Cultured Brown Butter', 'Crispy Sage', 'Spiced Pumpkin Seeds', 'Crème Fraîche'],
    isVegetarian: true,
    isPopular: false,
    calories: 310,
    prepTime: '7-9 min',
    allergens: ['Dairy'],
    visualType: 'soup',
    options: [
      { id: 'opt-soup-bread', name: 'Warm Brioche Roll (+2.00)', price: 2.0 }
    ]
  },

  // MAINS
  {
    id: 'main-truffle-pasta',
    name: 'Handcrafted Truffle Tagliatelle',
    category: 'mains',
    price: 29.5,
    description: 'Hand-rolled egg ribbons emulsified in 24-month Parmigiano Reggiano butter, topped with generous shavings of fresh black Umbrian truffle and chive blossoms.',
    ingredients: ['Handmade Egg Pasta', 'Umbrian Black Truffle', 'Cultured Mountain Butter', 'Parmigiano Reggiano', 'Cracked Tellicherry Pepper'],
    isVegetarian: true,
    isPopular: true,
    calories: 680,
    prepTime: '14-16 min',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    visualType: 'pasta',
    options: [
      { id: 'opt-pasta-extra-truffle', name: 'Extra Shaved Truffle (+6.00)', price: 6.0 },
      { id: 'opt-pasta-wild-mushrooms', name: 'Add Sautéed Morel Mushrooms (+5.00)', price: 5.0 }
    ]
  },
  {
    id: 'main-wagyu-ribeye',
    name: 'Prime Dry-Aged Ribeye (12oz)',
    category: 'mains',
    price: 48.0,
    description: 'Cast-iron seared 28-day dry-aged beef basted in bone marrow herb butter, served with roasted shallot confit, charred broccolini, and red wine jus.',
    ingredients: ['Prime Angus Beef', 'Bone Marrow Herb Butter', 'Roasted Confit Shallots', 'Charred Broccolini', 'Cabernet Reduction'],
    isVegetarian: false,
    isPopular: true,
    calories: 890,
    prepTime: '18-22 min',
    allergens: ['Dairy'],
    visualType: 'steak',
    options: [
      { id: 'opt-steak-temp-mr', name: 'Medium-Rare (Recommended)', price: 0 },
      { id: 'opt-steak-temp-m', name: 'Medium', price: 0 },
      { id: 'opt-steak-chimichurri', name: 'House Herb Chimichurri (+2.50)', price: 2.5 },
      { id: 'opt-steak-truffle-fries', name: 'Side of Truffle Fries (+6.50)', price: 6.5 }
    ]
  },
  {
    id: 'main-chilean-seabass',
    name: 'Pan-Roasted Wild Seabass',
    category: 'mains',
    price: 42.0,
    description: 'Sustainably caught wild sea bass with crisp skin, over sweet pea and mint purée, roasted baby heirloom carrots, and saffron lemon emulsion.',
    ingredients: ['Wild Chilean Sea Bass', 'English Pea Puree', 'Glazed Baby Carrots', 'Saffron Emulsion', 'Fennel Pollen'],
    isVegetarian: false,
    isPopular: false,
    calories: 540,
    prepTime: '15-18 min',
    allergens: ['Fish', 'Dairy'],
    visualType: 'salmon',
    options: [
      { id: 'opt-fish-caviar', name: 'Sturgeon Caviar Garnish (+9.00)', price: 9.0 }
    ]
  },
  {
    id: 'main-mushroom-risotto',
    name: 'Wood-Fired Wild Morel Risotto',
    category: 'mains',
    price: 27.0,
    description: 'Acquerello carnaroli rice simmered slowly in rich mushroom reduction with foraged chanterelles, porcini, thyme oil, and aged Pecorino Romano.',
    ingredients: ['Acquerello Carnaroli Rice', 'Foraged Chanterelles', 'Dried Porcini Broth', 'Pecorino Romano', 'Fresh Thyme'],
    isVegetarian: true,
    isPopular: true,
    calories: 610,
    prepTime: '16-18 min',
    allergens: ['Dairy'],
    visualType: 'risotto',
    options: [
      { id: 'opt-risotto-crispy-parm', name: 'Crispy Parmesan Crisp (+2.00)', price: 2.0 },
      { id: 'opt-risotto-truffle-oil', name: 'White Truffle Infusion (+3.50)', price: 3.5 }
    ]
  },

  // DESSERTS
  {
    id: 'dessert-chocolate-fondant',
    name: 'Valrhona Molten Chocolate Fondant',
    category: 'desserts',
    price: 14.5,
    description: 'Warm 70% dark Guanaja chocolate cake with an unctuous molten center, accompanied by Madagascar vanilla bean gelato and tart raspberry coulis.',
    ingredients: ['Valrhona 70% Guanaja Chocolate', 'Farm Fresh Butter', 'Bourbon Vanilla Bean', 'Fresh Raspberries', 'Mint'],
    isVegetarian: true,
    isPopular: true,
    calories: 520,
    prepTime: '10-12 min',
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    visualType: 'fondant',
    options: [
      { id: 'opt-cake-extra-gelato', name: 'Double Vanilla Gelato (+3.00)', price: 3.0 }
    ]
  },
  {
    id: 'dessert-lemon-tart',
    name: 'Meyer Lemon & Thyme Tart',
    category: 'desserts',
    price: 13.0,
    description: 'Crisp shortcrust pastry filled with zesty Meyer lemon curd, lightly torched Italian meringue peaks, and candied lemon thyme sprigs.',
    ingredients: ['Meyer Lemon Curd', 'Almond Sable Pastry', 'Italian Meringue', 'Wild Thyme', 'Candied Citrus'],
    isVegetarian: true,
    isPopular: false,
    calories: 410,
    prepTime: '6-8 min',
    allergens: ['Dairy', 'Gluten', 'Eggs', 'Tree Nuts'],
    visualType: 'tart',
    options: [
      { id: 'opt-tart-berries', name: 'Macerated Blackberries (+2.50)', price: 2.5 }
    ]
  },
  {
    id: 'dessert-affogato',
    name: 'Pistachio Gelato Artisan Affogato',
    category: 'desserts',
    price: 11.5,
    description: 'Hand-churned Bronte pistachio gelato drowned table-side in a double shot of single-origin Ethiopian espresso with chocolate hazelnut biscotti.',
    ingredients: ['Sicilian Bronte Pistachio', 'Organic Whole Milk', 'Ethiopian Single-Origin Espresso', 'Almond Biscotti'],
    isVegetarian: true,
    isPopular: false,
    calories: 290,
    prepTime: '4-5 min',
    allergens: ['Dairy', 'Tree Nuts', 'Gluten'],
    visualType: 'affogato',
    options: [
      { id: 'opt-affogato-decaf', name: 'Decaf Espresso', price: 0 },
      { id: 'opt-affogato-amaretto', name: 'Shot of Amaretto Liqueur (+5.00)', price: 5.0 }
    ]
  },

  // DRINKS
  {
    id: 'drink-rosemary-old-fashioned',
    name: 'Smoked Rosemary Old Fashioned',
    category: 'drinks',
    price: 17.0,
    description: 'Small-batch Kentucky bourbon, charred rosemary syrup, angostura and orange bitters, presented over a hand-carved ice sphere with cedarwood smoke.',
    ingredients: ['Kentucky Bourbon', 'Torched Rosemary Syrup', 'Angostura Bitters', 'Orange Peel', 'Clear Ice'],
    isVegetarian: true,
    isPopular: true,
    calories: 195,
    prepTime: '4-6 min',
    allergens: [],
    visualType: 'cocktail',
    options: [
      { id: 'opt-cocktail-extra-smoke', name: 'Extra Cedar Smoke Finish', price: 0 }
    ]
  },
  {
    id: 'drink-hibiscus-yuzu',
    name: 'Sparkling Hibiscus & Yuzu Elixir',
    category: 'drinks',
    price: 9.5,
    description: 'Cold-steeped wild hibiscus flowers, Japanese yuzu juice, sparkling mineral water, lemongrass syrup, and fresh crushed mint (Zero Proof).',
    ingredients: ['Wild Hibiscus Petals', 'Japanese Yuzu', 'Sparkling Spring Water', 'Lemongrass', 'Fresh Mint'],
    isVegetarian: true,
    isPopular: true,
    calories: 85,
    prepTime: '3-4 min',
    allergens: [],
    visualType: 'soda',
    options: [
      { id: 'opt-drink-low-sugar', name: 'Light Sweetness', price: 0 }
    ]
  },
  {
    id: 'drink-espresso-tonic',
    name: 'Blood Orange Espresso Tonic',
    category: 'drinks',
    price: 8.5,
    description: 'Artisanal Mediterranean botanical tonic poured over ice, layered with fresh Sicilian blood orange reduction and a floating ristretto shot.',
    ingredients: ['Double Ristretto', 'Fever-Tree Tonic', 'Blood Orange Essence', 'Fresh Rosemary', 'Orange Slice'],
    isVegetarian: true,
    isPopular: false,
    calories: 65,
    prepTime: '3-4 min',
    allergens: [],
    visualType: 'soda',
    options: [
      { id: 'opt-drink-extra-shot', name: 'Extra Espresso Shot (+1.50)', price: 1.5 }
    ]
  }
];
