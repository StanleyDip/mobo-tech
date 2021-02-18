import React, { Component } from 'react';
import {card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const heading={
    width:'18rem',
    float:'left',
    margin:'20px',
    height:'400px',
    padding:'20px',
    overflow:'relative',
    zIndex: '-1'
}
const lekha={
    color:'#34dbeb'
}

function Product({show}) {
    return ( 
        <div className="card" style={heading}>
            <img  src={show.image} className='hoover'/>
            <div className="card-body">
                <h5 className="card-title" className='redShow'>{show.name}</h5>
                <p className="card-text" style={lekha}className='redShow'>{show.Price}</p>
                </div>
        </div>
    )
}
export default Product;