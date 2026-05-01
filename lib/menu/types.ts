export type MenuCategory = 'Meal' | 'Drink' | 'Dessert' | 'Snack';

export type MenuTag = 'Best Seller' | 'New' | 'Promo' | 'Popular';

export type MenuProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageAlt: string;
  imageSrc: string;
};
