import { useState, useEffect } from "react";
import "./App.css";
import { Input } from "./Components/Input";
import { Card } from "./Components/Card";
import { Tab } from "./Components/Tab";

function App() {
  const [todo, setTodo] = useState([]);
  const [filterTask, setFilterTask] = useState(null);

  const addTask = (newTask) => {
    setTodo([...todo, newTask]);
    setFilterTask(null);
  };

  const deleteTask = (index) => {
    const newTodo = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        newTodo.push(todo[i]);
      }
    }
    setTodo(newTodo);
    setFilterTask(null);
  };

  const deleteAll = () => {
    setTodo([]);
    setFilterTask(null);
  };

  const checked = (updatedTodo) => {
    setTodo(updatedTodo);
  };

  const taskCompleted = () => {
    const completedTasks = todo.filter((task) => task.status === "completed");
    if (completedTasks.length === 0) {
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
      // console.log(savedTodos);

      setTodo(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <>
      <h1>To-Do List</h1>

      <Input
        addTask={addTask}
        // label={"New Task:"}
        placeholder={"This is placeholder"}
      />

      <Tab
        config={[
          {
            label: "COMPLETED",
            onClick: () => {
              taskCompleted();
            },
          },
          {
            label: "INCOMPLETED",
            onClick: () => {
              taskIncompleted();
            },
          },
          {
            label: "ALL",
            onClick: () => {
              setFilterTask(null);
            },
          },
        ]}
      />

      <Card
        filterTask={filterTask}
        checked={checked}
        deleteTask={deleteTask}
        todo={todo}
        deleteAll={deleteAll}
      />
    </>
  );
}

export default App;
