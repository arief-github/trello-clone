import { FC } from 'react';
import { ColumnContainer, ColumnTitle } from "./ColumnContainer";
import AddNewItem from '../AddItem/AddItem';
import { useAppState } from '../../hooks/useAppState';
import Card from '../Card/Card';

import { addTask } from '../../reducers/action/action';


type ColumnProps = {
    text: string;
    id: string;
    children?: React.ReactNode
}

const Column: FC<ColumnProps> = ({ id, text }) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
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