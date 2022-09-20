import { useContext } from "react";
import { InputContext } from "../../contexts/inputContext";

const DateInput = ({ label }) => {
  const { setValue } = useContext(InputContext);

  const handleOnChange = (event) => {
    setValue((prev) => ({ ...prev, [label]: event.target.value }));
  };

  return (
    <div className="flex flex-col h-16 w-80">
      <label className="flex justify-start">{label}</label>
      <input
        type="date"
        className="border rounded bg-sky-500 text-white"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default DateInput;
