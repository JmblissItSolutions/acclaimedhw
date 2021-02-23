import React,{ useState } from "react";
import {NavLink } from "react-router-dom";
import logo from './logo.jpg';
import phone from './assets/images/green-phone.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
function Menu() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
    return (
        <>
         <div className="top-menu">
        <ul className="topBar ml-auto d-flex ml-auto">
         <li>
         <a href="tel:8884949460" className="icon-link">
          <img src={phone} alt="Phone Number"/><span>Toll-Free 888.494.9460 </span></a>
       </li>
       <li>
         <a className="login" data-toggle="modal" data-target="#portal_login">login</a>
       </li>
       </ul>
     </div>
       <Navbar collapseOnSelect expand="xl">
  <Navbar.Brand href="/"><img src={logo} alt="Acclaimed Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  className={isActive ? 'close-menu': null} 
      onClick={toggleClass} />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <NavLink exact className="nav-link" activeClassName="active"  to="/home-warranty">Home Warranty</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/order-now">ORDER NOW</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/brochers">Brochers</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/member-advantages">Member Advantages</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/home-warranty-faqs">FAQ</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/contractors">Contractors</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/about-us">About Us</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/make-a-claim">Make A Claim</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/contact-us">Contact Us</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    );
  };
export default Menu;