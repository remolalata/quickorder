import type { AppNavigationItem } from './types';

export const APP_SEARCH_INPUT_ID = 'app-search';
export const APP_SEARCH_FOCUS_STORAGE_KEY = 'quickorder:focus-search';
export const APP_MENU_ROUTE = '/menu';
export const APP_ORDER_ROUTE = '/order';

export const appNavigationItems = [
  { label: 'menu', icon: 'menu', href: APP_MENU_ROUTE },
  { label: 'search', icon: 'search', action: 'search' },
  { label: 'cart', icon: 'cart', href: '/cart' },
  { label: 'order', icon: 'order', href: APP_ORDER_ROUTE },
] as const satisfies readonly AppNavigationItem[];
