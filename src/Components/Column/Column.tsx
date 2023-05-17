import { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from "./ColumnContainer";
import AddNewItem from '../AddItem/AddItem';
import { useAppState } from '../../hooks/useAppState';
import { useItemDrag } from '../../hooks/useItemDrag';
import { isHidden } from '../../helper/isHidden';
import Card from '../Card/Card';

import { moveList, addTask, moveTask, setDraggedItem } from '../../reducers/action/action';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';

type ColumnProps = {
    text: string;
    id: string;
    isPreview?: boolean; 
}

const Column = ({ id, text, isPreview }: ColumnProps) => {
  const { draggedItem ,getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover: throttle(200, () => {
      if (!draggedItem) {
        return
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return
        }

        dispatch(moveList(draggedItem.id, id))
      } else {
        if (draggedItem.columnId === id) {
          return
        }
        if (tasks.length) {
          return
        }

        dispatch(
          moveTask(draggedItem.id, null, draggedItem.columnId, id)
        )
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
      }
    })
  });
  
  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  drag(drop(ref));

  return ( 
    <ColumnContainer ref={ref} isPreview={isPreview}  isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}>
        <ColumnTitle>{text}</ColumnTitle>
        { 
          tasks.map((task) => (
            <Card text={task.text} key={task.id} id={task.id} columnId={id} />
          ))
        }
        <AddNewItem
          toggleButtonText='+ Add Another Task'
          onAdd={(text) => dispatch(addTask(text, id))}
          dark
        />
    </ColumnContainer>
  )
}

export default Column