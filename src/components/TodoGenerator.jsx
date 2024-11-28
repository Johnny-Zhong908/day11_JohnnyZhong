import React, { useContext, useState } from "react";
import { TodoContext } from "../components/TodoContext";
import styles from "./TodoGenerator.module.css";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAdd = () => {
        text && dispatch({ type: "ADD", payload: { text } });
        setText("");
    };

    return (
        <div className={styles.generatorContainer}>
            <input
                type="text"
                className={styles.input}
                value={text}
                onChange={handleInputChange}
                placeholder="Add the things you need to do today..."
            />
            <button className={styles.addButton} onClick={handleAdd}>
                add
            </button>
        </div>
    );
};

export default TodoGenerator;
