import { FC, useEffect } from 'react';
import { AppStateContext, appData } from "./AppStateContext";
import { appStateReducer, AppState } from '../reducers/appStateReducer';
import { useImmerReducer } from 'use-immer';    
// HOC import
import { withInitialState } from '../helper/withInitialState';

import { save } from '../service/api';

type AppStateProviderProps = {
    children : React.ReactNode,
    initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(
    ({ children, initialState }) => {
        const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    
        useEffect(() => {
            save(state);
        }, [state])
        
        const { draggedItem, lists } = state;
    
        const getTasksByListId = (id: string) => {
            return lists.find((list) => list.id === id)?.tasks || []
        }
    
        return (
            <AppStateContext.Provider value={{ draggedItem ,lists, getTasksByListId, dispatch }}>
                {children}
            </AppStateContext.Provider>
        )
    }
) 
