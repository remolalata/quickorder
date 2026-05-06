import { memo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import type { OrderBoardCard } from '@/lib/dashboard/orders/types';

type OrderKanbanCardProps = {
  card: OrderBoardCard;
};

export const OrderKanbanCard = memo(function OrderKanbanCard({ card }: OrderKanbanCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
  });

  return (
    <article
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? undefined : transition,
        touchAction: 'none',
        willChange: transform ? 'transform' : undefined,
      }}
      className={`cursor-grab select-none rounded-lg border border-slate-200 bg-white p-4 shadow-sm active:cursor-grabbing ${
        isDragging ? 'opacity-60 shadow-none' : ''
      }`}
      {...attributes}
      {...listeners}
    >
      <h3 className='font-bold text-amber-500'>{card.title}</h3>
    </article>
  );
});
