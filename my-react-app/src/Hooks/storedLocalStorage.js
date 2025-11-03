import { useState, useEffect } from "react";

export const storedLocalStorage = () => {
  const saveData = "todoData";
  const localStorageData = (key) => {
    try {
      const showData = localStorage.getItem(key);
      if (!showData || showData === "undefined") return [];
      return JSON.parse(showData);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  };

  const [todos, setTodos] = useState(() => localStorageData(saveData));

  useEffect(() => {
    localStorage.setItem(saveData, JSON.stringify(todos));
  }, [todos]);
  return { todos, setTodos };
};
