import { createContext, useState } from "react";

const InputContext = createContext({
  value: null,
  setValue: () => null,
});

// const initialState = {
//   Nombre: null,
//   Apellido: null,
//   Fnacto: null,
//   DNI: {
//     doc: null,
//     NroDoc: null,
//   },
//   Domicilio: {
//     Calle: null,
//     Numero: null,
//     Provincia: null,
//     Localidad: null,
//     CP: null,
//   },
// };

const InputProvider = ({ children }) => {
  const [value, setValue] = useState({});

  return (
    <InputContext.Provider value={{ value, setValue }}>
      {children}
    </InputContext.Provider>
  );
};

export { InputContext, InputProvider };
