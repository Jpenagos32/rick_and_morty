const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
	try {
		const { id } = req.params;
		await Favorite.destroy({
			where: {
				id,
			},
		});

		const favoritos = await Favorite.findAll();

		res.status(200).json(favoritos);
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

module.exports = deleteFav;
