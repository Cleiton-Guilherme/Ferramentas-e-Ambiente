const TodoItem = ({ tarefa }) => {
    return(
        <li className="Todo-item">
           <input type="checkbox"/>
              { tarefa }
        </li>
    )
}
export default TodoItem 