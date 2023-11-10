import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./cartItem";

const Checkout = () => {
    const { cartItems } = useContext(ShopContext);

  return (
    <>
        <div>
              <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  {PRODUCTS.map((product) => {
                      if (cartItems[product.id]) {
                          return <CartItem data={product} key={product.id} />;
                      }

                  })}
              </div>
        </div>

    </>
  )
};

export default Checkout;
