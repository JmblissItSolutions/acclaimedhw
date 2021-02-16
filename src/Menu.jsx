import React,{ useState } from "react";
import {NavLink } from "react-router-dom";
import logo from './logo.svg';
import phone from './assets/images/green-phone.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
       <Navbar collapseOnSelect expand="lg">
  <Navbar.Brand href="/"><img src={logo} alt="Acclaimed Logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  className={isActive ? 'close-menu': null} 
      onClick={toggleClass} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavLink exact className="nav-link" activeClassName="active" to="/">Home Warranty</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/ordernow">ORDER NOW</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/brochers">Brochers</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/memberadvantages">Member Advantages</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/faq">FAQ</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/contractors">Contractors</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/aboutus">About Us</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/makeclaim">Make A Claim</NavLink>
    <NavLink exact className="nav-link" activeClassName="active"  to="/contact">Contact Us</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    );
  };
export default Menu;