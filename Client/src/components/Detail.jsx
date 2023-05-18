import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.scss';

const Detail = (props) => {
	const { id } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
			({ data }) => {
				if (data.name) {
					setCharacter(data);
				} else {
					window.alert('No hay personajes con ese ID');
				}
			}
		);
		return setCharacter({});
	}, [id]);

	// console.log(character.origin? character.origin.name: null);

	return (
		<div className="detail">
			<div className="detailImage">
				<img src={character.image} alt={`${character.name} img`} />
			</div>
			<div className="detailInfo">
				<h1 className="detailInfoTitle">{character.name}</h1>
			</div>
			<div className="detailDivDescription">
				<div className="detailDivDescriptionTtle">
					<h3>STATUS:</h3>
					<h3>SPECIE:</h3>
					<h3>GENDER:</h3>
					<h3>ORIGIN:</h3>
				</div>
				<div className="detilDivDescriptionCntnt">
					<p>{character.status}</p>
					<p>{character.species}</p>
					<p>{character.gender}</p>
					<p>{character.origin?.name}</p>
				</div>
			</div>
			<Link className="detailLinkText" to="/home">
				<button className="detailVolver">Volver</button>
			</Link>
		</div>
	);
};

export default Detail;
