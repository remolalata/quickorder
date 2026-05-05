import { labels } from '@/content/labels';

import type {
  OrderPageContent,
  OrderStatusLabel,
  OrderStatusTrackerContent,
  OrderStatusTrackerKey,
  OrderStatusTrackerState,
  OrderStatusTrackerStyleKey,
  OrderSummaryContent,
  StatusStyle,
} from './types';

export const FALLBACK_STATUS = 'default';

const defaultStatusStyle: StatusStyle = {
  badge: 'bg-slate-100 text-slate-700',
  dot: 'bg-slate-500',
};

export const statusStyles = {
  default: defaultStatusStyle,
  new: defaultStatusStyle,
  open: {
    badge: 'bg-green-100 text-green-700',
    dot: 'bg-green-500',
  },
  accepted: {
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
  },
  preparing: {
    badge: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-500',
  },
  ready: {
    badge: 'bg-cyan-100 text-cyan-700',
    dot: 'bg-cyan-500',
  },
  completed: {
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-500',
  },
  cancelled: {
    badge: 'bg-red-100 text-red-700',
    dot: 'bg-red-500',
  },
  declined: {
    badge: 'bg-zinc-100 text-zinc-700',
    dot: 'bg-zinc-500',
  },
} satisfies Record<OrderStatusLabel, StatusStyle>;

export const orderStatusTrackerContent = {
  title: 'Order Status',
  currentStatus: 'preparing',
  steps: {
    new: {
      label: labels.order.status.new,
      description: 'Order received by the kitchen',
      icon: 'receipt',
    },
    preparing: {
      label: labels.order.status.preparing,
      description: 'Chef is crafting your meal',
      icon: 'cooking',
    },
    ready: {
      label: labels.order.status.ready,
      description: 'Pick up at the counter',
      icon: 'ready',
    },
  },
} satisfies OrderStatusTrackerContent;

export const orderStatusTrackerOrder = [
  'new',
  'preparing',
  'ready',
] as const satisfies readonly OrderStatusTrackerKey[];

export const orderStatusTrackerStyles = {
  complete: {
    icon: 'bg-green-100',
    line: 'bg-green-200',
    label: '',
    description: 'text-slate-500',
  },
  current: {
    icon: 'bg-amber-500 text-white',
    line: 'bg-amber-200',
    label: '',
    description: 'text-slate-500',
  },
  upcoming: {
    icon: 'bg-slate-100',
    line: 'bg-slate-200',
    label: 'text-slate-400',
    description: 'text-slate-400',
  },
} satisfies Record<OrderStatusTrackerState, Record<OrderStatusTrackerStyleKey, string>>;

export const orderSummaryContent = {
  title: 'Order Summary',
} satisfies OrderSummaryContent;

export const orderPageContent = {
  actions: {
    placeAnotherOrder: 'Place Another Order',
  },
} satisfies OrderPageContent;
