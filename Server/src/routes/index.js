// ? Controllers:
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const router = require('express').Router();

router.get('/character/:id', (req, res) => {
	getCharById(req, res);
});

// tener este login es exactamente a hacer como hicimos en los demás
router.get('/login', login);
router.post('/login', login);

router.post('/fav', (req, res) => {
	postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
	deleteFav(req, res);
});

module.exports = { router };
