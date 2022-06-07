import ItemCount from "./ItemCount";
import { useState } from "react";
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {

        setItemCount(qty);
        // console.log(qty);
    }

    return (

        <>
        {
            item.image
            ? 
            <div className="container p-5 text-center">
                <h3 >{item.name}</h3>
                <div className="row align-items-center">
                    <div className="col-6 p-3"><img src={item.image[0]} alt="imagen"></img> </div>
                    <p className="col-6 p-5">{item.description}</p>
                    <div className="col-6">Precio $ {item.cost}</div>                
                    <div className="col-6">Stock: {item.stock} </div>
                    
                </div>
                <div className='p_3'>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock}  onAdd={onAdd} />
                        : <>
                                <h4>Agregó {itemCount} productos</h4>
                                <Link to='/cart'> <button className="btn btn-outline-primary p-3">Ver Compras</button></Link>
                                <Link to='/'> <button className="btn btn-outline-primary p-3">Volver</button></Link>
                        </>
                    }
                        
                        
                </div>
            </div>
            :  <div className="spinner-border p-5" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
        }
        </>
    )
}

export default ItemDetail;