import React from 'react'
import small_logo from "../images/footerLogo.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <section>
        <div>
          <h3>Pages</h3>
        <ul>
          <NavLink to="/">
            <li>
              Home
            </li>
          </NavLink><br/>
          <li><a href="/">About</a></li><br/>
          <li><a href="/">Menu</a></li><br/>
          <NavLink to="/booking">
            <li>
            Reservations
            </li>
          </NavLink><br/>
          <li><a href="/">Order Online</a></li><br/>
          <li><a href="/">Login</a></li>
        </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br/> 123 Town Street, Chicago</li><br/>
            <li>Phone: <br/> +00 123 456 789</li><br/>
            <li>Email: <br/> little@lemon.com</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="/">Facebook</a></li><br/>
            <li><a href="/">Instagram</a></li><br/>
            <li><a href="/">Twitter</a></li>
          </ul>
          <div className="company-info">
            <img src={small_logo} alt=""/>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <p>&copy; 2024 Little Lemon Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}





        


export default Footer;