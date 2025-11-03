import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid"; // ✅ import uuid

export const ActiveTodos = ({ todos, setTodos }) => {
  const [editText, setEditText] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  // ✅ Make sure each todo has a unique id
  const todosWithId = todos.map((t) => (t.id ? t : { ...t, id: uuidv4() }));
  const activeTodos = todosWithId.filter((t) => !t.isCompleted);

  const startEdit = (item) => {
    setEditingItem(item);
    setEditText(item.text);
  };

  const handleEditChange = (e) => setEditText(e.target.value);

  const updateItem = () => {
    const updated = todosWithId.map((t) =>
      t.id === editingItem.id ? { ...t, text: editText } : t
    );
    setTodos(updated);
    setEditingItem(null);
    setEditText("");
  };

  const deleteItem = (item) => {
    const filtered = todosWithId.filter((t) => t.id !== item.id);
    setTodos(filtered);
  };

  const handleCompleteTask = (item) => {
    const updated = todosWithId.map((t) =>
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
          <p key={item.id}>
            <input
              type="checkbox"
              className="titick"
              onChange={() => handleCompleteTask(item)}
            />
            {editingItem?.id === item.id ? (
              <>
                <input
                  className="edit_input"
                  type="text"
                  value={editText}
                  onChange={handleEditChange}
                />
                <button className="update_button" onClick={updateItem}>
                  Update
                </button>
              </>
            ) : (
              <>
                {item.text}
                <CiEdit
                  className="icon"
                  onClick={() => startEdit(item)}
                />
                <MdDelete
                  className="icon"
                  onClick={() => deleteItem(item)}
                />
              </>
            )}
          </p>
        ))
      )}
    </div>
  );
};
