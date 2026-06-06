function TodoList({ todos, deleteTask }) {
  if (todos.length === 0) {
    return <p>No Tasks Available</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <span>{todo}</span>

          <button
            className="delete-btn"
            onClick={() => deleteTask(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;