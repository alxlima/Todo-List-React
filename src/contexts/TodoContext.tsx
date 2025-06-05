import { ReactNode, createContext, useReducer } from "react";
import { TodoActions, TodoState } from "../@types/TodoReducer";
import { initialState, todoReducer } from "./reducers/todoReducer";


type Props = {
    children?: ReactNode
}

type ContextType = {
    state: TodoState,
    dispatch: React.Dispatch<TodoActions>
}

export const TodoContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

export const TodoContextProvider = ({children }: Props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    return (
       <TodoContext.Provider value={{state, dispatch}}>
           {children}
       </TodoContext.Provider>
    )
}