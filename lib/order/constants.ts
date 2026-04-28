import type { OrderStatusLabel, StatusStyle } from './types';

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
