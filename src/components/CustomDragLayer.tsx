import { useDragLayer } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { CustomDragLayerContainer } from "../styles";
import { Column } from "./Column";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <Column id={draggedItem.id} text={draggedItem.text} isPreview />
    </CustomDragLayerContainer>
  ) : null;
};
