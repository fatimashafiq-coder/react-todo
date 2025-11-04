import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TodoItem = ({ item, editing, startEdit, handleEditChange, updateItem, deleteItem, handleCompleteTask }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="titick"
        onChange={() => handleCompleteTask(item)}
      />

      {editing?.id === item.id ? (
        <div className="edit-section">
          <input
            className="edit_input"
            type="text"
            value={editing.text}
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
  );
};

export default TodoItem;
