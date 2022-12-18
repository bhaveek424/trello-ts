export type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type CardDragItem = {
  index: number;
  id: string;
  columnId: string;
  text: string;
  type: "CARD";
};

export type DragItem = ColumnDragItem | CardDragItem;
