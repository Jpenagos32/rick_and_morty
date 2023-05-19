import { connect } from 'react-redux';
import '../styles/App.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../redux/actions';

function Card(props) {
	const [isFav, setIsFav] = useState(false);

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false);
			props.removeFav(props.id);
		} else if (!isFav) {
			setIsFav(true);
			props.addFav(props);
		}
	};

	useEffect(() => {
		props.myFavorites.forEach((fav) => {
			if (fav.id === props.id) {
				setIsFav(true);
			}
		});
	}, [props.myFavorites]);

	return (
		<div className='card'>
			<div className='cardButton'>
				{isFav ? (
					<button className='cardLikeBtn' onClick={handleFavorite}>
						❤️
					</button>
				) : (
					<button className='cardLikeBtn' onClick={handleFavorite}>
						🤍
					</button>
				)}
				<h2 className='cardHeader'>
					<Link to={`/detail/${props.id}`} className='cardHeaderLink'>
						{props.name}
					</Link>
				</h2>
				<button
					className='cardCloseBtn'
					onClick={() => props.onClose(props.id)}
				>
					X
				</button>
			</div>
			<img src={props.image} alt='' />

			<div className='textBg'>
				<h2>{props.status}</h2>
				<h2>{props.species}</h2>
				<h2>{props.gender}</h2>
				<h2>{props.origin?.name}</h2>
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addFav: (character) => {
			dispatch(addFav(character));
		},
		removeFav: (id) => {
			dispatch(removeFav(id));
		},
	};
};

const mapStateToProps = (state) => {
	return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
