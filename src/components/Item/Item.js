import React from 'react'
import {Link,useParams} from 'react-router-dom'
import ProductData from '../product.json'

import './Item.css'
function Item() {
    const productName=useParams().productId;
  
    const loadedProducts=ProductData.filter(product => product.id===productName)
    const photo = require(`../../images/${loadedProducts[0].image}`).default
    return (
        
        <div className="item-heading">
            <div className="header-container">
            <h5  className='header'>{loadedProducts[0].name}</h5>
            </div>
            <img className="image-item" src={photo} alt={loadedProducts.name}/>
            <div className="right-side">
               <p className="icon-">Brand: {loadedProducts[0].Brand}</p>
                <p className="icon-">Price: {loadedProducts[0].Price}</p>
                <p className="icon-">Category: {loadedProducts[0].Category}</p>
                </div>
                <p className="icon-paragraph"><i className="far fa-calendar-check fa-lg fixxed"></i>Launch: {loadedProducts[0].Launch}</p>
                <p className="icon-paragraph"><i className="fab fa-android fa-lg fixxed"></i>Operating System: {loadedProducts[0].OS}</p>
                <p className="icon-paragraph"><i className="fas fa-mobile fa-lg fixxed"></i>Display: {loadedProducts[0].Display}</p>
                <p className="icon-paragraph"><i className="fas fa-camera fa-lg fixxed"></i>Camera: {loadedProducts[0].Camera}</p>
                <p className="icon-paragraph"><i className="fas fa-memory fa-lg fixxed"></i>RAM & Chipset: {loadedProducts[0].RAM}</p>
                <p className="icon-paragraph"><i className="fas fa-battery-full fa-lg fixxed"></i>Battery: {loadedProducts[0].Battery}</p>
                
            
                </div>
    )
}

export default Item

{/* <Link path="/:productName/products">
            
            </Link> */}