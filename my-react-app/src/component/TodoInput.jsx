import React, { useState } from "react";

export const Todoinput = ({ addButtonClick }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    addButtonClick(inputValue);
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
