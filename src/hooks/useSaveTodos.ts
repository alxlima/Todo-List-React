import { useContext, useEffect, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { AES, enc } from 'crypto-js'  // importo padrões de criptografia.
import { Todo } from "../@types/Todo"

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string // Chave key saved local storage.env
const LOCAL_STORAGE_KEY ='TODOS_DATA'                        // Nome configurações do local storage key.

export const useSaveTodos = () => {
   const [gottedInitialDate, setGottedInicialData] = useState(false)
   
   const { state, dispatch } = useContext(TodoContext)

   //logica de alterações de Todos
   const hadleChangesTodo = () => {
       if (!gottedInitialDate) return;

       const value = AES.encrypt(JSON.stringify(state), SECRET_KEY) // metodo não retorna string.

       localStorage.setItem(LOCAL_STORAGE_KEY, value.toString()) // passo local storage convert value string.
   }
   
   // Getting todos initial
   useEffect(() => {
      try {
        const todoData = localStorage.getItem(LOCAL_STORAGE_KEY)
        //descriptografo os Todos.
        if(todoData){
            const bytes = AES.decrypt(todoData, SECRET_KEY)
            const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8)) // tranformo uma string para um objeto valido json  
            
            dispatch({ type: 'ADD', payload:decryptedData})
        }
        
      } catch (error) {
           alert('Não foi possível obter as tarefas salvas!')
      }

      setGottedInicialData(true)
   }, [])

    // Monitoring all changes on todos - monitorando todas as alterações de todos.
    useEffect (() => { hadleChangesTodo() }, [state])
}