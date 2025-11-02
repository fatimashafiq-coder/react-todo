import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { BiUndo } from "react-icons/bi";
import { useTodoData } from "./useTodoData";
import "./App.css";

function App() {
  const {
    inputValue,
    handleChange,
    buttonClick,
    items,
    editIndex,
    editValue,
    handleEditChange,
    startEdit,
    updateItem,
    del,
    Tick,
    tickItem,
    undo,
  } = useTodoData();

  return (
    <div className="container">
      <div className="input-section">
        <div className="input-row">
          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Enter a task..."
          />
          <button onClick={buttonClick}>Add</button>
        </div>

        <div className="list">
          {items.map((item, index) => (
            <p key={index}>
              <TiTick onClick={() => Tick(item, index)} style={{ cursor: "pointer" }} />
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}  
                    style={{ marginLeft: "0.5rem" }}
                  />
                  <button
                    onClick={() => updateItem(index)}
                    style={{ marginLeft: "0.5rem" }}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  {item}
                  <CiEdit
                    onClick={() => startEdit(item, index)}
                    style={{ cursor: "pointer", marginLeft: "0.5rem" }}
                  />
                  <MdDelete
                    onClick={() => del(item)}
                    style={{ cursor: "pointer", marginLeft: "0.5rem" }}
                  />
                </>
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="tick_box">
        <h3>Completed Tasks</h3>
        {tickItem.map((item, index) => (
          <p key={index}>
            {item}
            <BiUndo
              onClick={() => undo(item, index)}
              style={{ cursor: "pointer", marginLeft: "10rem" }}
            />
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
