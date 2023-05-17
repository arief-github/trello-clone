import { useDragLayer } from "react-dnd";
import { CustomDragLayerContainer } from "./CustomDragLayerContainer";
import { DragPreviewWrapper } from "../DragPreviewWrapper";

import Column  from "../../Column/Column";
import Card from "../../Card/Card";

import { useAppState } from "../../../hooks/useAppState";

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor) => ({
        currentOffset: monitor.getSourceClientOffset()
    }))

    return draggedItem && currentOffset ? (
        <CustomDragLayerContainer>
                <DragPreviewWrapper position={currentOffset}>
                    {
                        draggedItem.type === "COLUMN" ? (
                            <Column 
                                id={draggedItem.id} 
                                text={draggedItem.text} 
                                isPreview
                            />
                        ) : (
                            <Card
                                columnId={draggedItem.columnId}
                                isPreview
                                id={draggedItem.id}
                                text={draggedItem.text}
                            />
                        )
                    }
                </DragPreviewWrapper>
            </CustomDragLayerContainer>
    ) : null
}
