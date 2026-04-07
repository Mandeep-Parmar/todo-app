import "./TodoItem.css"
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"; 

export default function TodoItem({ todo, deleteTodo, markAsDoneOne }) {
  return (
    <li className="todo-item">
      <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}} className="todo-text">
        {todo.task}
      </span>

      <div className="todo-actions">
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn"> 
          <FaTrash />
        </button>
        <button onClick={() => markAsDoneOne(todo.id)} className="done-btn">
          <FaCheck /> 
        </button>
      </div>
    </li>
  );
}
