const Button = ({ onClick, text, type, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="p-2 h-10 w-20 bg-sky-500 text-white rounded text-center hover:bg-sky-700 duration-200 active:bg-sky-500"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
