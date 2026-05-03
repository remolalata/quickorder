export type MenuCategory = 'Meal' | 'Drink' | 'Dessert' | 'Snack';

export type MenuTag = 'Best Seller' | 'New' | 'Promo' | 'Popular';

export type MenuProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageAlt: string;
  imageSrc: string;
  addOns: MenuProductAddOn[];
};

export type MenuProductAddOn = {
  id: string;
  label: string;
  price: number;
};
