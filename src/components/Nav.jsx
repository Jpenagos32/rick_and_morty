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
                <Link className='navLinkText' to='/about'>
                    <button>About</button>
                </Link>
                <Link className='navLinkText' to='/home'>
                    <button>Home</button>
                </Link>
                <button className='navLogOut' onClick={props.logOut}>Log Out</button>
                <button className='navAleatorio' onClick={randomClick}>Aleatorio</button>
            </div>

            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nav;