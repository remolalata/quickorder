import type { labels } from '@/content/labels';

export type AppNavigationLabel = keyof typeof labels.common.navigation.items;
export type AppNavigationIcon = 'menu' | 'search' | 'cart' | 'orders';
export type AppNavigationAction = 'search';

type AppNavigationBaseItem = {
  label: AppNavigationLabel;
  icon: AppNavigationIcon;
};

export type AppNavigationRouteItem = AppNavigationBaseItem & {
  href: string;
};

export type AppNavigationActionItem = AppNavigationBaseItem & {
  action: AppNavigationAction;
};

export type AppNavigationItem = AppNavigationRouteItem | AppNavigationActionItem;
