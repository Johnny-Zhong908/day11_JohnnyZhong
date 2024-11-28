import React from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./Todo.css";

const TodoList = () => {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoGroup />
            <TodoGenerator />
        </div>
    );
};

export default TodoList;
