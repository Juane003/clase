import { PeopleForm } from "../PeopleForm";
import { DocumentForm } from "../DocumentForm";
import { TextInput } from "../TextInput";
import { LocationForm } from "../LocationForm";
import { Modal } from "../Modal";
import Button from "../Button/Button";
import { InputContext } from "../../contexts/inputContext";
import { useContext } from "react";
import axios from "axios";

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

  const modalJson = {
    nombre: Nombre,
    apellido: Apellido,
    fnacto: Fnacto,
    dni: {
      tipo: doc,
      numero: NroDoc,
    },
    domicilio: {
      calle: Calle,
      numero: Numero,
      provincia: Provincia,
      localidad: Localidad,
    },
  };

  const handleOnClickCancel = () => {
    setValue({});
  };

  const handleOnSubmit = async () => {
    axios
      .post("http://localhost:3001/users/create", {
        nombre: Nombre,
        apellido: Apellido,
        fnacto: Fnacto,
        dni: {
          tipo: doc,
          nro: NroDoc,
        },
        domicilio: {
          calle: Calle,
          numero: Numero,
          provincia: Provincia,
          localidad: Localidad,
        },
      })
      .then((response) => console.log(response));
  };

  return (
    <div>
      <form className="w-full h-full flex flex-row content-center">
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

        <Button
          text="Guardar"
          type="button"
          disabled={!isSubbmitable}
          onClick={handleOnSubmit}
        />
        <Button text="Cancelar" onClick={handleOnClickCancel} />
        <Modal name="Json" object={JSON.stringify(modalJson, null, 4)} />
      </form>
    </div>
  );
};

export default Form;
