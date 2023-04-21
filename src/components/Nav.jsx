import { Link } from 'react-router-dom';
import '../styles/App.scss';
import SearchBar from "./SearchBar";

const Nav = (props) => {

    const randomClick = () => {
        const randomNum = Math.floor(Math.random() * 826) + 1;
        props.onSearch(randomNum);
    }

    return (
        <div className="navBar">
            <div className='navLink'>
                <Link to='/about'>
                    <button>About</button>
                </Link>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>

            <button onClick={randomClick}>Generar Aleatorio</button>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nav;