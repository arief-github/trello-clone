import { useDragLayer } from "react-dnd";
import Column  from "../../Column/Column";
import { CustomDragLayerContainer } from "./CustomDragLayerContainer";
import { DragPreviewWrapper } from "../DragPreviewWrapper";

import { useAppState } from "../../../hooks/useAppState";

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
                <DragPreviewWrapper position={currentOffset}>
                    <Column id={draggedItem.id} text={draggedItem.text} isPreview/>
                </DragPreviewWrapper>
            </CustomDragLayerContainer>
    ) : null
}
