import { useEffect, useState, useContext} from "react";
import { InputContext } from "../contexts/inputContext";
import axios from "axios";
const baseURL = "http://localhost:3001";

const useFetchData = () => {
  const [dataProvincias, setDataProvincias] = useState([]);
  const [dataLocalidades, setDataLocalidades] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);

  const { value } = useContext(InputContext);

  const { Provincia } = value;

  useEffect(() => {
    axios.get(`${baseURL}/api/provincias`).then((response) => {
      setDataProvincias(response.data);
    });
  }, []);

  useEffect(() => {
    dataProvincias.map((element) =>
      setProvincias((prev) => [...prev, element.nombre])
    );
  }, [dataProvincias]);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/localidades/provincias/${Provincia}`)
      .then((response) => {
        setDataLocalidades(response.data);
      });
  }, [Provincia]);

  useEffect(() => {
    dataLocalidades.map((element) =>
      setLocalidades((prev) => [...prev, element.nombre])
    );
  }, [dataLocalidades]);

  if (!provincias && !value) return null;

  return { localidades, provincias}
}

export default useFetchData;
