import React,{useState} from 'react';
import {card} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './Cart/Cart';
import Item from './Item/Item';

const heading={
    width:'18rem',
    float:'left',
    margin:'20px',
    height:'400px',
    padding:'20px',
    overflow:'absolute',
    zIndex: '-1'
}
const lekha={
    color:'#34dbeb'
}

function FetchedItems({show}) {
    const photo = require(`../images/${show.image}`).default;
    
    return ( 
        <Link to={`/${show.id}/products`}>
        <div className="card" style={heading} >
            <img  src={photo} />
            <div className="card-body">
                <h5 className="card-title" className='redShow'>{show.name}</h5>
                <p className="card-text" style={lekha}className='redShow'>{show.Price}</p>
                <p  id="addtocart">Add to Cart</p>
                </div>
        </div>
        </Link>
    )
}
export default FetchedItems;
