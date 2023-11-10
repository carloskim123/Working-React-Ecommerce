import React, { useContext, useEffect } from "react";
import { ShopContext } from '../../context/shop-context'
import { useNavigate } from "react-router-dom";

export const Success = () => {
    const { totalItemsInCart } = useContext(ShopContext)

    const redirect = useNavigate();


    useEffect(() => {
        if(totalItemsInCart == 0) {
            redirect("/")
        } 
    }, [totalItemsInCart])
  return (
    <div>
        <div>Order successfull.</div>
          <div>You just bought: {totalItemsInCart} </div>

    </div>
  )
};
