const utils = require("../utils/utils");
const { filterData } = utils;

const localidades = require("./localidades.json");

filterData(localidades)