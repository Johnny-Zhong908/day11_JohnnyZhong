import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
  return (
      <div>
        <span>This is TodoGroup</span>
        {props.todoList.map((todo) => {
          return <TodoItem todo={todo} key={todo.id}/>
        })}
      </div>
  );
}

export default TodoGroup;