import { useContext } from "react";
import { CartContext } from "./CartContext";
import {Link} from 'react-router-dom'


const Cart = () => {
    const cartwidget = useContext (CartContext);

    return (
    <>
        <h3 className='Subtitulo'>Detalle de Compra:</h3>
        <Link to='/'> <button className="btn btn-outline-dark p-3 m-2">Volver a Comprar</button></Link>
        {
            cartwidget.cartList.length > 0 ? <button className="btn btn-outline-dark p-3 m-2" onClick={cartwidget.clear}>Borrar todo</button>
            : <h4 className="m-5">No hay compras</h4>
        }
        <div className="row p-5">
            <div className="col-9 row p-3">
                {               
                    cartwidget.cartList.length > 0 ? cartwidget.cartList.map((item) => 
                    <div className="card container-fluid p-2 col-4 m-1" key={item.id}>
                        <img src={item.img} className="img-fluid w-50" alt="imagen" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <div>$ {item.cost}</div>
                            
                            <p className="card-text">{item.quantityItem} Articulos</p>
                            <div>Total: $ {cartwidget.totalPriceItem(item.id) } </div>
                            <button className="btn btn-outline-dark p-3 m-2" onClick={() =>cartwidget.removeItem(item.id)}>Borrar</button>
                        
                        
                        </div>
                    </div>
                    )
                    : <p></p>
                }
            </div>    
            {
                cartwidget.cartList.length > 0 ?
            <div className="card container-fluid p-2 col-3  h-75 sticky-top m-2" >
                
                <div className="card-body">
                    <h5 className="card-title">Total de articulos: {cartwidget.totalQuantityItems()}</h5>
                    <div>Importe total: $ {cartwidget.totalPrice()}</div>
                    
                    <button className="btn btn-outline-dark p-3 m-5">Terminar mi compra</button>
                    
                    
                </div>
        
            
            </div>
            :<div className="card container-fluid p-2 col-3 m-1">
                <div className="card-body">
                    <h5 className="card-title">Carrito vacio</h5>         
                </div>
            </div>

            }

        </div>
    </>
    );
}

export default Cart;
