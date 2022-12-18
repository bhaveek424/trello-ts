import { DragItem } from "../components/DragItem";

export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean | undefined
): boolean => {
  return Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  );
};
