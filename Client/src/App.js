import './styles/App.scss';
import Cards from './components/Cards.jsx';
import { useEffect, useState } from 'react';
import Logo from './components/Logo';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail';
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';
import Favorites from './components/Favorites';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';

function App() {
	const [access, setAccess] = useState(
		localStorage.getItem('access') === 'true'
	);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	// const EMAIL = 'jpenagos32@gmail.com';
	// const PASSWORD = 'react123';

	const [characters, setCharacters] = useState([]);

	function login(userData) {
		const { email, password } = userData;
		const URL = 'http://localhost:3001/rickandmorty/login/';
		axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
			const { access } = data;
			setAccess(access);
			access && navigate('/home');
		});
	}

	const logOut = () => {
		localStorage.removeItem('access');
		setAccess(false);
		navigate('/');
	};

	useEffect(() => {
		!access && navigate('/');
	}, [access]);

	async function onSearch(id) {
		try {
			const characterExists = characters.find(
				(character) => character.id === id
			);

			if (characterExists) {
				window.alert('Este personaje ya ha sido agregado');
				return;
			}

			const { data } = await axios(
				`http://localhost:3001/rickandmorty/character/${id}`
			);

			// .then(({ data }) => {
			if (data.name) {
				setCharacters((oldChars) => [...oldChars, data]);
			} else {
				window.alert('¡No hay personajes con este ID!');
			}

			// })
		} catch (error) {
			window.alert('¡No hay personajes con este ID!');
		}

		// .catch((error) => {
		// 	window.alert('¡No hay personajes con este ID!');
		// });
	}

	const onClose = (id) => {
		const filteredCharacters = characters.filter(
			(character) => character.id !== id
		);
		setCharacters(filteredCharacters);

		dispatch(removeFav(id));
	};

	const location = useLocation();

	return (
		<div className='App'>
			{location.pathname !== '/' && (
				<Nav onSearch={onSearch} logOut={logOut} />
			)}
			{location.pathname !== '/' && location.pathname !== '*' && <Logo />}

			<Routes>
				<Route path='/' element={<Form login={login} />} />
				<Route
					path='/home'
					element={
						<Cards characters={characters} onClose={onClose} />
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route
					path='/favorites'
					element={<Favorites onClose={onClose} />}
				/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
