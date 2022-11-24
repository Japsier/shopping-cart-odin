import React from "react";

import {Link} from "react-router-dom"

const Header = () => {
    return ( 
        <header>
            <h1>AEKI</h1>
            <ul className="nav-links">
                <Link to="/">
                    <li>Homepage</li>
                </Link>
                <Link to="/products">
                    <li>Products</li>
                </Link>
                <Link to="/about">
                    <li>about</li>
                </Link>

            </ul>
        </header>
    );
  }
  
  export default Header;