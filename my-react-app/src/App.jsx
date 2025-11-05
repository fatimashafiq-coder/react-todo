import { TodoInput } from "./component/TodoInput";
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
  const activeTodos = todos.filter((t) => !t.isCompleted);

  return (
    <div className="container">
      <div className="input-section">
        <TodoInput addButtonClick={addButtonClick} />
        <ActiveTodos todos={todos} setTodos={setTodos} activeTodos={activeTodos} />
      </div>
      <CompletedTasks todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
