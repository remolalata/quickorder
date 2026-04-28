import type { labels } from '@/content/labels';

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
