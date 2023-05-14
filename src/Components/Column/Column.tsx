import { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from "./ColumnContainer";
import AddNewItem from '../AddItem/AddItem';
import { useAppState } from '../../hooks/useAppState';
import { useItemDrag } from '../../hooks/useItemDrag';
import Card from '../Card/Card';

import { moveList, addTask } from '../../reducers/action/action';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';

type ColumnProps = {
    text: string;
    id: string;
}

const Column = ({ id, text }: ColumnProps) => {
  const { draggedItem ,getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return
        }

        dispatch(moveList(draggedItem.id, id))
      }
    })
  })

  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref}>
        <ColumnTitle>{text}</ColumnTitle>
        { 
          tasks.map((task) => (
            <Card text={task.text} key={task.id} id={task.id} />
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