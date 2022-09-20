import { PeopleForm } from "../PeopleForm";
import { DocumentForm } from "../DocumentForm";
import { TextInput } from "../TextInput";
import { LocationForm } from "../LocationForm";
import Button from "../Button/Button";
import { InputContext } from "../../contexts/inputContext";
import { useContext } from "react";

const Form = () => {
  const { value, setValue } = useContext(InputContext);

  const {
    Nombre,
    Apellido,
    Fnacto,
    doc,
    NroDoc,
    Calle,
    Numero,
    Provincia,
    Localidad,
  } = value;

  const isSubbmitable =
    Nombre &&
    Apellido &&
    Fnacto &&
    doc &&
    NroDoc &&
    Calle &&
    Numero &&
    Provincia &&
    Localidad;

  const handleOnClickCancel = () => {
    setValue({});
  };

  const handleOnSubmit = () => {
    // const jsonDb = {
    //   nombre: Nombre,
    //   apellido: Apellido,
    //   fnacto: Fnacto,
    //   dni: {
    //     tipo: doc,
    //     numero: NroDoc,
    //   },
    //   domicilio: {
    //     calle: Calle,
    //     numero: Numero,
    //     provincia: Provincia,
    //     localidad: Localidad,
    //   },
    // };
    //POST REQUEST TO BACKEND
  };

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="w-full h-full flex flex-row content-center"
      >
        <div>
          <h1>Formulario de Carga</h1>
          <PeopleForm />
        </div>

        <div className="flex flex-col ml-6 mr-6">
          <h1>Documento</h1>
          <DocumentForm />
          <TextInput type="number" name="Telefono" />
        </div>

        <div className="flex flex-col">
          <h1>Domicilio</h1>
          <LocationForm />
        </div>

        <Button text="Guardar" type="submit" disabled={!isSubbmitable} />
        <Button text="Cancelar" onClick={handleOnClickCancel} />
      </form>
    </div>
  );
};

export default Form;
