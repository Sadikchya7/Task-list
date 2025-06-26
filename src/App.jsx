import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const ToDoList = (event) => {
    setInputValue(event.currentTarget.value);
  };

  const addTask = () => {
    setTodo([...todo, inputValue]);
    setInputValue("");
  };
  const deleteTask = (index) => {
    const NewToDO = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        NewToDO.push(todo[i]);
      }
    }
    setTodo(NewToDO);
    console.log(index);
    console.log(todo);
    // todo.splice(index, 1);
    // console.log(todo);
    // setTodo((currentValue) => {
    //   console.log("current", currentValue);
    //   currentValue.splice(index, 1);
    //   return currentValue;
    //   return [];
    // });
  };
  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("Todo");
  //   if (savedTodos) {
  //     setTodo(JSON.parse(savedTodos));
  //   }
  // }, []);

  useEffect(() => {
    if (todo.length === 0) {
      return;
    }
    localStorage.setItem("Todo", JSON.stringify(todo));
    console.log("abc");
  }, [todo]);

  useEffect(() => {
    console.log("start");
    const savedTodos = localStorage.getItem("Todo");
    if (savedTodos) {
      setTodo(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <>
      <h1>To-Do List</h1>
      <div className="InputBox">
        <input
          type="text"
          value={inputValue}
          onChange={ToDoList}
          placeholder="Add new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="Complete-incomplete">
        <button className="Complete">Completed Task</button>
        <button className="Incomplete">Incomplete Task</button>
      </div>
      <div className="card">
        {todo.map((task, index) => (
          <div className="TaskListContainer">
            <div className="TaskList">
              <input type="checkbox" value={task} />
              <label>{task}</label>
            </div>
            <button onClick={() => deleteTask(index)}>
              <img src="img/trash-can.png" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
