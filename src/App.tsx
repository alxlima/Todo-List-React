import { useSaveTodos } from "./hooks/useSaveTodos";
import styles from './App.module.css';
import { Header } from "./componentes/Header";
import { TodoList } from "./componentes/TodoList";

const App = () => {
  // Monitoring all changes on todos and save in local storage ( monitoro todas alterações em Todos e salvo no local storage (web))
  useSaveTodos() // uso a hooks - função reponsavel por salvar os todos.
  
  return(
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App;