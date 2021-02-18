import './App.css';
import React,{useState } from 'react';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as BoltIcon} from './icons/bolt.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as ChevronIcon} from './icons/chevron.svg';
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import ProductList from './components/productList' ;
import NavBar from './components/NavBar';
function App() {
  return(
    <div>
      
      <NavBar/>
    <Navbar>
      
    <NavItem icon={<PlusIcon/>}></NavItem>
    <NavItem icon={<MessengerIcon/>}></NavItem>
    <NavItem icon={<BellIcon/>}></NavItem>

    <NavItem icon={<CaretIcon/>}>
      <DropdownMenu/>
    </NavItem>
    </Navbar>
    <ProductList/> 
    </div>
  );
}
  function Navbar(props) {
    return(
      <nav className="navbars">
        <ul className="navbars-nav">{props.children}</ul>
      </nav>
    );
  }
  function NavItem(props) {
    const [open, setOpen]=useState(false);
    return(
      <li className="navs-item">
        <a href="#" className="icons-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
        {open && props.children}
      </li>
    );
  }
    function DropdownMenu() {
      function DropdownItem(props) {
        return(
          <a href="#" className="menus-item">
            <span className="icons-button">{props.leftIcon}</span>
            {props.children}
            <span className="icons-right">{props.rightIcon}</span>
          </a>
        );
      }
      return(
        <div className="dropdowns">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}>Settings
          </DropdownItem>
          
        </div>
      );
    }
  
export default App;
