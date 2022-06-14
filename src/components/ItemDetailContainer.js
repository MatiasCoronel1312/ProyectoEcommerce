import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import promise from '../Utils/promise';
import ItemDetail from './ItemDetail'

const { products }  = require ('../Utils/products');

const ItemDetailContainer = ({greeting}) => {
    
    const [producto, setProducto] = useState ({});
    const { id } = useParams ();

    useEffect (() => {
        promise(1000, products.find ( item => item.id === parseInt (id)))
            .then(result => setProducto(result))
            .catch(err => console.log(err))
    }, [id]);

    return (
        <>
            <div className='Subtitulo'>{greeting}</div>
            <ItemDetail item={producto} />
            
        </>
        
    );
}

export default ItemDetailContainer;