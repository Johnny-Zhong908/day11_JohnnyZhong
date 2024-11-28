import React from "react";
import TodoGroup from "./TodoGroup";
import styles from "./TodoList.module.css";

const TodoList = () => {
    return (
        <div className={styles.todoListContainer}>
            <TodoGroup />
        </div>
    );
};

export default TodoList;
