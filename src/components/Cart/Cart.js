import React from 'react'
import './Cart.css'
const Cart=(getItems)=> {
    console.log(getItems.name)
    const name=getItems.name;
    const price=getItems.price;
    return (
        <div className="cart-container">
            <li>Name of the product:{name}</li>
            <li>Price of the product:{price}</li>
            <li>Quantity:<i className="fas fa-arrow-left"></i>5<i className="fas fa-arrow-right"></i></li>
            <li>Total Amount:</li>
        </div>
    )
}

export default Cart
