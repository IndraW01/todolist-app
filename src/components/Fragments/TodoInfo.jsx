const TodoInfo = ({ todos }) => {
  return (
    <div className="flex flex-col gap-y-3 font-medium">
      <p>Checklist Todo : {todos.filter((todo) => todo.isComplete).length}</p>
      <p>
        Unchecklist Todo : {todos.filter((todo) => !todo.isComplete).length}
      </p>
    </div>
  );
};

export default TodoInfo;
