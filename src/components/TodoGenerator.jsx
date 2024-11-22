import "./TodoGenerator.css";
import { useState } from "react";

const TodoGenerator = (props) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };


  const handleAdd = () => {
    props.addTodo(text);
  };
  return(
      <div className={"todo-generator-wrapper"}>
        <input maxLength={100} value={text} onChange={handleChange}/>
        <button onClick={handleAdd}>add</button>
      </div>
  );
}

export default TodoGenerator;