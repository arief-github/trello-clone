import { DragItem } from "../../helper/DragItem";

// define discriminated union
export type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; listId: string };
    }
  | {
      type: "MOVE_LIST";
      payload: {
        draggedId: string;
        hoverId: string;
      };
    }
  | {
      type: "MOVE_TASK";
      payload: {
        draggedItemId: string;
        hoveredItemId: string | null;
        sourceColumnId: string;
        targetColumnId: string;
      };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      payload: DragItem | null;
    };

const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

const moveList = (draggedId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    draggedId,
    hoverId,
  },
});

const moveTask = (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => ({
  type: "MOVE_TASK",
  payload: {
    draggedItemId,
    hoveredItemId,
    sourceColumnId,
    targetColumnId,
  },
});

const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem,
});

export { addTask, addList, moveList, moveTask, setDraggedItem };
