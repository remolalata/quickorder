import type { AppNavigationItem, DashboardNavigationItem } from './types';

export const APP_SEARCH_INPUT_ID = 'app-search';
export const APP_SEARCH_FOCUS_STORAGE_KEY = 'quickorder:focus-search';
export const APP_MENU_ROUTE = '/menu';
export const APP_ORDER_ROUTE = '/order';
export const DASHBOARD_ROUTE = '/dashboard';
export const DASHBOARD_ORDERS_ROUTE = `${DASHBOARD_ROUTE}/orders`;
export const DASHBOARD_MENU_ROUTE = `${DASHBOARD_ROUTE}/menu`;
export const DASHBOARD_CUSTOMER_ROUTE = `${DASHBOARD_ROUTE}/customer`;
export const DASHBOARD_SETTINGS_ROUTE = `${DASHBOARD_ROUTE}/settings`;

export const appNavigationItems = [
  { label: 'menu', icon: 'menu', href: APP_MENU_ROUTE },
  { label: 'search', icon: 'search', action: 'search' },
  { label: 'cart', icon: 'cart', href: '/cart' },
  { label: 'order', icon: 'order', href: APP_ORDER_ROUTE },
] as const satisfies readonly AppNavigationItem[];

export const dashboardNavigationItems = [
  { label: 'dashboard', icon: 'dashboard', href: DASHBOARD_ROUTE },
  { label: 'orders', icon: 'orders', href: DASHBOARD_ORDERS_ROUTE },
  { label: 'menu', icon: 'menu', href: DASHBOARD_MENU_ROUTE },
  { label: 'customer', icon: 'customer', href: DASHBOARD_CUSTOMER_ROUTE },
  { label: 'settings', icon: 'settings', href: DASHBOARD_SETTINGS_ROUTE },
] as const satisfies readonly DashboardNavigationItem[];
