import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    return (

        <>
        {
            item.image
            ? 
            <div className="container p-5">
                <h3 >{item.name}</h3>
                <div className="row align-items-center">
                    <div className="col-6 p-3"><img src={item.image[0]} alt="imagen"></img> </div>
                    <p className="col-6 p-5">{item.description}</p>
                    <div className="col-6">Precio $ {item.cost}</div>                
                    <div className="col-6">Stock: {item.stock} </div>
                    <ItemCount/>
                </div>
            </div>
            :  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
        }
        </>
    )
}

export default ItemDetail;