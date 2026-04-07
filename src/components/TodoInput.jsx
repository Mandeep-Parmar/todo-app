import "./TodoInput.css";

export default function TodoInput({ newTodo, updateTodoValue, addNewTask }) {
  return (
    <div className="input-container">
      <input
        placeholder="What is the task today?"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>
        Add task
      </button>
    </div>
  );
}
