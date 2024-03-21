import { createContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
    todoList: [{id: 1, comment: "掃除"}]
};

const reducer = (state, action) => {
    switch(action.type) {
        case "add":
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case "complete":
            return {
                ...state,
                todoList: state.todoList.filter((todo) => todo.id !== action.payload)
            };
        default:
            return state;
    }
}

const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };