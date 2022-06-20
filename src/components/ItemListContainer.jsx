
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {firestoreFetch} from '../Utils/firestoreFetch';
import ItemList from './ItemList';




const ItemListContainer = ({greeting}) => {
    
    const [productos, setProductos] = useState ([]);
    const { category } = useParams ();

    useEffect (() => {
        firestoreFetch(category)
        
        .then(res => setProductos(res))
        .catch(err => console.log(err));
        
        
    }, [category]);
    

    useEffect(() => {
        return (() => {
            setProductos([]);
            
        })
    }, []);
    
    return (
        <>
            <div className='Subtitulo'>{greeting}</div>
            <ItemList items={productos} />
            
        </>
        
    );
}

export default ItemListContainer;