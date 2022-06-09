import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [ cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {
        let confirmar = cartList.find(producto => producto.id === item.id);
        confirmar === undefined ?
        setCartList([
            ...cartList,
            {
                key: item.id,
                id: item.id,
                img: item.image[0],
                name: item.name,
                cost: item.cost,
                quantityItem: quantity
            }])
        : confirmar.quantityItem += quantity

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let borrarItem = cartList.filter ( item => item.id !==id);
        setCartList(borrarItem);
    }
    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;