import { useState } from "react";
import TodoItem from "./TodoItem";

export const ActiveTodos = ({ todos, setTodos }) => {
  const [editing, setEditing] = useState(null);

  const activeTodos = todos.filter((t) => !t.isCompleted);

  const startEdit = (item) => {
    setEditing({ id: item.id, text: item.text });
  };

  const handleEditChange = (e) => {
    setEditing({ ...editing, text: e.target.value });
  };

  const updateItem = () => {
    const updated = todos.map((t) =>
      t.id === editing.id ? { ...t, text: editing.text } : t
    );
    setTodos(updated);
    setEditing(null);
  };

  const deleteItem = (item) => {
    const filtered = todos.filter((t) => t.id !== item.id);
    setTodos(filtered);
  };

  const handleCompleteTask = (item) => {
    const updated = todos.map((t) =>
      t.id === item.id ? { ...t, isCompleted: true } : t
    );
    setTodos(updated);
  };

  return (
    <div className="list">
      {activeTodos.length === 0 ? (
        <p>No active tasks</p>
      ) : (
        activeTodos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            editing={editing}
            startEdit={startEdit}
            handleEditChange={handleEditChange}
            updateItem={updateItem}
            deleteItem={deleteItem}
            handleCompleteTask={handleCompleteTask}
          />
        ))
      )}
    </div>
  );
};
