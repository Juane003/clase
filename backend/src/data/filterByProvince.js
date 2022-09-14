const localidades = require("./localidades_filtradas.json");
const provincias = require("./provincias.json");

const fs = require("fs");

const { formatName } = require("../utils/utils");

const filterByProvince = (provincia, json) => {
  const filteredLocations = json.filter(location => formatName(location.provincia.nombre.toLowerCase()) === formatName(provincia.toLowerCase()));

  fs.writeFile(provincia+".json", JSON.stringify(filteredLocations), (err) => console.log(err));
}

const nombreProvincia = provincias.map(provincia => provincia.nombre);

nombreProvincia.map(nombre => filterByProvince(nombre, localidades))

