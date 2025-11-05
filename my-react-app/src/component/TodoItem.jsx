import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TodoItem = ({ item, updateItem, deleteItem, handleCompleteTask }) => {
  const [editing, setEditing] = useState(false);

  const startEdit = () => setEditing(true);

  const handleEditChange = (e) => {
    updateItem({ ...item, text: e.target.value });
  };

  const saveEdit = () => {
    setEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="titick"
        onChange={() => handleCompleteTask(item)}
      />

      {editing ? (
        <div className="edit-section">
          <input
            className="edit_input"
            type="text"
            value={item.text}
            onChange={handleEditChange}
          />
          <button className="update_button" onClick={saveEdit}>
            Update
          </button>
        </div>
      ) : (
        <>
          <p className="todo-text">{item.text}</p>
          <div className="icons">
            <CiEdit className="icon" onClick={startEdit} />
            <MdDelete className="icon" onClick={() => deleteItem(item)} />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
