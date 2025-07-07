import "./style.css";
const Card = ({ filterTask, checked, deleteTask, todo, deleteAll }) => {
  const onChecked = (index) => {
    const updatedToDo = [...todo];
    const task = updatedToDo[index];
    task.checked = !task.checked;
    task.status = task.checked ? "completed" : "incomplete";

    checked(updatedToDo);
  };
  return (
    <div className="Card">
      <button className="delete-all-button" onClick={() => deleteAll()}>
        Delete all
      </button>
      <div>
        {filterTask === null ? (
          todo.length === 0 ? (
            <p style={{ textAlign: "center", color: "gray" }}>
              No tasks available
            </p>
          ) : (
            todo.map((task, index) => (
              <div>
                <div className="TaskListContainer" key={index}>
                  <div className="TaskList">
                    <input
                      type="checkbox"
                      checked={task.checked}
                      onChange={() => onChecked(index)}
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
                  <button
                    className="delete-icon"
                    onClick={() => deleteTask(index)}
                  >
                    <img src="src/assets/trash-can.png" alt="delete" />
                  </button>
                </div>
              </div>
            ))
          )
        ) : filterTask.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>
            No tasks matching filter
          </p>
        ) : (
          filterTask.map((task, index) => (
            <div
              className="TaskListContainer"
              key={index}
              style={{
                backgroundColor: task.checked ? "#50C878" : "#FF0000",
                color: "white",
              }}
            >
              <div className="TaskList">
                <label
                  style={{
                    margin: "10px 20px ",
                  }}
                >
                  {task.title}
                </label>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export { Card };
