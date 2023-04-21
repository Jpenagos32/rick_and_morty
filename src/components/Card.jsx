import '../styles/App.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className='card'>
         <div className='cardButton'>
            <h2 className='cardHeader'> <Link to={`/detail/${props.id}`} className='cardHeaderLink'>{props.name}</Link> </h2>
            <button onClick={() => props.onClose(props.id)}>X</button>
         </div>
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
