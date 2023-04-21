import InstagramLogo from '../images/icons/instagram.png';
import LinkedinLogo from '../images/icons/linkedin.png';

const About = (props) => {
    return (
        <div className="about">
            <h1>Desarrollador:</h1>
            <h2>Julian Andres Penagos</h2>
            <div className='aboutLogos'>
                <a href="https://www.instagram.com/julianpenagos32/" target='_blank'>
                    <img src={InstagramLogo} alt="Instagram Icon" />
                </a>
                <a href="https://www.linkedin.com/in/julian-andres-penagos/" target='_blank'>
                    <img src={LinkedinLogo} alt="Instagram Icon" />
                </a>
            </div>
            <p>Contacto: jpenagos32@gmail.com</p>

        </div>
    )
}

export default About;