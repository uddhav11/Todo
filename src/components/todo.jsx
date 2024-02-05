import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.charAt(0).toLocaleUpperCase() + newTodo.slice(1),
          completed: false,
        },
      ]);
      setNewTodo("");
    }
  };
  const toogleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      addTodo();
    }
  };

  return (
    <div className="outer-of-todo">
      <div className="inner-of-todo">
        <div className="heading">
          <h1>Welcome, To the Todo app</h1>
        </div>
        <div className="main">
          <label>
            <input
              type="text"
              placeholder="Enter the task"
              value={newTodo}
              size={50}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="button1" onClick={addTodo}>
              Add
            </button>
          </label>
        </div>
        <div className="list">
          <ul>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toogleTodo(todo.id)}
                  />
                  <span
                    style={{
                      color: todo.completed ? "rgb(184,184,184)" : "black",
                    }}
                  >
                    {todo.text}
                  </span>{" "}
                  <br />
                  <button
                    className="button2"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
