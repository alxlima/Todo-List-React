import { useContext } from 'react'
import styles from './TodoList.module.css'
import { TodoContext } from '../../contexts/TodoContext'
import EmptyIcon from '../../assets/clipboard.svg?react'
import { TodoItem } from '../TodoItem'

 export const TodoList = () => {
    const { state: todos } = useContext(TodoContext)

    return (
        // criou header para marcar qtd. tarefas concluidas e qtd total
        <div className={styles.container}>
            {todos.length > 0 && 
                <div className={styles.infoTasksContainer}>
                    <span className={styles.infoDoneTasks}>Concluídas</span>

                    <div className={styles.infoCountDoneTasks}>
                        {todos.filter(item => item.isDone).length} de {todos.length}
                    </div>
                </div>
           }

           {/*crio header sessão de tarefas cadastradas */}
           {todos.length < 1 &&
                <div className={styles.emptyContainer}>
                    <EmptyIcon />

                    <p className={styles.emptyLabel}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                    <br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            }
            
            <div className={styles.tasksContainer}>
                {todos.map((data, key) => (
                    <TodoItem
                      key={key}
                      data={data}
                      dataIndex={key}
                     />
                ))}
            </div>
        </div>
    )
 }