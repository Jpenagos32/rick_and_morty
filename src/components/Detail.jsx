import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/App.scss';

const Detail = (props) => {
	const { id } = useParams();

	const [character, setCharacter] = useState({});

	useEffect(() => {
		axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
			<div className="detailInfo">
				<h1>{character.name}</h1>
				<table className="detailTable">
					<tr>
						<td className="detailTableDescription">STATUS:</td>
						<td>{character.status}</td>
					</tr>
					<tr>
						<td className="detailTableDescription">SPECIE:</td>
						<td>{character.species}</td>
					</tr>
					<tr>
						<td className="detailTableDescription">GENDER:</td>
						<td>{character.gender}</td>
					</tr>
					<tr>
						<td className="detailTableDescription">ORIGIN:</td>
						<td>
							{character.origin ? character.origin.name : null}
						</td>
					</tr>
				</table>
			</div>
			<div className="detailImage">
				<img src={character.image} alt={`${character.name} img`} />
			</div>
			<Link className="detailLinkText" to="/home">
				<button className="detailVolver">Volver</button>
			</Link>
		</div>
	);
};

export default Detail;
