import '../styles/App.scss';

export default function Card(props) {
   return (
      <div className='card'>
         <button onClick={props.onClose}>X</button>
         <h2 className='cardHeader'>{props.name}</h2>
         <img src={props.image} alt='' />

         <div className='textBg'>
            <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin.name}</h2>
         </div>
      </div>
   );
}
