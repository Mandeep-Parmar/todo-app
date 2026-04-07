import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList() {
  let [todos, setTodos] = useState(() => {
    // get data from local storage
    let savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  let [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // add data to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo(""); // clear input
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id),
    );
  };

  let markAsOneAll = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };

  let markAsDoneOne = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        // match -> uppercase
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        }

        //no match -> as it is
        else {
          return todo;
        }
      });
    });
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo App</h2>

      <TodoInput
        newTodo={newTodo}
        updateTodoValue={updateTodoValue}
        addNewTask={addNewTask}
      />

      <hr />

      {todos.length === 0 ? (
        <p className="empty-msg">
          No tasks yet 📋 <br /> Start adding tasks
        </p>
      ) : (
        <div className="todo-list">
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                markAsDoneOne={markAsDoneOne}
              />
            ))}
          </ul>
        </div>
      )}
      <button onClick={markAsOneAll} className="mark-all-btn">
        Mark As Done All
      </button>
    </div>
  );
}
