'use client';

import { useCallback, useState } from 'react';
import {
  closestCorners,
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { initialOrderBoardColumns, orderBoardColumnOrder } from '@/lib/dashboard/orders/constants';
import type {
  OrderBoardCard,
  OrderBoardColumnId,
  OrderBoardColumns,
} from '@/lib/dashboard/orders/types';

import { OrderKanbanColumn } from './OrderKanbanColumn';
import { OrderKanbanDragOverlay } from './OrderKanbanDragOverlay';

export function OrderKanbanBoard() {
  const [columns, setColumns] = useState<OrderBoardColumns>(initialOrderBoardColumns);
  const [activeCard, setActiveCard] = useState<OrderBoardCard | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = useCallback(
    ({ active }: DragStartEvent) => {
      setActiveCard(findCardById(columns, String(active.id)) ?? null);
    },
    [columns],
  );

  const handleDragEnd = useCallback(({ active, over }: DragEndEvent) => {
    setActiveCard(null);

    if (!over || active.id === over.id) {
      return;
    }

    const activeCardId = String(active.id);
    const overId = String(over.id);

    setColumns((currentColumns) => {
      const sourceColumnId = findColumnIdByCard(currentColumns, activeCardId);
      const targetColumnId = isColumnId(overId)
        ? overId
        : findColumnIdByCard(currentColumns, overId);

      if (!sourceColumnId || !targetColumnId) {
        return currentColumns;
      }

      return moveCard({
        columns: currentColumns,
        activeCardId,
        overId,
        sourceColumnId,
        targetColumnId,
      });
    });
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveCard(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className='gap-8 grid lg:grid-cols-4'>
        {orderBoardColumnOrder.map((columnId) => (
          <OrderKanbanColumn key={columnId} column={columns[columnId]} />
        ))}
      </div>
      <DragOverlay>{activeCard && <OrderKanbanDragOverlay card={activeCard} />}</DragOverlay>
    </DndContext>
  );
}

function moveCard({
  columns,
  activeCardId,
  overId,
  sourceColumnId,
  targetColumnId,
}: {
  columns: OrderBoardColumns;
  activeCardId: string;
  overId: string;
  sourceColumnId: OrderBoardColumnId;
  targetColumnId: OrderBoardColumnId;
}): OrderBoardColumns {
  const sourceCards = columns[sourceColumnId].cards;
  const targetCards = columns[targetColumnId].cards;
  const sourceIndex = sourceCards.findIndex((card) => card.id === activeCardId);
  const targetIndex = targetCards.findIndex((card) => card.id === overId);

  if (sourceIndex === -1) {
    return columns;
  }

  if (sourceColumnId === targetColumnId) {
    return {
      ...columns,
      [sourceColumnId]: {
        ...columns[sourceColumnId],
        cards: arrayMove(
          sourceCards,
          sourceIndex,
          targetIndex === -1 ? sourceCards.length : targetIndex,
        ),
      },
    };
  }

  const activeCard = sourceCards[sourceIndex];

  if (!activeCard) {
    return columns;
  }

  const nextSourceCards = sourceCards.filter((card) => card.id !== activeCardId);
  const nextTargetCards = insertCard(targetCards, activeCard, targetIndex);

  return {
    ...columns,
    [sourceColumnId]: {
      ...columns[sourceColumnId],
      cards: nextSourceCards,
    },
    [targetColumnId]: {
      ...columns[targetColumnId],
      cards: nextTargetCards,
    },
  };
}

function insertCard(cards: OrderBoardCard[], card: OrderBoardCard, index: number) {
  const insertIndex = index === -1 ? cards.length : index;

  return [...cards.slice(0, insertIndex), card, ...cards.slice(insertIndex)];
}

function findColumnIdByCard(columns: OrderBoardColumns, cardId: string) {
  return orderBoardColumnOrder.find((columnId) =>
    columns[columnId].cards.some((card) => card.id === cardId),
  );
}

function findCardById(columns: OrderBoardColumns, cardId: string) {
  const columnId = findColumnIdByCard(columns, cardId);

  return columnId ? columns[columnId].cards.find((card) => card.id === cardId) : undefined;
}

function isColumnId(id: string): id is OrderBoardColumnId {
  return orderBoardColumnOrder.some((columnId) => columnId === id);
}
