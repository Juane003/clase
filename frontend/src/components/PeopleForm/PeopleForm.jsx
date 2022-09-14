import { ListBox } from "../Listbox";
import { TextInput } from "../TextInput";

const genders = ["Masculino", "Femenino", "Otro"];

const PeopleForm = () => {
  return (
    <div>
      <TextInput name="Apellido"/>
      <TextInput name="Nombre"/>
      <ListBox array={genders}/>
    </div>
  )
}

export default PeopleForm;