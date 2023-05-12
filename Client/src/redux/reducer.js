import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './actions';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: action.payload,
				allCharacters: action.payload,
			};

		case FILTER:
			const allCharactersFiltered = state.allCharacters.filter(
				(char) => char.gender === action.payload
			);
			return {
				...state,
				myFavorites:
					action.payload === 'SinFiltro'
						? [...state.allCharacters]
						: allCharactersFiltered,
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
			return { ...state, myFavorites: action.payload };
		default:
			return { ...state };
	}
};

export default reducer;
