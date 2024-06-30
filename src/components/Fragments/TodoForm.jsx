import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import Input from "../Elements/Input/Input";
import InputError from "../Elements/Input/InputError";

const TodoForm = ({ handleAddTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const todoRef = useRef(null);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validation()) {
      handleAddTodo(todo);

      setTodo("");
      setError(null);
    }
  };

  const validation = () => {
    if (!todo) {
      setError("Todo harus diisi");

      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    todoRef.current.focus();
  }, []);

  return (
    <form className="flex gap-x-2" onSubmit={handleSubmitForm}>
      <div className="w-full">
        <Input
          id="todo"
          name="todo"
          type="text"
          placeholder="Masukkan Todo anda"
          value={todo}
          handlerInputChange={handleTodoChange}
          ref={todoRef}
          classname={
            error
              ? "border-red-500 focus:outline-red-700"
              : "border-cyan-900 focus:outline-cyan-700"
          }
        />
        {error && <InputError message={error} />}
      </div>

      <Button
        classname="bg-cyan-700 text-white transition duration-200 hover:bg-cyan-900"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
