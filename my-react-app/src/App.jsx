import { Todoinput } from "./component/Todoinput";
import { ActiveTodos } from "./component/ActiveTodos";
import { CompletedTasks } from "./component/CompletedTasks";
import { storedLocalStorage } from "./Hooks/storedLocalStorage";
import "./App.css";

function App() {
  const { todos, setTodos } = storedLocalStorage();
  const addButtonClick = (newTodo) => {
    if (newTodo.text.trim() !== "") {
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="container">
      <div className="input-section">
        <Todoinput addButtonClick={addButtonClick} />
        <ActiveTodos todos={todos} setTodos={setTodos} />
      </div>
      <CompletedTasks todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;