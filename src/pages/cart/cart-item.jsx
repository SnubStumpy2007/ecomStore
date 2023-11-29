import React from "react";

function CartItem(props){
    const {id, productName, price, productImage = props.data}

    return (
        <div className="cartItem">
        <img src={productImage}/>
        <div className="description">

        </div>
    </div>
    )

}

export default CartItem