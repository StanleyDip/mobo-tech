import React,{useState} from 'react';
import {card} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart/Cart';
import Item from './Item/Item';
import './FetchedItems.css'


function FetchedItems({show}) {
    const photo = require(`../images/${show.image}`).default;
    
    return ( 
        <Link to={`/${show.id}/products`}>
        <div className="card heading" >
            <img  src={photo} />
            <div className="card-body">
                <h5 className="card-title card-title-color" >{show.name}</h5>
                <p className="card-text card-text-color" >{show.Price}</p>
                <p  id="addtocart">Add to Cart</p>
                </div>
        </div>
        </Link>
    )
}
export default FetchedItems;
