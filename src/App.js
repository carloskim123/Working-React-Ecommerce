import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ShopContextProvider from "./context/shop-context";
import Checkout from "./pages/cart/checkout";
import { Success } from "./pages/shop/success";

export default function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}
