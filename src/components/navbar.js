import "./navbar.css"
import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <ul className="list">
            <li>
                <Link to={'/skills'}>Skills</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
    );
}

export default Navbar;