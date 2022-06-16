import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item'

const ItemList = ({items}) => {
    return (
        <div className='d-flex flex-wrap justify-content-between p-3'>
            {
                items.length > 0
                ? items.map(item => <Item id ={item.id} key={item.id} title={item.name} price={item.cost} pictureUrl={item.image} stock={item.stock}  />) 
                :  <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
            }
        </div>
    );
}

export default ItemList;