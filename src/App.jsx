import { useEffect, useState } from "react";
import Todo from "./components/Fragments/Todo";
import TodoForm from "./components/Fragments/TodoForm";
import TodoInfo from "./components/Fragments/TodoInfo";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todolists")) || [],
  );

  useEffect(() => {
    localStorage.setItem("todolists", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime().toString(),
        todo,
        isComplete: false,
      },
    ]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToogleTodo = (id, isComplete) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isComplete } : todo;
      }),
    );
  };

  const handleSortUpTodo = (index) => {
    const newTodos = [...todos];

    [newTodos[index - 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index - 1],
    ];

    setTodos(newTodos);
  };

  const handleSortDownTodo = (index) => {
    const newTodos = [...todos];

    [newTodos[index + 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index + 1],
    ];

    setTodos(newTodos);
  };

  return (
    <div className="flex items-center justify-center md:h-screen md:w-full">
      <div className="flex w-full max-w-sm flex-col gap-y-5 p-5 md:max-w-3xl md:border-2 md:border-cyan-900 md:p-10 md:shadow-[6px_6px_0px_4px_rgba(22,78,99,1)]">
        <h3 className="text-center text-2xl font-bold text-slate-900">
          My Todolists
        </h3>
        <div className="flex flex-col gap-y-5">
          {todos.map((todo, index) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                index={index}
                todoLength={todos.length}
                handleDeleteTodo={handleDeleteTodo}
                handleToogleTodo={handleToogleTodo}
                handleSortUpTodo={handleSortUpTodo}
                handleSortDownTodo={handleSortDownTodo}
              />
            );
          })}
        </div>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoInfo todos={todos} />
      </div>
    </div>
  );
};

export default App;
