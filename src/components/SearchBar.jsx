import '../styles/App.scss';

export default function SearchBar(props) {
   return (
      <div className='searchBarContainer'>
         <input className='inpt' type='search' placeholder='Agregar'/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
