import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    if (todos.includes(task)) {
      alert("Task already exists");
      return;
    }

    const updatedTodos = [...todos, task].sort((a, b) =>
      a.localeCompare(b)
    );

    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <TodoForm addTask={addTask} />

      <TodoList
        todos={todos}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;