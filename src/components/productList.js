import React, { Component } from 'react';
import Product from './Product'

function productList() {
    const item=[
        {name: "OnePlus 8",
        image:"./images/OnePlus-8.jpg",
        Price:"47,000/-",
        },
        {name: "OnePlus 7 pro",
        image:"./images/OnePlus-7-Pro.jpg",
        Price:"68,999/-",
        },
        {name: "OnePlus 7T Pro",
        image:"./images/OnePlus-7T-Pro.jpg",
        Price:"69,999/-",
        },
        {name: "OnePlus Z",
        image:'./images/OnePlus-Z.jpg',
        Price:"28,000/-",
        },
        {name: "OnePlus 8",
        image:"./images/OnePlus-8.jpg",
        Price:"47,000/-",
        },
        {name: "OnePlus Nord 5G",
        image:"./images/OnePlus-Nord.jpg",
        Price:"28,000/-",
        },
        {name: "OnePlus 7T",
        image:"./images/OnePlus-7T.jpg",
        Price:"54,999/-",
        },
        {name: "OnePlus Nord N10 5G",
        image:'./images/OnePlus-Nord-5G.jpg',
        Price:"34,990/-",
        },
        {
            name:"Samsung-Galaxy-A32-5G",
            image:"./images/Samsung-Galaxy-A32-5G.jpg",
            Price:"30,000/-",
        },
        {
            name:"Samsung-Galaxy-F41",
            image:"./images/Samsung-Galaxy-F41.jpg",
            Price:"22,000/-",
        },
        {
            name:"Samsung-Galaxy-A02-Blue",
            image:"./images/Samsung-Galaxy-A02-Blue.jpg",
            Price:"15,000/-",
        },
        {
            name:"Samsung-Galaxy-M31-Prime-1",
            image:"./images/Samsung-Galaxy-M31-Prime-1.jpg",
            Price:"22,000/-",
        },
        {
            name:"Samsung-Galaxy-M21s",
            image:"./images/Samsung-Galaxy-M21s.jpg",
            Price:"26,000/-",
        },
        {
            name:"Samsung-Galaxy-A02s-Black",
            image:"./images/Samsung-Galaxy-A02s-Black.jpg",
            Price:"15,000/-",
        }
    ]
    const show =item.map(show => (<Product key={show.img} show={show}/>))
    return (
        <>
            {show}
        </>
    )
}

export default productList;