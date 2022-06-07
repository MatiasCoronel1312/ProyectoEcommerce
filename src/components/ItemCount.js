import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock=0, initial = 1, onAdd }) => { 
    const [contador, setContador] = useState(0);

    useEffect(() => {
        setContador (initial);
    },[initial]);


    const incremento = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decremento = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }
    return (
        <>

            
                        <div className='d-flex justify-content-center p-2'>

                            <div className='p-3'>
                                <button type="button" className="btn btn-primary" onClick={incremento}>+</button>
                            </div>
                            <div className='p-4'>
                                <p>{contador}</p>
                            </div>
                            <div className='p-3'>
                                <button type="button" className="btn btn-primary" onClick={decremento}>-</button>
                            </div>
                            

                        </div>
                        <div className='d-flex justify-content-center p-2'>
                            <div className='p-3'>
                                <button type="button" className="btn btn-outline-primary p-3" onClick={() => onAdd(contador)}>agregar al carrito</button>
                            </div>
                            <Link className='p-3' to='/'> <button className="btn btn-outline-primary p-3">Volver</button></Link>
                        </div>
        </>
    );
}

export default ItemCount;