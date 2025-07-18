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
    const newTodo = [];
    for (let i = 0; i < todo.length; i++) {
      if (i !== index) {
        newTodo.push(todo[i]);
      }
    }
    setTodo(newTodo);
    console.log(index);
    console.log(todo);
  };
  //track checked box
  const [checkedState, setCheckedState] = useState([]);

  const handleCheckbox = (position) => {
    console.log(position);
    let checklist = JSON.parse(JSON.stringify(checkedState));
    if (checkedState.length === 0 && todo.length > 0) {
      checklist = new Array(todo.length).fill(false);
    }
    checklist[position] = !checklist[position];

    setCheckedState(checklist);
  };

  useEffect(() => {
    if (todo.length === 0) {
      return;
    }
    localStorage.setItem("Todo", JSON.stringify(todo));
  }, [todo]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("Todo");
    const storedvalue = localStorage.getItem("checkedboxes");
    if (savedTodos) {
      setTodo(JSON.parse(savedTodos));
    }
    if (storedvalue) {
      console.log("value", storedvalue);
      setCheckedState(JSON.parse(storedvalue));
    }
  }, []);

  useEffect(() => {
    if (checkedState.length === 0) {
      return;
    }
    console.log("checked", checkedState);
    localStorage.setItem("checkedboxes", JSON.stringify(checkedState));
  }, [checkedState]);

  // useEffect(() => {
  //   console.log("start");
  // }, []);
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
          <div className="TaskListContainer" key={index}>
            <div className="TaskList">
              <input
                type="checkbox"
                checked={checkedState[index]}
                onChange={() => handleCheckbox(index)}
                value={task}
              />
              {/* <input type="checkbox" value={task} onChange={handleCheckbox} /> */}
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
// return (
//   <div className="Card">
//     {
//       filterTask.length > 0 ? (
//         filterTask.map((task, index) => (
//           <div
//             className="TaskListContainer"
//             style={{
//               backgroundColor: task.checked ? "#50C878" : "#FF0000",
//             }}
//             key={index}
//           >
//             <div className="TaskList">
//               <input
//                 type="checkbox"
//                 checked={task.checked}
//                 onChange={() => checked(index)}
//                 value={task.checked}
//               />
//               <label
//                 style={{
//                   textDecoration: task.checked ? "line-through" : "none",
//                 }}
//               >
//                 {task.title}
//               </label>
//             </div>
//             <button onClick={() => deleteTask(index)}>
//               <img src="img/trash-can.png" alt="delete" />
//             </button>
//           </div>
//         ))
//       ) : todo.length === 0 ? (
//         <p style={{ textAlign: "center", color: "gray" }}>
//           No tasks available
//         </p>
//       ) : (
//         todo.map((task, index) => (
//           <div className="TaskListContainer" key={index}>
//             <div className="TaskList">
//               <input
//                 type="checkbox"
//                 checked={task.checked}
//                 onChange={() => checked(index)}
//                 value={task.checked}
//               />
//               <label
//                 style={{
//                   textDecoration: task.checked ? "line-through" : "none",
//                 }}
//               >
//                 {task.title}
//               </label>
//             </div>
//             <button onClick={() => deleteTask(index)}>
//               <img src="img/trash-can.png" alt="delete" />
//             </button>
//           </div>
//         ))
//       )
//       //  && <div> {taskCompleted ? "EMPTY" : "not empty"}</div>
//     }
//   </div>
// );
