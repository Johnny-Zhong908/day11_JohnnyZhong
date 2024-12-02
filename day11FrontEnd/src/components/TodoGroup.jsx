import React, { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContext";
import "./Todo.css";

const TodoGroup = () => {
    const { state } = useContext(TodoContext);
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 10;

    const totalPages = Math.ceil(state.todos.length / todosPerPage);
    const startIndex = (currentPage - 1) * todosPerPage;
    const currentTodos = state.todos.slice(startIndex, startIndex + todosPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (state.todos.length === 0) {
        return <p>No todos for today!</p>;
    }

    return (
        <div className="todo-group">
            {currentTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        disabled={currentPage === i + 1}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TodoGroup;
