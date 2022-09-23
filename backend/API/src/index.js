const express = require('express');
const cors = require('cors');

const provincias = require("./data/provincias.json");

const localidades = require("./data/localidades_filtradas.json");

const utils = require("./utils/utils")

const { formatName, pagination } = utils;

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/provincias', pagination(provincias), (request, response) => {

  response.json(response.pagination);

});

app.get('/api/provincias/:id', (request, response) => {

  const nombre = request.params.id;

  const selected = provincias.find(provincia => formatName(provincia.nombre).toLowerCase() === formatName(nombre).toLowerCase());

  if (selected) response.json(selected);
  else response.send(404);

});

app.get('/api/localidades/', pagination(localidades), (request, response) => {
  response.json(response.pagination);
});

app.get('/api/localidades/:id', (request, response) => {

  const nombre = request.params.id;

  const selected = localidades.find(localidad => formatName(localidad.nombre).toLowerCase() === formatName(nombre).toLowerCase());

  if (selected) response.json(selected);
  else response.send(404);

});

app.get('/api/localidades/provincias/:id', (request, response) => {

  const nombre = request.params.id;

  const selected = localidades.filter(localidad => formatName(localidad.provincia.nombre).toLowerCase() === formatName(nombre).toLowerCase());

  if (selected) response.json(selected);
  else response.send(404);

});

app.listen(PORT, '127.0.0.1');

console.log(`Server running on port ${PORT}`);