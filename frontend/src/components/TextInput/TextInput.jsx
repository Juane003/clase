import { useState, useContext } from "react";
import { InputContext } from "../../contexts/inputContext";

const TextInput = ({ name, className, type }) => {
  const [text, setText] = useState("");

  const { setValue } = useContext(InputContext);

  const handleOnChange = (event) => {
    setText(event.target.value);
    setValue((prev) => ({ ...prev, [name]: event.target.value }));
  };

  return (
    <div className={`${className} relative flex flex-col w-80 h-16 mt-2`}>
      <input
        onChange={handleOnChange}
        id={name}
        type={!type ? "text" : type}
        className=" border-b-2 rounded p-2 outline-none focus:border-sky-500 peer"
      />

      <label
        htmlFor={name}
        className={`p-2 flex flex-start top-0 absolute 
          ${
            !text
              ? "peer-focus:text-xs transition-all peer-focus:-top-3 peer-focus:text-sky-500"
              : "text-xs text-sky-500 -top-3"
          }
          `}
      >
        {name}
      </label>
    </div>
  );
};

export default TextInput;
