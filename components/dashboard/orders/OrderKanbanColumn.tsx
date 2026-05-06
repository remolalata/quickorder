import { memo, useMemo } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import type { OrderBoardColumn } from '@/lib/dashboard/orders/types';

import { OrderKanbanCard } from './OrderKanbanCard';

type OrderKanbanColumnProps = {
  column: OrderBoardColumn;
};

const columnIndicatorClassNames = {
  new: 'bg-amber-500',
  preparing: 'bg-blue-500',
  ready: 'bg-green-700',
  completed: 'bg-slate-300',
} satisfies Record<OrderBoardColumn['id'], string>;

export const OrderKanbanColumn = memo(function OrderKanbanColumn({
  column,
}: OrderKanbanColumnProps) {
  const { setNodeRef } = useDroppable({ id: column.id });
  const cardIds = useMemo(() => column.cards.map((card) => card.id), [column.cards]);

  return (
    <section ref={setNodeRef} className={`min-h-72`}>
      <div className='flex justify-between items-center gap-3 mb-3'>
        <div className='flex items-center gap-3 min-w-0'>
          <span
            className={`${columnIndicatorClassNames[column.id]} rounded-full w-2.5 h-2.5 shrink-0`}
          />
          <h2 className='font-semibold text-slate-600 truncate'>{column.title}</h2>
        </div>
        <span className='bg-white px-2 py-1 rounded-full font-bold text-slate-500 text-xs'>
          {column.cards.length}
        </span>
      </div>

      <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
        <div className='flex flex-col gap-3'>
          {column.cards.map((card) => (
            <OrderKanbanCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>
    </section>
  );
});
