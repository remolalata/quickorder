import type { MenuCategory, MenuTag } from '@/lib/menu/types';

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
