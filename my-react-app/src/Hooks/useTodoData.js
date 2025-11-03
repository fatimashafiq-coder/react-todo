import { useState } from "react";
import { storedLocalStorage } from "./storedLocalStorage";
export const useTodoData = () => {
  const {
    items,
    setItems,
    tickItem,
    setTickItem,
  } = storedLocalStorage();
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);

  const AddButtonClick = () => {
    if (inputValue !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const tick = (item, index) => {
    setTickItem([...tickItem, item]);
    const remainingItems = items.filter((element, i) => i !== index);
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
    const newitem = items.filter((element, i) => element !== item);
    setItems(newitem);
  };

  const undo = (item, index) => {
    setItems([...items, item]);
    const remainingundoItems = tickItem.filter((element, i) => i !== index);
    setTickItem(remainingundoItems);
  };
  return {
    inputValue,
    handleChange,
    AddButtonClick,
    items,
    editIndex,
    editValue,
    startEdit,
    updateItem,
    handleEditChange,
    del,
    tick,
    tickItem,
    undo,
  };
};