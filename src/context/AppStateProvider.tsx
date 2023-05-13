import { FC } from 'react';
import { AppStateContext, appData } from "./AppStateContext";
import { appStateReducer } from '../reducers/appStateReducer';
import { useImmerReducer } from 'use-immer';    

type ChildrenProps = {
    children: React.ReactNode
}

export const AppStateProvider: FC<ChildrenProps> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);
    
    const { lists } = state;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}
