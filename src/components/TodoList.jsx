import React from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./Todo.css";
import {Link} from "react-router-dom";

const TodoList = () => {
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
            <p>
                <Link to="/nonexistent-route">Go to 404 Page</Link>
            </p>
        </div>
    );
};

export default TodoList;
