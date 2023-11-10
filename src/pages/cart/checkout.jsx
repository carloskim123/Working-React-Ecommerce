import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(ShopContext);

  
  return (
    <>
      <div>
        <Link to="/success" ><button style={{ position: "absolute", right: "0", margin: "2rem", width: "150px" }}>Buy</button></Link>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
