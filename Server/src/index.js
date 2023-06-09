const express = require('express');
const server = express();
const { router } = require('./routes/index');
const morgan = require('morgan');
const { conn } = require('./DB_connection');
const PORT = 3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, DELETE'
	);
	next();
});

server.use('/rickandmorty', router);

server.listen(PORT, async () => {
	// conectar con la base de datos:
	await conn.sync({ force: false }); // ! Poner en false cuando se termine de desarrollar
	console.log(`Server raised in port ${PORT}`);
});
