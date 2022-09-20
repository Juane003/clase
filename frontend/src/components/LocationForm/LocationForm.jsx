import useFetchData from "../../hooks/useFetchData";
import { ComboBox } from "../ComboBox";
import { TextInput } from "../TextInput";

const LocationForm = () => {
  const { provincias, localidades } = useFetchData();

  return (
    <div>
      <TextInput name="Calle" />
      <TextInput type="number" name="Numero" />
      <ComboBox list={provincias} placeholder="Provincia" className="z-20" />
      {localidades && (
        <ComboBox
          list={localidades}
          className="z-10 mt-16 pt-2"
          placeholder="Localidad"
        />
      )}
    </div>
  );
};

export default LocationForm;
