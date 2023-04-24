import './styles/App.scss';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useEffect, useState } from 'react';
import Logo from './components/Logo';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail';
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';

function App() {

   const [access, setAccess] = useState(localStorage.getItem('acces') === 'true');

   const navigate = useNavigate();

   const EMAIL = 'jpenagos32@gmail.com';
   const PASSWORD = 'react123';

   const [characters, setCharacters] = useState([]);

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {

         localStorage.setItem('acces', 'true')
         setAccess(true);
         navigate('/home');
      } else if (!userData.email || !userData.password) {
         window.alert('Todos los campos son requeridos')
      } else if (userData.email !== EMAIL || userData.password !== PASSWORD) {
         window.alert('Email o password incorrectos')
      }
   }

   const logOut = () => {
      localStorage.removeItem('acces')
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {

      const characterExists = characters.find(character => character.id === Number(id));

      if (characterExists) {
         window.alert('Este personaje ya ha sido agregado');
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
         .catch((error) => {
            window.alert('¡No hay personajes con este ID!')
         })
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id))
      setCharacters(filteredCharacters);
   }

   const location = useLocation();

   return (
      <div className='App'>

         {
            location.pathname !== '/'  && <Nav onSearch={onSearch} logOut ={logOut} />
         }
         {
            location.pathname !== '/' && location.pathname !== '*' && <Logo />
         }
         
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<ErrorPage />} />
         </Routes>

      </div>
   );
}

export default App;
