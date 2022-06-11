

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">

            <Link to='/'>
               <h3> Ecommerce</h3>

            </Link>
           
            <div className="categories">
        
                {/*<Link to='/category/novelas' className="Option">Novela</Link>
                <Link to='/category/romance' className="Option">Romance</Link>
                <Link  to='/category/ciencia ficcion' className="Option">Ciencia ficcion</Link>*/}
                <NavLink to='/category/novela' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Novela</NavLink>
                <NavLink to='/category/romance' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Romance</NavLink>
                <NavLink to='/category/ciencia ficcion' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>ciencia ficcon</NavLink>
               
            
            </div>
            
        </nav>
    )
}

export default NavBar