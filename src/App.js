import React from "react";
import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}
