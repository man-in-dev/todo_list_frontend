import React, { useEffect, useState } from "react";

import "./index.css";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import axios from "axios";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      const res = await axios.get(
        "https://todo-list-backend-woad.vercel.app/get-all-todo"
      );
      setTodos(res.data.todos);
    } catch (error) {
      alert(error.response.data);
    }
  }

  const addTodo = (todo) => setTodos([...todos, { ...todo, id: Date.now() }]);

  const updateTodo = (id, updatedTodo) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...updatedTodo } : t)));

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="app">
      <h1>📝 My Todo App</h1>
      <TodoForm onAdd={addTodo} getTodos={getTodos} />
      <TodoList
        todos={todos}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
        getTodos={getTodos}
      />
    </div>
  );
}
