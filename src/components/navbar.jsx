import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const { totalItemsInCart } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to="/"><div className="nav-head">Shop</div></Link>

      <div className="links">

        <Link to="/cart">
          <div className="cart">

            <p>{totalItemsInCart}</p>
            <ShoppingCart size={31} />
          </div>

        </Link>


      </div>
    </div >
  );
};
