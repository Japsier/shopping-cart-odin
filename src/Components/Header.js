import React from "react";
import {useState, useEffect} from "react"

import {Link} from "react-router-dom"

const Header = (props) => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if(props.counter !== undefined) {
            setCounter(props.counter)
        }
        
    })


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
                <li>
                    <div className="cartIconDiv">
                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                        </svg>
                        {counter > 0 
                        ?<div className="cartCounter">
                            <p>{counter}</p>
                         </div>
                        :<div></div>
                        }

                    </div>
                </li>

            </ul>
        </header>
    );
  }
  
  export default Header;