import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null)

function getDefaultCart(){
    let cart = {}
    for(let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    return (
        <ShopContext.Provider>{props.children}</ShopContext.Provider>
    )
}