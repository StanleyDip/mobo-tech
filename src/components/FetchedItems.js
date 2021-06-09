import React,{useState} from 'react';
import {card} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart/Cart';
import Item from './Item/Item';
import './FetchedItems.css'


function FetchedItems({show}) {
    const photo = require(`../images/${show.image}`).default;
    const [callCart,setCallCart]=useState(false);
    const [cartId,setCartId]=useState([]);
    const addToCart=(props)=>{
        setCallCart(true);  
        setCartId(props)  
    }
    
    return ( 
        <React.Fragment>
        
        <div className="card heading" >
        <Link to={`/${show.id}/products`}>  <img className="item-image" src={photo} /> </Link> 
            
            <div className="card-body">
                <h5 className="card-title card-title-color" >{show.name}</h5>
                <p className="card-text card-text-color" >{show.Price}</p>
               <Link to="/Cart"><p  id="addtocart" on >Add to Cart</p></Link> 
                </div>
               
        </div>
        </React.Fragment>
    )
    
}

export default FetchedItems;
 