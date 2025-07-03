const Pages = ({
  taskCompleted,
  taskIncompleted,
  setFilterTask,
  todo,
  filterTask,
}) => {
  return (
    <div className="page">
      <button
        onClick={() => {
          taskCompleted();
        }}
      >
        Completed
      </button>
      <button
        onClick={() => {
          taskIncompleted();
        }}
      >
        Incomplete
      </button>
      <button
        onClick={() => {
          debugger;
          setFilterTask(todo);
          // console.log(filterTask.length);
        }}
      >
        Show All
      </button>
    </div>
  );
};
export { Pages };
