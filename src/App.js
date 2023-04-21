import './styles/App.scss';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import { useState } from 'react';
import Logo from './components/Logo';
import Nav from './components/Nav';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import Detail from './components/Detail';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {

      const characterExists = characters.find(character => character.id === Number(id));

      if(characterExists){
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
   
   return (
      <div className='App'>
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Nav onSearch={onSearch}/>
         <Logo />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail id=''/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
