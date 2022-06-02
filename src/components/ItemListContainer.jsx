
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import promise from '../Utils/promise';
import ItemList from './ItemList';

const { products }  = require ('../Utils/products');


const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState ({});
    const { id } = useParams ();

    useEffect (() => {
        promise(2000,  products.filter(item => { if(id === undefined) return item ; return item.category === parseInt(id)}))
            .then(result => setProductos(result))
            .catch(err => console.log(err))
    }, [id]);
    
    return (
        <>
            <div className='Subtitulo'>{greeting}</div>
            <ItemList items={productos} />
            
        </>
        
    );
}

export default ItemListContainer;