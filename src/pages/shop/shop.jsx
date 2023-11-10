import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

import "./shop.css";
export default function Shop() {
  return (
    <div className="shop">
      

      <div className="products">
        {PRODUCTS.map((product, index) => (
          <div key={index}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
