import TodoItem from "./TodoItem";

export const ActiveTodos = ({ todos, setTodos, activeTodos }) => {
  const updateItem = (updatedItem) => {
    const updated = todos.map((t) =>
      t.id === updatedItem.id ? { ...t, text: updatedItem.text } : t
    );
    setTodos(updated);
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
            updateItem={updateItem}
            deleteItem={deleteItem}
            handleCompleteTask={handleCompleteTask}
          />
        ))
      )}
    </div>
  );
};
