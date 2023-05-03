import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { filterCards, orderCards } from '../redux/actions';
import { useState } from 'react';

const Favorites = (props) => {
	const [aux, setAux] = useState(false);

	const favorites = useSelector((state) => state.myFavorites);
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		dispatch(orderCards(event.target.value));
		setAux(!aux);
	};

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value));
	};

	return (
		<>
			<div className="favoritesFilter">
				<select
					onChange={handleOrder}
					defaultValue="--Seleccione orden---"
					className="favoritesFilterSelect"
				>
					<option disabled>--Seleccione orden---</option>
					<option value="No">Sin orden</option>
					<option value="A">Ascendente</option>
					<option value="D">Descendente</option>
				</select>
				<select
					onChange={handleFilter}
					defaultValue="--Seleccione tipo de filtro--"
					className="favoritesFilterSelect"
				>
					<option disabled>--Seleccione tipo de filtro--</option>
					<option value="SinFiltro">Sin Filtro</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Genderless">Genderless</option>
					<option value="unknown">Unknown</option>
				</select>
			</div>
			<div className="favorites">
				{favorites.map((char, index) => {
					return (
						<Card
							key={index}
							id={char.id}
							name={char.name}
							status={char.status}
							species={char.species}
							gender={char.gender}
							origin={char.origin?.name}
							image={char.image}
							onClose={props.onClose}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Favorites;
