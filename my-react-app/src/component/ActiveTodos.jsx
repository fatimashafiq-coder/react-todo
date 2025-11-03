import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const ActiveTodos = ({ todos, setTodos }) => {
  const [editText, setEditText] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const activeTodos = todos.filter((t) => !t.isCompleted);

  const startEdit = (item) => {
    setEditingItem(item);
    setEditText(item.text);
  };

  const handleEditChange = (e) => setEditText(e.target.value);

  const updateItem = () => {
    const updated = todos.map((t) =>
      t.id === editingItem.id ? { ...t, text: editText } : t
    );
    setTodos(updated);
    setEditingItem(null);
    setEditText("");
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
          <div key={item.id} className="todo-item">
            <input
              type="checkbox"
              className="titick"
              onChange={() => handleCompleteTask(item)}
            />

            {editingItem?.id === item.id ? (
              <div className="edit-section">
                <input
                  className="edit_input"
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button className="update_button" onClick={updateItem}>
                  Update
                </button>
              </div>
            ) : (
              <>
                <p className="todo-text">{item.text}</p>
                <div className="icons">
                  <CiEdit className="icon" onClick={() => startEdit(item)} />
                  <MdDelete className="icon" onClick={() => deleteItem(item)} />
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};
