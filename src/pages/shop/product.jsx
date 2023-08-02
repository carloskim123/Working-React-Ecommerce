import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context'

export default function Product(props) {
    const { id, productName, price, productImage, productKey } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    return (
        <div className="product" key={id}>
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
            <button
                className="addToCartBttn"
                onClick={() => addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>

        </div>
    )
}