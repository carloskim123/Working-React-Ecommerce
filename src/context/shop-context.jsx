import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => { 
    let cart = {};
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}



export default ShopContextProvider;