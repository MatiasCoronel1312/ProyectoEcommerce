import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Item = ({id, title, stock, price, pictureUrl }) => {
    return (
        <div className="card container-fluid p-2 col-3 m-1" >
                <img src={pictureUrl} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div>$ {price}</div>
                    <div>{stock} unid.</div>
                    <p className="card-text"><Link to= {`/item/${id}`}>Detalle del Articulo</Link></p>
                    
                    
                </div>
        </div>
    );
}

export default Item;