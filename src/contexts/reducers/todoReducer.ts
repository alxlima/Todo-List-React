import { TodoActions, TodoState } from "../../@types/TodoReducer";

export const initialState : TodoState = []

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
   switch (action.type) {
        case 'ADD':
          const { payload } = action
 
          return !Array.isArray(payload) ? [...state, payload]: payload

        case 'CHANGE':
          const changedTodos = state.map((item, key)=> {

            if (key == action.payload.index){
                item.title = action.payload.title ?? item.title
                item.isDone = action.payload.isDone ?? item.isDone
            }
            
            return item
        })

        return changedTodos
        case 'DELETE':
            return state.filter((_item, key) => key != action.payload.index)
        
        default:
            return state
   }  
}