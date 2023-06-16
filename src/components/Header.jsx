import './Header.css'
import HeaderAnimation from './HeaderAnimation';

const Header = ({ children }) => {

    return ( 
        <>
        <header>
            <HeaderAnimation/>
        </header>
        { children }
        </>
    );
}
 
export default Header;