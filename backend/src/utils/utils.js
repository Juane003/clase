const fs = require("fs");

const formatName = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const filterData = (json) => {

  const filteredJson = json.map((item) => {

    const { nombre, id, provincia } = item;

    return {
      "nombre" : nombre,
      "id" : id,
      "provincia" : provincia
    }
  });

  saveJson(JSON.stringify(filteredJson));
}

const saveJson = (json, name) => {
  fs.writeFile(name+".json", json, (err) => console.log(err));
}

const pagination = (model) => {
	return (request, response, next) => {

		let page = Number(request.query.page);
		let limit = Number(request.query.limit);

		if(!page && !limit) {

			response.json(model)

		}

		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

		const result = {}

		if (endIndex < model.length) {

			result.next = {
				page: page + 1,
				limit: limit
			}

		}
		
		if (startIndex > 0) {

			result.previous = {
				page: page - 1,
				limit: limit
			}
		
		}

		result.result = model.slice(startIndex, endIndex);

		response.pagination = result;

		next();

	}
	
}

module.exports = {
  formatName,
  filterData,
	saveJson,
  pagination,
}