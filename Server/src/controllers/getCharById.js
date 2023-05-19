const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await axios.get(`${URL}/${id}`);
		const { status, name, species, origin, image, gender } = response.data;

		if (!name) throw new Error(`Faltan datos del personaje con ID: ${id} `);

		const character = {
			id,
			name,
			species,
			origin,
			image,
			gender,
			status,
		};

		return res.status(200).json(character);
	} catch (error) {
		return error.message.includes('ID')
			? res.status(404).send(error.message)
			: res.status(500).send(error.response.data.error);
	}

	// axios
	// 	.get(`${URL}/${id}`)
	// 	.then((response) => response.data)
	// 	.then(({ status, name, species, origin, image, gender }) => {
	// 		if (name) {
	// 			const character = {
	// 				id,
	// 				name,
	// 				species,
	// 				origin,
	// 				image,
	// 				gender,
	// 				status,
	// 			};
	// 			return res.status(200).json(character);
	// 		}

	// 		return res.status(404).send('Not Found');
	// 	})
	// 	.catch((error) => res.status(500).send(error.message));
};

module.exports = getCharById;
