import { useState } from 'react';
// import RickAndMortyIcon from '../images/rick-and-morty-icon.jpg';
import validate from '../validation';

const Form = (props) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {

        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value })

        validate({ ...userData, [property]: value }, setErrors, errors);
    }

    const [hasChange, setHasChange] = useState(false);

    const changing = (event) => {
        setHasChange(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const property = event.target.name;
        const value = event.target.value;
        props.login(userData)
    }

    return (
        <div className="frm">
            <div className='frmForm'>
                <form >
                    <div className="formEmailDiv">
                        <label htmlFor="email">Correo Electrónico:</label>
                        {
                            errors.email ? (
                                <p className={hasChange? 'frmError':'frmError'}>{`* ${errors.email}`}</p>
                            ) : null
                        }
                        <input
                            className={
                                !errors.email ?
                                    'formInput'
                                    :'formInputError'

                            }
                            type="email"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={(event) => {handleChange(event); changing(event)} }
                        />

                    </div>
                    <div className="formPasswordDiv">
                        <label htmlFor="password">Contraseña:</label>
                        {
                            errors.password ? (
                                <p className={hasChange? 'frmError':'frmError'}>{`*${errors.password}`}</p>
                            ) : null
                        }
                        {/* cambiar a tipo password */}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={
                                !errors.password ?
                                    'formInput'
                                    :'formInputError'
                            }
                            value={userData.password}
                            onChange={(event) => {handleChange(event); changing(event)}}
                        />
                    </div>
                    <button
                        className="formbtn"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Form;