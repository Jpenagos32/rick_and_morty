const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
	try {
		const { id, name, origin, status, image, species, gender } = req.body;

		if (!(id || name || origin || status || image || species || gender)) {
			return res.status(401).send('Faltan datos');
		}

		await Favorite.findOrCreate({
			where: {
				name,
				origin,
				status,
				image,
				species,
				gender,
				id,
			},
		});

		const favoritos = await Favorite.findAll();

		res.status(200).json(favoritos);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

module.exports = postFav;
