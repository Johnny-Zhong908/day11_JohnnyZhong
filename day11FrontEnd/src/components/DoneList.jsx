import {useContext} from "react";
import {TodoContext} from "./TodoContext";
import TodoItem from "./TodoItem";
import "./Todo.css";

const DoneList=()=> {
    const {state} = useContext(TodoContext);
    const completedTodos = state.todos.filter(todo => todo.completed);
    return (
        <div className="done-list">
            <h1>Done list</h1>
            {completedTodos.length === 0 ? (
                <p>No complete tasks yet！</p>
            ) : (
                <div>{completedTodos.map(todo => (
                    <TodoItem key={todo.id}{...todo}/>
                ))}
                </div>
            )}
        </div>
    )
}
export default DoneList;


