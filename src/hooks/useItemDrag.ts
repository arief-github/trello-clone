import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { useAppState } from "./useAppState";
import { setDraggedItem } from "../reducers/action/action";
import { DragItem } from '../helper/DragItem';

/**
    type - it'll be CARD or COLUMN
    item - returns dragged item object and dispatches the SET_DRAGGED_ITEM action
    end - is called when we release the item
 */

const useItemDrag = (item: DragItem) => {
    const { dispatch } = useAppState();
    const [, drag, preview] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true })
    }, [preview])

    return { drag }
}

export { useItemDrag };