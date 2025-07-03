const InputBox = ({ inputValue, ToDoList, addTask }) => {
  return (
    <div className="input-box">
      <input
        type="text"
        value={inputValue}
        onChange={ToDoList}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export { InputBox };
