import { useState } from "react";

const TodoForm = ({onAdd}) => {

    const {tarefaText, setTarefaText} = useState('');

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setTarefa([...tarefa, tarefaText]);
        onAdd(tarefaText);
        setTarefaText('')
    }

    return (
        <form className= "Todo-register" onSubmit={handleSubmit}>
            <labe htmlfor="tarefa">tarefa</labe>
            <input type="text"
                id="tarefa"
                placeholder="Digite a sua tarefa"
                value={tarefaText}
                onChange={handleChange}
                />
                <button type="submit">Enviar</button>
        </form>
    )
}
export default TodoForm