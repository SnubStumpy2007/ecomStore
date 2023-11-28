import React from "react";

function Product(props) {
const {id, productName, price, productImage} = props.data;

    return(
        <div className="product">
            {" "}
            <img src={productImage}/>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
    )
}

export default Product;