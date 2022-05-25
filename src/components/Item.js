import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount"


const Item = ({ title, stock, price, pictureUrl }) => {
    return (
        <div className="card container-fluid p-2 col-3 m-1" >
                <img src={pictureUrl} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div>$ {price}</div>
                    <div>{stock} unid.</div>
                    <p className="card-text">Detalle del Articulo</p>
                    <ItemCount/>
                    <div className='p_3'>
                        <button type="button" className="btn btn-outline-primary p-3" >agregar al carrito</button>
                    </div>
                </div>
        </div>
    );
}

export default Item;