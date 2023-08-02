import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

    return (
        <div className="cartItem">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>Item: <b>{productName}</b></p>
                <p>Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}>&minus;</button>
                    <input type="number" min={0} max={100} value={cartItems[id]} onChange={(e) => } />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
}

