import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
        <>
            <div className='h2 p-1'>{greeting}</div>
            <ItemCount/>
        </>
        
    );
}

export default ItemListContainer;