import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

function Cart() {
    const { cartItems } = useContext(ShopContext)

    return(
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <cartItems data={product}/>
                    }
                })}
            </div>
        </div>
    )
}

export default Cart;