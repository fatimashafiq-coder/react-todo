import { BiUndo } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const CompletedTasks = ({ todos, setTodos }) => {
  const todosWithId = todos.map((t) => (t.id ? t : { ...t, id: uuidv4() }));
  const completedTodos = todosWithId.filter((t) => t.isCompleted);

  const handleUndo = (item) => {
    const updated = todosWithId.map((t) =>
      t.id === item.id ? { ...t, isCompleted: false } : t
    );
    setTodos(updated);
  };

  return (
    <div className="tick_box">
      <h3>Completed Tasks</h3>
      {completedTodos.length === 0 ? (
        <p>No completed tasks yet</p>
      ) : (
        completedTodos.map((item) => (
          <p key={item.id}>
            {item.text}
            <BiUndo className="undo" onClick={() => handleUndo(item)} />
          </p>
        ))
      )}
    </div>
  );
};
