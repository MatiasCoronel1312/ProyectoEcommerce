import './../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand h1" href="./">Tiendita Online</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">MENU
<span className="navbar-toggler-icon"></span>
</button>
        <div id="navbarText" className=" collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link " aria-current="page" href="./">Inicio</a> </li>
                <li className="nav-item"><a className="nav-link " href="./">Productos</a> </li>
                <li className="nav-item"><a className="nav-link " href="./">Ofertas</a> </li>
                <li className="nav-item"><a className="nav-link " href="./">Categorias</a> </li>
                <li className="nav-item"><a className="nav-link " href="./">Nosotros</a> </li>
            </ul>
        </div>
        </div>
    </nav>
    
    );
}
export default Navbar;