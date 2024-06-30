import Button from "../Elements/Button";

const Todo = ({
  todo,
  index,
  todoLength,
  handleDeleteTodo,
  handleToogleTodo,
  handleSortUpTodo,
  handleSortDownTodo,
}) => {
  const handleCheckboxChange = (e) => {
    handleToogleTodo(todo.id, e.target.checked);
  };

  const handleUpTodo = (index) => {
    handleSortUpTodo(index);
  };

  const handleDownTodo = (index) => {
    handleSortDownTodo(index);
  };

  return (
    <div className="flex flex-col justify-between gap-y-4 rounded-lg bg-cyan-800 px-5 py-4 text-white md:flex-row md:items-center">
      <div className="flex gap-x-2">
        <input
          name="todo"
          type="checkbox"
          className="w-5"
          checked={todo.isComplete}
          onChange={handleCheckboxChange}
        />
        <p
          className={`text-xl font-medium ${
            todo.isComplete ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </p>
      </div>
      <div className="flex gap-x-3">
        {index !== 0 && (
          <Button
            onClick={() => handleUpTodo(index)}
            classname="text-lg border border-white text-white transition duration-200 hover:bg-white hover:text-cyan-900 hover:border-cyan-900"
          >
            👆🏻
          </Button>
        )}

        {index !== todoLength - 1 && (
          <Button
            onClick={() => handleDownTodo(index)}
            classname="text-lg border border-white text-white transition duration-200 hover:bg-white hover:text-cyan-900 hover:border-cyan-900"
          >
            👇🏻
          </Button>
        )}

        <Button
          onClick={() => handleDeleteTodo(todo.id)}
          classname="text-lg border border-white text-white transition duration-200 hover:bg-white hover:text-cyan-900 hover:border-cyan-900"
        >
          ❌
        </Button>
      </div>
    </div>
  );
};

export default Todo;
