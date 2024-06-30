import Label from "./Label";
import Input from "./Input";
import InputError from "./InputError";
import { forwardRef } from "react";

const InputForm = forwardRef(
  (
    { label, name, type, placeholder, value, error = null, handlerInputChange },
    ref
  ) => {
    return (
      <div className="mb-6">
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          classname={error && "border-red-500"}
          value={value}
          handlerInputChange={handlerInputChange}
          ref={ref}
        />
        {error && <InputError message={error} />}
      </div>
    );
  }
);

export default InputForm;
