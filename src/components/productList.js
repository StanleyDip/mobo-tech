import React from 'react';
import FetchedItems from './FetchedItems';
import DataFile from './product.json'
function productList() {
   
    const show =DataFile.map(show => (<FetchedItems key={show.id} show={show}/>));
     
    
    return (
        
        <>
              {show}  
        </>
    )
}

export default productList;