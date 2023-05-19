const { User } = require('../DB_connection');

const postUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!(email || password)) {
			return res.status(400).send('Faltan datos');
		}

		await User.findOrCreate({
			where: {
				email,
				password,
			},
		});
	} catch (error) {
		res.status(500).json({ err: error.message });
	}
};

module.exports = postUser;
