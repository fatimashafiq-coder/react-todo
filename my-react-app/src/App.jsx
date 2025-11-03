import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { BiUndo } from "react-icons/bi";
import { useTodoData } from "./Hooks/useTodoData";
import { storedLocalStorage} from "./Hooks/storedLocalStorage";
import "./App.css";

function App() {
  const {
    inputValue,
    handleChange,
    AddButtonClick,
    editIndex,
    editValue,
    handleEditChange,
    startEdit,
    updateItem,
    del,
    tick,
    undo,
  } = useTodoData();

  const {
    items,
    setItems,
    tickItem,
    setTickItem,
  } = storedLocalStorage();
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
          <button onClick={AddButtonClick}>Add</button>
        </div>

        <div className="list">
          {items.map((item, index) => (
            <p key={index}>
              <input type="checkbox" className="titick" onClick={() => tick(item, index)} />
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                    style={{ marginLeft: "0.5rem" }}
                  />
                  <button
                  className="update_button"
                    onClick={() => updateItem(index)}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  {item}
                  <CiEdit
                  className="icon"
                    onClick={() => startEdit(item, index)}
                  />
                  <MdDelete
                   className="icon"
                    onClick={() => del(item)}
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
            className="undo"
              onClick={() => undo(item, index)}
            />
          </p>
        ))}
      </div>
    </div>
  );
}
export default App;