import React, {useState} from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./Todo.css";
import {Navigate} from "react-router-dom";

const TodoList = () => {
    const [redirectToDone, setRedirectToDone] = useState(false);
    const [redirectToNotFound, setRedirectToNotFound] = useState(false);
    const [redirectToAxios, setRedirectToAxios] = useState(false);
    if (redirectToDone) {
        return <Navigate to="/done" />;
    }

    if (redirectToNotFound) {
        return <Navigate to="/nonexistent-route" />;
    }
    if (redirectToAxios) {
        return <Navigate to="/axios" />;
    }
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <TodoGroup/>
            <TodoGenerator/>
            <p>
                <button onClick={() => setRedirectToDone(true)}>DoneList Page</button>
            </p>
            <p>
                <button onClick={() => setRedirectToNotFound(true)}>404 NotFound Page</button>
            </p>
            <p>
                <button onClick={() => setRedirectToAxios(true)}>Axios Todo List Page</button>
            </p>
        </div>
    );
};

export default TodoList;