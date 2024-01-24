import React from 'react'
import logo from "../images/Logo .svg";
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styleActive = {
  padding:"6px 0",
  borderWidth:"1px",
  borderStyle:"solid",
  borderColor:"#495E57",
  borderRadius: "8px"
}

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" id='navbar'>
      <img src={logo} alt="" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{width:'60px'}}/>
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
          <ul className='nav-links'>
            <NavLink to="/" style={({ isActive }) => isActive ? styleActive : null}>
              <li>
                HOME
              </li>
            </NavLink>
            <a href="">
              <li>
                ABOUT
              </li>
            </a>
            <a href="">
              <li>
                MENU
              </li>
            </a>
            <NavLink to="booking" style={({ isActive }) => isActive ? styleActive : null}>
              <li>
                RESERVATIONS
              </li>
            </NavLink>
            <a href="">
              <li>
                LOGIN
              </li>
            </a>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar