import React,{useState} from 'react'
import Cart from '../Cart/Cart';
import {Link} from 'react-router-dom';
import './Navbar.css'
 function NavBar() {
	 const [openCart,setOpenCart]=useState(false);

	 const handleCartOpener=()=>{
		setOpenCart(!openCart);
	 }
    return (
		<React.Fragment>
        <div className="topbar">
	    <ul>
			<Link to="/">
			<li >Home </li>
			</Link>
			<li>About</li>
			<li>Categories
	            <ul>
				<Link to="/smartphones"><li>Smartphone</li></Link>
				<Link to="/Tablets-iPads"><li>Tablets/iPads</li></Link>
				<Link to="/SmartWatch"><li>SmartWatch</li></Link>
		        </ul>
	        
	    <ul>
			<li>Top Phones</li>
				
	    </ul>
	</li>
	
	<li>Brands
	            	<ul>
					<Link to="/Oneplus"><li>OnePlus</li></Link>
					<Link to="/Samsung"><li>Samsung</li></Link>
					<Link to="/Apple"><li>Apple</li></Link>
		        	</ul>
	        	</li>
	<li onClick={handleCartOpener}><i className="fas fa-cart-plus"></i></li>
	<Link to='./login'><li>Sign In <i className="fas fa-sign-in-alt"></i></li></Link>
	<li>Sign Out <i className="fas fa-sign-out-alt"></i></li>
	</ul>
	
        </div>
		{/* {openCart ? <Cart />:null} */}
		</React.Fragment>
    )
}
// function getOneplus(){
// 	const getElement = {this.items}.filter( findThem =>{
// 		return findThem.Brand=="Oneplus"
// 	})
// 	return(
// 		<div>

// 		</div>
// 	)
// }
export default NavBar;
