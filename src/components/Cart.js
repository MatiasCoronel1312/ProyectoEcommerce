import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom'


const Cart = () => {
    const cartwidget = useContext (CartContext);

    return (
    <>
        <h3>Detalle de Compra:</h3>
        <Link to='/'> <button className="btn btn-outline-dark p-3 m-2">Volver a Comprar</button></Link>
        {
            cartwidget.cartList.length > 0 ? <button className="btn btn-outline-dark p-3 m-2" onClick={cartwidget.clear}>Borrar todo</button>
            : <h4>No hay compras</h4>
        }
        
        {               
            cartwidget.cartList.length > 0 ? cartwidget.cartList.map((item) => 
            <div className="card container-fluid p-2 col-3 m-1" key={item.id}>
                <img src={item.img} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div>$ {item.cost}</div>
                    
                    <p className="card-text">{item.quantityItem} Articulos</p>
                    <div>Total: $ {item.cost*item.quantityItem} </div>
                    <button className="btn btn-outline-dark p-3 m-2" onClick={() =>cartwidget.removeItem(item.id)}>Borrar</button>
                
                
            </div>
    </div>
            )
            : <p></p>
        }
        
    </>
    );
}

export default Cart;
