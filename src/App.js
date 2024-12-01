import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./components/TodoContext";
import NotFound from "./components/NotFound";
import DoneList from "./components/DoneList"; // Import the 404 page

const App = () => {
    return (
        <Router>
            <TodoProvider>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/done" element={<DoneList/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </TodoProvider>
        </Router>
    );
};

export default App;
