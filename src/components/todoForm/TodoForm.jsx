import React, { useState } from "react";
import axios from "axios";

export default function TodoForm({ onAdd, getTodos }) {
  const [todo, setTodo] = useState({ name: "", description: "" });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://todo-list-backend-woad.vercel.app/create-todo",
        todo
      );
      alert(res.data);
      setTodo({ name: "", description: "" });
      getTodos();
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Todo Name"
        value={todo.name}
        // onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        onChange={function (e) {
          setTodo({ ...todo, name: e.target.value });
        }}
      />
      <textarea
        placeholder="Todo Description"
        value={todo.description}
        // onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        onChange={function (e) {
          setTodo({ ...todo, description: e.target.value });
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

// todo = {name: "", description: ""}

// {...todo, name: e.target.value}

// todo = {name: "dsfsdfs", description: ""}

// todo = {name: "dsfsdfs", description: "dfdsfdsf"}
