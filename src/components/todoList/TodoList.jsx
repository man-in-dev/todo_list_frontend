import axios from "axios";
import React, { useState } from "react";

// props = {
//   todos,
//   onUpdate,
//   onDelete,
// };

export default function TodoList(props) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", description: "" });

  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditData({ name: todo.name, description: todo.description });
  };

  const saveEdit = async (id) => {
    if (!id) return;
    try {
      const res = await axios.put(
        `https://todo-list-backend-woad.vercel.app/update-todo/${id}`,
        editData
      );
      setEditingId(null);
      props.getTodos();
    } catch (error) {
      alert(error.response.data);
    }
  };

  // todos = [
  //   {
  //     name: "",
  //     description: "",
  //     id: "",
  //     createdAt: "",
  //     updated: "",
  //   },
  //   {
  //     name: "",
  //     description: "",
  //     id: "",
  //     createdAt: "",
  //     updated: "",
  //   },
  //   {
  //     name: "",
  //     description: "",
  //     id: "",
  //     createdAt: "",
  //     updated: "",
  //   },
  // ];

  // [1, 2]

  // const arr = Array.map(function() {
  //   return 1
  // })

  // console.log(arr) -> [1, 2]

  return (
    <ul className="todo-list">
      {props.todos.map(function (todo) {
        return (
          <li key={todo._id} className="todo-item">
            {editingId === todo._id ? (
              <div className="edit-todo-form">
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
                <textarea
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                />
                <button onClick={() => saveEdit(todo._id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <h3>{todo.name}</h3>
                <p>{todo.description}</p>
                <div className="actions">
                  <button
                    onClick={function () {
                      startEdit(todo);
                    }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={async function () {
                      try {
                        const res = await axios.delete(
                          `https://todo-list-backend-woad.vercel.app/delete-todo/${todo._id}`
                        );
                        props.getTodos();
                      } catch (error) {
                        alert(error.response.data);
                      }
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
