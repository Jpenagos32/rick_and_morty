import { Link } from 'react-router-dom';
import ErrorGIf from '../images/404notfoundgif.gif';

const ErrorPage = (props) => {
    return (
        <div className="errorPage">
            <div className="errorPageText">
                <h1 >ERROR 404 NOT FOUND</h1>
                <p>La página solicitada es inexistente</p>
                <Link to={'/home'}>
                    Vuelve a la página principal
                </Link>
            </div>

            <p className='errorPageFelicidades'>Felicidades, has asustado a rick &#58;&#40;</p>
            <img src={ErrorGIf} alt="404 ERROR GIF" />
        </div>
    )
}

export default ErrorPage;