import { Listbox } from "@headlessui/react";
import { useState } from "react";
import Arrow from "$/assets/arrows.svg";

const ListBox = ( {array} ) => {

  if(!array) return null;

  const [selected, setSelected] = useState(array[0]);

  return (
    <Listbox as="div" className="flex flex-col text-white w-48 absolute z-10" value={selected} onChange={setSelected}>
      <Listbox.Button className="flex justify-between p-2 border-0 rounded bg-sky-500 relative">
        <span className="block">{selected}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2"> <img className="w-5 h-6"src={Arrow}/> </span>
      </Listbox.Button>
      <Listbox.Options className="flex flex-col justify-start bg-sky-500 mt-1 rounded">
        {array.map((element) => (
          <Listbox.Option
            className="mt-1 rounded"
            key={element}
            value={element}
            disabled={element}
          >
            {element}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default ListBox;