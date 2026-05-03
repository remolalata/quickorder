import type { MenuCategory, MenuProduct, MenuTag } from '@/lib/menu/types';

export const menuCategories = [
  'Meal',
  'Drink',
  'Dessert',
  'Snack',
] as const satisfies readonly MenuCategory[];

export const menuTags = [
  'Best Seller',
  'New',
  'Promo',
  'Popular',
] as const satisfies readonly MenuTag[];

export const menuProducts = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    description: 'Juicy flame-grilled beef patty, fresh veggies, and our signature sauce.',
    price: 145,
    imageAlt: 'Classic Burger',
    imageSrc: 'https://placehold.co/600x400.png',
    addOns: [
      { id: 'cheese', label: 'Cheese', price: 20 },
      { id: 'egg', label: 'Egg', price: 25 },
      { id: 'bacon', label: 'Bacon', price: 35 },
    ],
  },
  {
    id: 'crispy-chicken-wrap',
    name: 'Crispy Chicken Wrap',
    description: 'Golden chicken strips, crisp lettuce, tomatoes, and creamy garlic sauce.',
    price: 120,
    imageAlt: 'Crispy Chicken Wrap',
    imageSrc: 'https://placehold.co/600x400.png',
    addOns: [
      { id: 'cheese', label: 'Cheese', price: 20 },
      { id: 'extra-chicken', label: 'Extra chicken', price: 45 },
      { id: 'garlic-sauce', label: 'Garlic sauce', price: 15 },
    ],
  },
  {
    id: 'mango-cheesecake',
    name: 'Mango Cheesecake',
    description: 'Creamy cheesecake topped with ripe mango glaze and buttery crumbs.',
    price: 95,
    imageAlt: 'Mango Cheesecake',
    imageSrc: 'https://placehold.co/600x400.png',
    addOns: [
      { id: 'mango-glaze', label: 'Mango glaze', price: 20 },
      { id: 'whipped-cream', label: 'Whipped cream', price: 15 },
      { id: 'butter-crumbs', label: 'Butter crumbs', price: 15 },
    ],
  },
] as const satisfies readonly MenuProduct[];
