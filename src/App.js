import './App.css';
import React,{useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ProductList from './components/productList' ;
import NavBar from './components/Navbar/NavBar';
import Item from './components/Item/Item';
import SmartPhones from './components/Smartphones';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

function App() {
  return(
    <Router>
       <NavBar/>
       <Switch>
        <Route path="/" exact>
       <ProductList/>   
       </Route>
       <Route path="/:productId/products" exact>
       <Item/>   
       </Route>
       <Route path="/smartphones" exact>
       <SmartPhones name="Smartphone" check="Category"/>   
       </Route>
       <Route path="/Oneplus" exact>
       <SmartPhones name="Oneplus" check="Brand"/>   
       </Route>
       <Route path="/Samsung" exact>
       <SmartPhones name="Samsung" check="Brand"/>   
       </Route>
       <Route path="/Apple" exact>
       <SmartPhones name="Apple" check="Brand"/>   
       </Route>
       <Route path="/SmartWatch" exact>
       <SmartPhones name="Watch" check="Category"/>   
       </Route>
       <Route path="/Tablets-iPads" exact>
       <SmartPhones name="Tablet" check="Category"/>   
       </Route>
       <Route path="/Cart" exact>
       <Cart/>
       </Route>
       <Route path="/login" exact>
       <Login/>
       </Route>
       </Switch>
    </Router>
  );
}

  
export default App;
