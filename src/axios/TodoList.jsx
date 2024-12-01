import {useState} from "react";

const TodoList = ()=>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [error, setError] = useState(null);

    const API_URL = 'https://67495c87868020296630ab65.mockapi.io/todo/TodoItems';
}