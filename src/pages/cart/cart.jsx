import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cartItem";
import "./cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);


  return (
    <div className="cart">
      <title>Cart</title>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id]) {
            return <CartItem data={product} key={product.id} />;
          }
          return null;
        })}
      </div>
      <div className="checkout">
        <button>
          <Link className="b-h" to="/">
            Continue Shopping
          </Link>
        </button>
        <button>Checkout</button>
      </div>
    </div>
  );
}
