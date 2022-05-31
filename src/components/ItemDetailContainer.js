import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import promise from '../Utils/promise';
import ItemDetail from './ItemDetail'


const { products }  = require ('../Utils/products');


const ItemDetailContainer = ({greeting}) => {
    
    const [producto, setProducto] = useState ({});

    useEffect (() => {
        promise(2000, products[5])
            .then(result => setProducto(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <div className='h2 p-1'>{greeting}</div>
            <ItemDetail item={producto} />
            
        </>
        
    );
}

export default ItemDetailContainer;