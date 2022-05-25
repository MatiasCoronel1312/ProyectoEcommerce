import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import promise from '../Utils/promise';
import ItemList from './ItemList';

const { products }  = require ('../Utils/products');


const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState ([]);

    useEffect (() => {
        promise(2000, products)
            .then(result => setProductos(result))
            .catch(err => console.log(err))
    }, []);
    return (
        <>
            <div className='h2 p-1'>{greeting}</div>
            <ItemList items={productos} />
            
        </>
        
    );
}

export default ItemListContainer;