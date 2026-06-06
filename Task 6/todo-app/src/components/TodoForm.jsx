import { useState } from "react";

function TodoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const newTask = task.trim();

    if (newTask === "") {
      alert("Please enter a task");
      return;
    }

    addTask(newTask);
    setTask("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoForm;