import { useSelector } from 'react-redux';
import Card from './Card';

const Favorites = (props) => {
	const favorites = useSelector((state) => state.myFavorites);
	return (
		<div className="favorites">
			{favorites.map((char) => {
				return (
					<Card
						id={char.id}
						key={char.id}
						name={char.name}
						status={char.status}
						species={char.species}
						gender={char.gender}
						origin={char.origin.name}
						image={char.image}
						onClose={props.onClose}
					/>
				);
			})}
		</div>
	);
};

export default Favorites;
