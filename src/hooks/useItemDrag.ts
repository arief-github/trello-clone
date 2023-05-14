import { useDrag } from "react-dnd";
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
    const [, drag] = useDrag({
        type: item.type,
        item: () => {
            dispatch(setDraggedItem(item))
            return item
        },
        end: () => dispatch(setDraggedItem(null))
    })
    return { drag }
}

export { useItemDrag };