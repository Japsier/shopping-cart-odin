import React from "react";

import {Link} from "react-router-dom"

const Header = () => {
    return ( 
        <header className="bg-sky-900 text-white">
            <Link to="/">
                <h1>AEKI</h1>
            </Link>

            <ul className="nav-links">
                <Link to="/">
                    <li>Homepage</li>
                </Link>
                <Link to="/products">
                    <li>Products</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>

            </ul>
        </header>
    );
  }
  
  export default Header;