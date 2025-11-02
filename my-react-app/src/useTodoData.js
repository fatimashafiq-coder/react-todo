import { useState, useEffect } from "react";

export const useTodoData = () => {
  const saveCompletedData = "todoCompletedData";
  const saveData = "todoData";

  const [tickItem, setTickItem] = useState(() => {
    try {
      const showData = localStorage.getItem(saveCompletedData);
      if (!showData || showData === "undefined") return [];
      return JSON.parse(showData);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  const [items, setItems] = useState(() => {
    try {
      const showData = localStorage.getItem(saveData);
      if (!showData || showData === "undefined") return [];
      return JSON.parse(showData);
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(saveCompletedData, JSON.stringify(tickItem));
  }, [tickItem]);

  useEffect(() => {
    localStorage.setItem(saveData, JSON.stringify(items));
  }, [items]);

  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);

  const buttonClick = () => {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const Tick = (item, index) => {
    setTickItem([...tickItem, item]);
    const remainingItems = items.filter((_, i) => i !== index);
    setItems(remainingItems);
  };

  const startEdit = (item, index) => {
    setEditIndex(index);
    setEditValue(item);
  };
    const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };


  const updateItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editValue;
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue("");
  };

  const del = (item) => {
    const newitem = items.filter((element) => element !== item);
    setItems(newitem);
  };

  const undo = (item, index) => {
    setItems([...items, item]);
    const remainingundoItems = tickItem.filter((_, i) => i !== index);
    setTickItem(remainingundoItems);
  };
  return {
    inputValue,
    handleChange,
    buttonClick,
    items,
    editIndex,
    editValue,
    startEdit,
    updateItem,
     handleEditChange,
    del,
    Tick,
    tickItem,
    undo,
  };
};
