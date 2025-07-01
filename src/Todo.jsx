import { useState, useEffect } from "react";
import "./App.css";
import { TestComponent } from "./TestComponent";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterTask, setFilterTask] = useState(null);

  const ToDoList = (event) => {
    setInputValue(event.currentTarget.value);
  };

  const addTask = () => {
    const newTask = {
      title: inputValue,
      checked: false,
      status: "incomplete",
    };
    setTodo([...todo, newTask]);
    setInputValue("");
    // console.log(newTask);
  };

  const deleteTask = (index) => {
    const NewToDO = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        NewToDO.push(todo[i]);
      }
    }
    setTodo(NewToDO);
  };
  const checked = (index) => {
    const updatedToDo = [...todo];
    const task = updatedToDo[index];
    task.checked = !task.checked;
    task.status = task.checked ? "completed" : "incomplete";
    setTodo(updatedToDo);
  };
  const taskCompleted = () => {
    const completedTasks = todo.filter((task) => task.status === "completed");
    if (completedTasks.length === 0) {
      console.log("no task");
      setFilterTask([]);
    } else {
      setFilterTask(completedTasks);
    }
  };

  const taskIncompleted = () => {
    const incompleteTasks = todo.filter((task) => task.status === "incomplete");
    if (incompleteTasks.length === 0) {
      console.log("no task");
      setFilterTask([]);
    } else {
      setFilterTask(incompleteTasks);
    }
  };
  useEffect(() => {
    if (todo.length === 0) {
      return;
    }
    localStorage.setItem("Todo", JSON.stringify(todo));
  }, [todo]);
  useEffect(() => {
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
        <button onClick={() => taskCompleted()}>Completed</button>
        <button onClick={() => taskIncompleted()}>Incomplete</button>
        <button onClick={() => setFilterTask(null)}>Show All</button>
      </div>
      {/* <TestComponent text={inputValue} text2={"test2"} />
      <TestComponent text={inputValue} text2={"test2"} />
      <TestComponent text={inputValue} text2={"test2"} />
      <TestComponent
        text={inputValue}
        text2={"test2"}
        action={() => console.log("from outside")}
      /> */}

      <div className="card">
        {filterTask === null ? (
          todo.length === 0 ? (
            <p style={{ textAlign: "center", color: "gray" }}>
              No tasks available
            </p>
          ) : (
            todo.map((task, index) => (
              <div className="TaskListContainer" key={index}>
                <div className="TaskList">
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => checked(index)}
                    value={task.checked}
                  />
                  <label
                    style={{
                      textDecoration: task.checked ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </label>
                </div>
                <button onClick={() => deleteTask(index)}>
                  <img src="img/trash-can.png" alt="delete" />
                </button>
              </div>
            ))
          )
        ) : filterTask.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>
            No tasks matching filter
          </p>
        ) : (
          filterTask.map((task, index) => (
            <div className="TaskListContainer" key={index}>
              <div className="TaskList">
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => checked(index)}
                  value={task.checked}
                />
                <label
                  style={{
                    textDecoration: task.checked ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </label>
              </div>
              <button onClick={() => deleteTask(index)}>
                <img src="img/trash-can.png" alt="delete" />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
