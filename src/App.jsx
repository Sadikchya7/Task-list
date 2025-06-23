import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  const ToDoList = (event) => {
    setInputValue(event.currentTarget.value);
  };

  const addTask = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h2>To-Do List</h2>
      <div className="InputBox">
        <input
          type="text"
          value={inputValue}
          onChange={ToDoList}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>New task +</button>
      </div>
      <div className="card">
        {todo.map((task) => (
          <p>{task}</p>
        ))}
      </div>
    </>
  );
}

export default App;
