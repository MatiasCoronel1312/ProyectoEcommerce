import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (

        <nav className="navbar fixed-top">
            <div className="navbar_menu">
                <div>
                    <h1><Link className='navbar_menu__titulo' to='/'>Tiendita Office</Link></h1>
                </div>
                <div>
                    <ul className="navbar_navegador">
                        <li><Link className='navbar_navegador__item' to='/category/funko'>Funkos Pop</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/remera'>Remeras</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/taza'>Tazas</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/cuadro'>Cuadros</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/miscelaneo'>Miscelaneos</Link> </li>
                    </ul>
                </div>
                <div className='cartWidget'>
                    <Link to='/cart'><CartWidget/></Link>
                </div>
            </div>
        </nav>

    );
}
export default Navbar;