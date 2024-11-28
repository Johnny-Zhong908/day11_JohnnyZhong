import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";
import TodoGenerator from "./TodoGenerator";
import styles from "./TodoGroup.module.css";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);

    const todoItems = state.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
    ));

    return (
        <div className={styles.groupContainer}>
            <h1 className={styles.title}>Todo List</h1>
            {state.length === 0 ? (
                <div className={styles.emptyState}>
                    Add the things you need to do today...
                </div>
            ) : (
                todoItems
            )}
            <TodoGenerator />
        </div>
    );
};

export default TodoGroup;
