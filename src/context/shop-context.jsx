import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    // Calculate the total number of items in the cart
    const totalItemsInCart = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, totalItemsInCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
