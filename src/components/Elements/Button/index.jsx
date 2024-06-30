const Button = ({
  classname = "bg-gray-500 text-white",
  type = "button",
  onClick = () => {},
  children,
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
