import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

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
                            <button type="button" className="btn btn-outline-primary p-3" onClick={() => onAdd(contador)}>agregar al carrito</button>

                        </div>
                    
        </>
    );
}

export default ItemCount;