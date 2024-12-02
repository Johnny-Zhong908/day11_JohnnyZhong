import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import NotFound from "./components/NotFound";
import { TodoProvider } from "./components/TodoContext";
import AxiosTodoList from "./axios/AxiosTodoList"
import HardStop from "./components/HardStop";


const App = () => {
    return (
        <Router>
            <TodoProvider>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                    <Route path="/done" element={<DoneList />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/axios" element={<AxiosTodoList />} />
                    <Route path="/hardstop" element={<HardStop/>}/>
                </Routes>
            </TodoProvider>
        </Router>

    );
};
export default App;
