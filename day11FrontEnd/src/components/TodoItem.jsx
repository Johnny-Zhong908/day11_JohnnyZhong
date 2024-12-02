import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import "./Todo.css";
const TodoItem = ({ id, text, completed }) => {
    const { dispatch } = useContext(TodoContext);

    const toggleComplete = () => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const deleteTodo = () => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    return (
        <div className="todo-item">
      <span
          onClick={toggleComplete}
          style={{
              textDecoration: completed ? "line-through" : "none",
              cursor: "pointer",
          }}
      >
        {text}
      </span>
            <button onClick={deleteTodo}>X</button>
        </div>
    );
};

export default TodoItem;
