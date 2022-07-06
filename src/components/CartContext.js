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
                img: item.image,
                name: item.name,
                cost: item.cost,
                quantityItem: quantity
            }])
        : confirmar.quantityItem += quantity;
        

    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let borrarItem = cartList.filter ( item => item.id !==id);
        setCartList(borrarItem);
    }

    const totalQuantityItems = () => {
        let items = cartList.map(item => item.quantityItem);
        
        return <>
        {
            items=null?
            <div></div>
            :<>{items.reduce(((previousValue, currentValue) => previousValue += currentValue), null)}</>
        }
        </>
    }

    const totalPriceItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].cost * cartList[index].quantityItem;
    }

    const totalPrice = () => {
        let subtotal = cartList.map(item => totalPriceItem(item.id));
        return   subtotal.reduce((previousValue, currentValue) => previousValue + currentValue)     
        
    }

    
    const calcTotal = () => {
        return totalPrice();
    }

    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, totalQuantityItems, totalPriceItem, totalPrice, calcTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;