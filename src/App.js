import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoContext";
import NotFound from "./components/NotFound"; // Import the 404 page

const App = () => {
    return (
        <Router>
            <TodoProvider>
                <Routes>
                    {/* Define your route for TodoList */}
                    <Route path="/" element={<TodoList />} />

                    {/* Catch-all route for 404 page */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </TodoProvider>
        </Router>
    );
};

export default App;
