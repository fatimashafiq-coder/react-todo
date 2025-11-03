import { useState, useEffect } from "react";
// import {constData} from "./constData";
export const storedLocalStorage = () => {
 
   const saveCompletedData = "todoCompletedData";
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

    const [tickItem, setTickItem] = useState(() => {
        return localStorageData(saveCompletedData);
    });

    const [items, setItems] = useState(() => {
        return localStorageData(saveData);
    });

    useEffect(() => {
        localStorage.setItem(saveCompletedData, JSON.stringify(tickItem));
    }, [tickItem]);

    useEffect(() => {
        localStorage.setItem(saveData, JSON.stringify(items));
    }, [items]);

    return {
        items,
        setItems,
        tickItem,
        setTickItem,
    };
};
