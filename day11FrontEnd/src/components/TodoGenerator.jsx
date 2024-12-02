import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoGenerator = () => {
    const [inputValue, setInputValue] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleAdd = () => {
        if (inputValue.trim() === "") {
            dispatch({ type: "ADD_TODO", payload: "This is a default task" });
        } else {
            dispatch({ type: "ADD_TODO", payload: inputValue });
            setInputValue("");
        }
    };

    return (
        <div className="todo-generator">
            <input
                type="text"
                placeholder="Add the things you need to do today..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>add</button>
        </div>
    );
};

export default TodoGenerator;
