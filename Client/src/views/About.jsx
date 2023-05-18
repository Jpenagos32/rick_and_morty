import InstagramLogo from '../images/icons/instagram.png';
import LinkedinLogo from '../images/icons/linkedin.png';
import GithubLogo from '../images/icons/github.png';
import '../styles/App.scss';

const About = (props) => {
	return (
		<div className="about">
			<h1>Desarrollador:</h1>
			<h2>Julian Andres Penagos</h2>
			<p className="aboutMe">
				Hola!!
				<br />
				<br />
				Soy desarrollador web full stack en proceso actualmente,
				estudiante de Henry.
				<br />
				<br />
				Siempre he tenido una pasión por aprender cosas nuevas.
				<br />
				Tengo experiencia en:
				<br />
				JavaScript, React, Git, PHP, HTML, CSS, Sass, NodeJS.
				<br />
				<br />
				Si necesitas un desarrollador con experiencia en React,
				JavaScript, o PHP puedes ponerte en contacto conmigo. con gusto
				responderé tus mensajes!
			</p>
			<div className="aboutLogos">
				<a
					href="https://www.instagram.com/julianpenagos32/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={InstagramLogo} alt="Instagram Icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/julian-andres-penagos/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={LinkedinLogo} alt="Instagram Icon" />
				</a>
				<a
					href="https://github.com/Jpenagos32"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="aboutGithubLogo"
						src={GithubLogo}
						alt="Github Icon"
					/>
				</a>
			</div>
			<p>Correo: jpenagos32@gmail.com</p>
		</div>
	);
};

export default About;
