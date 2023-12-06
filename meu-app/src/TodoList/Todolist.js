import { useState } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';

const TodoList = () => {
    const [tarefas, setTarefas] = useState([]);

    const addTodo = (tarefaTextChildren) => {
        setTarefas([...tarefas, tarefaTextChildren])
     
    }
    
    return (
        <section className="TodoList">
            <h2 className="todo-title">Minha Lista de Tarefas</h2>
            <TodoForm onAdd={addTodo}/>
            <ol className="Todos">
             {tarefas.map((tarefa, index) => (
                <TodoItem tarefa={tarefa} key={index}/>
             ))}
         </ol>
        </section>
    )
}

export default TodoList;