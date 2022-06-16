import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../Utils/firestoreFetch';
import ItemDetail from './ItemDetail'



const ItemDetailContainer = ({greeting}) => {
    
    const [producto, setProducto] = useState ({});
    const { id } = useParams ();

    useEffect (() => {
        firestoreFetchOne(id)
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