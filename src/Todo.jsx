import { useState, useEffect } from "react";
import "./App.css";
import { InputBox } from "./Input-box/InputBox";
import "./Input-box/inputbox.css";
import { Pages } from "./Pages/page";
import "./Pages/page.css";
import { Card } from "./Card/card";
import "./Card/card.css";

// import "./Input-box/inputbox.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterTask, setFilterTask] = useState([]);

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
    setFilterTask([...filterTask, newTask]);
    setInputValue("");
    // setFilterTask();
  };

  const deleteTask = (index) => {
    const NewToDO = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        NewToDO.push(todo[i]);
      }
    }
    setTodo(NewToDO);
    setFilterTask(todo);
  };
  const checked = (index) => {
    const updatedToDo = [...todo];
    const task = updatedToDo[index];
    task.checked = !task.checked;
    task.status = task.checked ? "completed" : "incomplete";
    setTodo(updatedToDo);
  };
  const taskCompleted = () => {
    console.log("called", todo);
    const completedTasks = todo.filter((task) => task.status === "completed");
    console.log("Completed");
    if (completedTasks.length === 0) {
      setFilterTask([]);
    } else {
      setFilterTask(completedTasks);
    }
  };

  const taskIncompleted = () => {
    console.log("Incomplete");
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
      console.log(savedTodos);

      setTodo(JSON.parse(savedTodos));
    }
  }, []);
  useEffect(() => {
    const clickEventHandler = (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    };

    document.addEventListener("keydown", clickEventHandler);

    return () => {
      document.removeEventListener("keydown", clickEventHandler);
    };
  }, [inputValue, todo]);
  return (
    <>
      <h1>To-Do List</h1>

      <InputBox inputValue={inputValue} ToDoList={ToDoList} addTask={addTask} />
      <Pages
        taskCompleted={taskCompleted}
        taskIncompleted={taskIncompleted}
        setFilterTask={setFilterTask}
        todo={todo}
        filterTask={filterTask}
      />
      <Card
        filterTask={filterTask}
        checked={checked}
        deleteTask={deleteTask}
        todo={todo}
        setFilterTask={setFilterTask}
        taskCompleted={taskCompleted.completedTasks}
        taskIncompleted={taskIncompleted.incompleteTasks}
      />
    </>
  );
}

export default App;
