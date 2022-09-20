import { ListBox } from "../Listbox";
import { TextInput } from "../TextInput";

const tipos = ["DNI", "PASAPORTE", "OTRO"];

const DocumentForm = () => {
  return (
    <div className="flex flex-col">
      <TextInput name="NroDoc" className="mt-20 z-10" />
      <ListBox list={tipos} className="z-20" id="doc" />
    </div>
  );
};

export default DocumentForm;
