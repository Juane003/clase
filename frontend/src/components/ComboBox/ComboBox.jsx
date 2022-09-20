import { Combobox } from "@headlessui/react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { InputContext } from "../../contexts/inputContext";

const ComboBox = ({ list, className, placeholder }) => {
  const [selected, setSelected] = useState(list[0]);
  const [query, setQuery] = useState("");

  const { setValue } = useContext(InputContext);

  const filteredQuery =
    query === ""
      ? list
      : list.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  const renderOptions = (option, index) => {
    return (
      <Combobox.Option value={option} key={index}>
        {option}
      </Combobox.Option>
    );
  };

  useEffect(() => {
    setValue((prev) => ({ ...prev, [placeholder]: selected }));
  }, [selected]);

  return (
    <Combobox
      as="div"
      value={selected}
      onChange={setSelected}
      className={`${className} flex flex-col text-white absolute h-16 w-80 mt-2`}
    >
      <Combobox.Input
        placeholder={placeholder}
        className="flex justify-between p-2 border-0 rounded bg-sky-500 relative placeholder:text-white"
        onChange={(event) => setQuery(event.target.value)}
      />

      <Combobox.Options className="flex flex-col justify-start bg-sky-500 mt-1 rounded">
        {filteredQuery.map(renderOptions)}
      </Combobox.Options>
    </Combobox>
  );
};

export default ComboBox;
