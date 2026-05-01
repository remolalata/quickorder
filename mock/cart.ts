import type { CartItem } from '@/lib/cart/types';

export const cartItems = [
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    options: '1x Extra Patty, No Onions',
    price: 145,
    quantity: 1,
    imageAlt: 'Classic Burger',
    imageSrc: 'https://placehold.co/64x64.png',
  },
  {
    id: 'crispy-chicken-wrap',
    name: 'Crispy Chicken Wrap',
    options: '1x Garlic Sauce, Extra Lettuce',
    price: 120,
    quantity: 1,
    imageAlt: 'Crispy Chicken Wrap',
    imageSrc: 'https://placehold.co/64x64.png',
  },
] as const satisfies readonly CartItem[];
