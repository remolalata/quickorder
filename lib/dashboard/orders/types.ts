export type OrderBoardColumnId = 'new' | 'preparing' | 'ready' | 'completed';

export type OrderBoardCard = {
  id: string;
  title: string;
};

export type OrderBoardColumn = {
  id: OrderBoardColumnId;
  title: string;
  cards: OrderBoardCard[];
};

export type OrderBoardColumns = Record<OrderBoardColumnId, OrderBoardColumn>;
