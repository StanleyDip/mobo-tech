import React from 'react'
import FetchedItems from './FetchedItems';
import ProductData from './product.json' 

function Smartphones(props) {
    let loadedProducts="";
   if(props.check==="Brand"){
     loadedProducts=ProductData.filter(product => product.Brand===props.name)
   }
   else if(props.check==="Category"){
     loadedProducts=ProductData.filter(product => product.Category===props.name)
   }
  
    
    const show =loadedProducts.map(show => (<FetchedItems key={show.id} show={show}/>));
    return (
        <>
        {show}
        </>
    )
}

export default Smartphones
