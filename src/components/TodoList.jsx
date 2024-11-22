import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (text) => {
    console.log(text)
    setTodoList([...todoList, {id: Date.now(), text}]);
  }

  return (
      <div>
        <h2>{"Todo List"}</h2>
        <TodoGroup todoList={todoList}/>
        <TodoGenerator addTodo={handleAddTodo}/>
      </div>
  );
}

export default TodoList;