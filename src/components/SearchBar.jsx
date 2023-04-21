import '../styles/App.scss';
import {  useState } from 'react';

export default function SearchBar(props) {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleSearch = () => {
      props.onSearch(id);
      setId('');
   }

   const handleKey = (event) => {
      if (event.keyCode === 13){
         props.onSearch(id);
         setId('')
      }
   }

   return (
      <div className='searchBarContainer'>
         <input onChange={handleChange} onKeyDown={handleKey} className='inpt' type='search' placeholder='Agregar' value={id}/>
         <button onClick={handleSearch}>
            Agregar
         </button>
      </div>
   );
}
