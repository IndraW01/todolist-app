import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      id,
      name,
      type = "text",
      placeholder,
      classname,
      value,
      handlerInputChange,
    },
    ref
  ) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        className={`text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${classname}`}
        placeholder={placeholder}
        value={value}
        onChange={handlerInputChange}
        ref={ref}
      />
    );
  }
);

export default Input;
