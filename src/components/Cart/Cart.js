import React from 'react'
import './Cart.css'
import ProductData from '../product.json';
const Cart=()=> {
    // const selectedId=props.id
    // const setCallCart=props.setCallCart
    // const fetchedId=ProductData.filter(product=> product.id===selectedId)
    // setCallCart(false)
    
    return (
        <div className="cart-container">
            <li>Name of the product:</li>
            <li>Price of the product:</li>
            <li>Quantity:<i className="fas fa-arrow-left"></i>5<i className="fas fa-arrow-right"></i></li>
            <li>Total Amount:</li>
        </div>
    )
}

export default Cart;
