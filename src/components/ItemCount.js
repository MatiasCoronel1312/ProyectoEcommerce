import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ItemCount = ({ stock = 5, initial = 1 }) => { //el stock esta hardcoreado a 5, por ahora
    const [contador, setContador] = useState(1);


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
                    
        </>
    );
}

export default ItemCount;