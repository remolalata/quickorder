import type { labels } from '@/content/labels';
import type { CartItem } from '@/lib/cart/types';

import type { FALLBACK_STATUS } from './constants';

export type OrderStatusLabel = keyof typeof labels.order.status;
export type OrderStatusValue = Exclude<OrderStatusLabel, typeof FALLBACK_STATUS>;

export type StatusStyle = {
  badge: string;
  dot: string;
};

export type OrderStatusProps = {
  status: OrderStatusValue | (string & {});
};

export type OrderStatusTrackerKey = 'new' | 'preparing' | 'ready';
export type OrderStatusTrackerState = 'complete' | 'current' | 'upcoming';
export type OrderStatusTrackerIcon = 'receipt' | 'cooking' | 'ready';
export type OrderStatusTrackerStyleKey = 'icon' | 'line' | 'label' | 'description';

export type OrderStatusTrackerContentStep = {
  label: string;
  description: string;
  icon: OrderStatusTrackerIcon;
};

export type OrderStatusTrackerContent = {
  title: string;
  currentStatus: OrderStatusTrackerKey;
  steps: Record<OrderStatusTrackerKey, OrderStatusTrackerContentStep>;
};

export type OrderStatusTrackerStep = OrderStatusTrackerContentStep & {
  key: OrderStatusTrackerKey;
  state: OrderStatusTrackerState;
};

export type OrderSummaryContent = {
  title: string;
};

export type OrderSummaryProps = {
  items: readonly CartItem[];
};

export type OrderPageContent = {
  actions: {
    placeAnotherOrder: string;
  };
};
