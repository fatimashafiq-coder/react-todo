import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ addButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: uuidv4(),
      text: inputValue,
      isCompleted: false,
    };

    addButtonClick(newTodo);
    setInputValue("");
  };

  return (
    <div className="input-row">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
