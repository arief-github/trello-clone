interface AddListAction {
    type: "ADD_LIST";
    payload: string;
}

interface AddTaskAction {
    type: "ADD_TASK";
    payload: { text: string, listId: string }
}

// define discriminated union
export type Action = AddListAction | AddTaskAction  ;

const addTask = (text: string, listId: string): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        listId
    }
});

const addList = (text: string) : Action => ({
    type: "ADD_LIST",
    payload: text,
});

export { addTask, addList };