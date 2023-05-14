import { createContext, Dispatch } from 'react';
import { AppState, List, Task } from '../reducers/appStateReducer';
import { Action } from '../reducers/action/action'; 
import { DragItem } from '../helper/DragItem';

export const appData: AppState = {
    draggedItem: null,
    lists: [
        {
          id: "0",
          text: "To Do",
          tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
          id: "1",
          text: "In Progress",
          tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
          id: "2",
          text: "Done",
          tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
      ]
};

type AppStateContextProps = {
    draggedItem: DragItem | null;
    lists: List[];
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<Action>;
};

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

