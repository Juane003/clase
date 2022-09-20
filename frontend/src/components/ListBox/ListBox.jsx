import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import Arrow from "@/assets/arrows.svg";
import { useContext } from "react";
import { InputContext } from "../../contexts/inputContext";
import { useEffect } from "react";

const ListBox = ({ list, className, id }) => {
  const [selected, setSelected] = useState(list[0]);

  const { setValue } = useContext(InputContext);

  useEffect(() => {
    setValue((prev) => ({ ...prev, [id]: selected }));
  }, [selected]);

  const renderElements = (element) => {
    return (
      <Listbox.Option className="p-1 m-1 rounded" key={element} value={element}>
        {element}
      </Listbox.Option>
    );
  };

  return (
    <Listbox
      id={id}
      as="div"
      className={`${className} flex flex-col text-white absolute h-16 w-80 mt-2`}
      value={selected}
      onChange={setSelected}
    >
      <Listbox.Button className="flex justify-between p-2 border-0 rounded bg-sky-500 relative">
        <span className="block">{selected}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <img className="w-5 h-6" src={Arrow} />
        </span>
      </Listbox.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="flex flex-col justify-start bg-sky-500 mt-1 rounded">
          {list.map(renderElements)}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default ListBox;
