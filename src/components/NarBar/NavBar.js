import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">

            <Link to='/'>
               <h3> Ecommerce</h3>

            </Link>
           
            <div className="categories">
        
            
                <NavLink to='/category/novela' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Novela</NavLink>
                <NavLink to='/category/romance' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Romance</NavLink>
                <NavLink to='/category/ciencia ficcion' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>ciencia ficcon</NavLink>
               
            
            </div>
            <CartWidget />
            
        </nav>
    )
}

export default NavBar