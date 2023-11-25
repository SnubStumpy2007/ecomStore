import React from "react"
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"

function Navbar(){
    return(
        <div className="nambar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart"><ShoppingCart>Cart</ShoppingCart></Link>
            </div>
        </div>
    )
}

export default Navbar;