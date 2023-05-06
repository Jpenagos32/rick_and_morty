import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			let copyAllCharacters = [...state.allCharacters, action.payload];
			return {
				...state,
				myFavorites: copyAllCharacters,
				allCharacters: copyAllCharacters,
			};

		case FILTER:
			let filtrados = [];

			// Descomentar esto para que funcione la opcion sin filtro
			// if (action.payload === 'SinFiltro') {
			// 	filtrados = [...state.allCharacters];
			// } else {
			filtrados = [
				...state.allCharacters.filter(
					(char) => char.gender === action.payload
				),
			];
			// }

			return {
				...state,
				myFavorites: filtrados,
				allCharacters: [...state.allCharacters, action.payload],
			};

		case ORDER:
			let allCharCopy = [...state.allCharacters];

			if (action.payload === 'A') {
				allCharCopy.sort((a, b) => a.id - b.id); //de menor a mayor
			} else if (action.payload === 'D') {
				allCharCopy.sort((a, b) => b.id - a.id); //de mayor a menor
			} else {
				allCharCopy = [...state.allCharacters];
			}
			return {
				...state,
				myFavorites: allCharCopy,
			};

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(char) => char.id !== Number(action.payload)
				),
			};
		default:
			return { ...state };
	}
};

export default reducer;
