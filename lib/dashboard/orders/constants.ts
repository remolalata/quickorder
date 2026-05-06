import { labels } from '@/content/labels';

import type { OrderBoardColumnId, OrderBoardColumns } from './types';

export const orderBoardColumnOrder = [
  'new',
  'preparing',
  'ready',
  'completed',
] as const satisfies readonly OrderBoardColumnId[];

export const initialOrderBoardColumns = {
  new: {
    id: 'new',
    title: labels.order.status.new,
    cards: [
      { id: 'order-a-104', title: '#A-104' },
      { id: 'order-a-105', title: '#A-105' },
    ],
  },
  preparing: {
    id: 'preparing',
    title: labels.order.status.preparing,
    cards: [{ id: 'order-a-106', title: '#A-106' }],
  },
  ready: {
    id: 'ready',
    title: labels.order.status.ready,
    cards: [{ id: 'order-a-107', title: '#A-107' }],
  },
  completed: {
    id: 'completed',
    title: labels.order.status.completed,
    cards: [],
  },
} satisfies OrderBoardColumns;
