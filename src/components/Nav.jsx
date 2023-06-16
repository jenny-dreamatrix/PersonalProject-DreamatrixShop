import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <Link to='/' >Home</Link>
            <Link to='/shop' >Shop</Link>
            <Link to='/about' >About</Link>
            <Link to='/symbols' >Symbols</Link>
            <Link to='/contact' >Contact</Link>
        </nav>
     );
}
 
export default Nav;