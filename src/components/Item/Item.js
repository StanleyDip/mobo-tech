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
            <div className="image-container">
                <h5 className='header'>{loadedProducts[0].name}</h5>
                <img className="image-item" src={photo} alt={loadedProducts.name}/>

              <div className="right-side">
                    <p className="icon-">Brand: {loadedProducts[0].Brand}</p>
                    <p className="icon-">Price: {loadedProducts[0].Price}</p>
                    <p className="icon-">Category: {loadedProducts[0].Category}</p>
              </div>

            </div>
                <div className="wrapped-green-paragraphs">
                     <div className="info-with-icons"><i className="far fa-calendar-check fa-lg fixxed"></i><p className="icon-paragraph">Launch: {loadedProducts[0].Launch}</p></div>
                     <div className="info-with-icons"><i className="fab fa-android fa-lg fixxed"></i> <p className="icon-paragraph">Operating System: {loadedProducts[0].OS}</p></div>
                     <div className="info-with-icons"><i className="fas fa-mobile fa-lg fixxed"></i><p className="icon-paragraph">Display: {loadedProducts[0].Display}</p></div>
                     <div className="info-with-icons"><i className="fas fa-camera fa-lg fixxed"></i><p className="icon-paragraph">Camera: {loadedProducts[0].Camera}</p></div>
                     <div className="info-with-icons"><i className="fas fa-memory fa-lg fixxed"></i><p className="icon-paragraph">RAM & Chipset: {loadedProducts[0].RAM}</p></div>
                     <div className="info-with-icons"><i className="fas fa-battery-full fa-lg fixxed"></i><p className="icon-paragraph">Battery: {loadedProducts[0].Battery}</p></div>
               </div>
            
        </div>
    )
}

export default Item

{/* <Link path="/:productName/products">
            
            </Link> */}