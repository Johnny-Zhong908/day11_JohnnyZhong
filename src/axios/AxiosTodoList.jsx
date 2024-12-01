import React, { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "./api";

const AxiosTodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    const handleAddTodo = async () => {
        if (!newTodo.trim()) return;
        const addedTodo = await createTodo({ text: newTodo, completed: false });
        setTodos([...todos, addedTodo]);
        setNewTodo("");
    };

    const handleUpdateTodo = async (id, updatedText) => {
        const updatedTodo = await updateTodo(id, { text: updatedText });
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>Axios Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="text"
                            value={todo.text}
                            onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
                        />
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosTodoList;
