import './Nav.css'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/shop' >Shop</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/symbols' >Symbols</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
        </nav>
     );
}
 
export default Nav;