import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContext";
import "./Todo.css";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);

    if (state.todos.length === 0) {
        return <p>No todos for today!</p>;
    }

    return (
        <div className="todo-group">
            {state.todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodoGroup;
