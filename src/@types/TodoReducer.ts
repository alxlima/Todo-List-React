import { Todo } from "./Todo";

export type TodoState = Todo[]

//pego todas as chaves do todo.ts
type TodoWithOptionalProps = {
    [key in keyof Todo]?: Todo[key]
}

// metodo para adicionar
type AddTodo = {
    type: 'ADD',
    payload: Todo | Todo[]
}

//metodo para alterar
type ChangeTodo = {
    type: 'CHANGE',
    payload: TodoWithOptionalProps & { index: number }
}

// metodo para deletar
type DeleteTodo = {
    type: 'DELETE',
    payload: { index: number }
}

// metodo crud para operações cadastro de notas Todo.( utlizado para Typer o Reducer)
export type TodoActions = AddTodo | ChangeTodo | DeleteTodo