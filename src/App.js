import './App.css';
import React,{useState } from 'react';

import ProductList from './components/productList' ;
import NavBar from './components/NavBar';
import SideComponent from './components/SideComponents';
function App() {
  return(
    <div>
       <NavBar/>
       <SideComponent/>  
      <ProductList/> 
    </div>
  );
}
  
  
export default App;
