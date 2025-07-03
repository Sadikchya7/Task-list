const Card = ({ filterTask, checked, deleteTask, todo }) => {
  return (
    <div className="Card">
      {/* {console.log(filterTask.length)} */}
      {filterTask.length > 0
        ? filterTask.map((task, index) => (
            <div
              className="TaskListContainer"
              style={{
                backgroundColor: task.checked ? "#50C878" : "#FF0000",
              }}
              key={index}
            >
              <div
                className="TaskList"
                style={{
                  margin: task.checked ? "0 0 0 20px " : "0px",
                  color: "white",
                  width: task.checked ? "310px" : " 330px",
                }}
              >
                {/* {task.checked ? null : ( */}
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => checked(index)}
                  value={task.checked}
                />
                {/* )} */}
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
        : todo.map((task, index) => (
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
          ))}
      {/* {filterTask === null ? (
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
        )} */}
    </div>
  );
};
export { Card };
