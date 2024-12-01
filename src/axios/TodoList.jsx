import {useState} from "react";
import axios from "axios";

const TodoList = ()=>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [error, setError] = useState(null);
    const API_URL = 'https://67495c87868020296630ab65.mockapi.io/todo/TodoItems';
    const fetchTodos = async () => {
        try {
            const response = await axios.get(API_URL);
            setTodos(response.data);
        } catch (err) {
            setError(err.message);
        }
    };
    const addTodo = async () => {
        try {
            const response = await axios.post(API_URL, {
                text: newTodo,
                done: false,
            });
            setTodos([...todos, response.data]);
            setNewTodo('');
        } catch (err) {
            setError(err.message);
        }
    };
}