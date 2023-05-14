import { FC } from 'react';
import { AppContainer, Column } from './Components';
import AddNewItem from './Components/AddItem/AddItem';
import { useAppState } from './hooks/useAppState';

import { addList } from './reducers/action/action';
import { CustomDragLayer } from './Components/Drag/CustomDrag/CustomDragLayer';


// import tasks from './data/tasks';

// const buttonStyles: React.CSSProperties = {
//   backgroundColor: '#5aac44',
//   borderRadius: '3px',
//   border: 'none',
//   boxShadow: 'none'
// }

// const Button: any = styled.button` 
//   background-color: #5aac44;
//   border-radius: 3px;
//   border: none;
//   box-shadow: none;
// `;


// different declare children for react 18
// interface Props {
//   children: React.ReactNode
// }

// explicit return from tsx
const App: FC= ()  =>  {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer/>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}

      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  )
}

export default App
