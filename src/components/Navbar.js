import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar_menu">
                <div>
                    <h1><Link className='navbar_menu__titulo' to='/'>Tiendita Office</Link></h1>
                </div>
                <div>
                    <ul className="navbar_navegador">
                        <li><Link className='navbar_navegador__item' to='/category/1'>Funkos Pop</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/2'>Remeras</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/4'>Tazas</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/5'>Cuadros</Link> </li>
                        <li><Link className='navbar_navegador__item' to='/category/6'>Miscelaneos</Link> </li>
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