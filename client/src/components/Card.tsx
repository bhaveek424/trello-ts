import { useRef } from "react";
import { useAppState } from "../state/AppStateContext";
import { CardContainer } from "../styles";
import { isHidden } from "../utils/isHidden";
import { useItemDrag } from "../utils/useItemDrag";
import { moveTask, setDraggedItem } from "../state/actions";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "CARD", id, text, columnId });
  const [, drop] = useDrop({
    accept: "CARD",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type !== "CARD") {
        return;
      }
      if (draggedItem.id === id) {
        return;
      }
      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    }),
  });

  drag(drop(ref));

  return (
    <CardContainer
      isHidden={isHidden(draggedItem, "CARD", id)}
      isPreview={isPreview}
      ref={ref}>
      {text}
    </CardContainer>
  );
};
