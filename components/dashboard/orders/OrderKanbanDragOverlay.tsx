import type { OrderBoardCard } from '@/lib/dashboard/orders/types';

type OrderKanbanDragOverlayProps = {
  card: OrderBoardCard;
};

export function OrderKanbanDragOverlay({ card }: OrderKanbanDragOverlayProps) {
  return (
    <article className='cursor-grabbing select-none rounded-lg border border-slate-200 bg-white p-3 shadow-lg'>
      <h3 className='font-bold text-slate-950'>{card.title}</h3>
    </article>
  );
}
