import DateInput from "../DateInput/DateInput";
import { ListBox } from "../Listbox";
import { TextInput } from "../TextInput";

const genders = ["Masculino", "Femenino", "Otro"];

const PeopleForm = () => {
  return (
    <div>
      <TextInput name="Apellido" />
      <TextInput name="Nombre" />
      <div>
        <DateInput label="Fnacto" />
      </div>
      <ListBox list={genders} id="genero" />
    </div>
  );
};

export default PeopleForm;
