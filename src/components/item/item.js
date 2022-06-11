import {Linnk} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Item =( { id, name, img, price } ) => {
    return(
        <li>
            <img src={img} alt={name}/>
            {name}

            <footer className='ItemFooter'>
            <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>

            
        </li>
    )        
}

export default Item