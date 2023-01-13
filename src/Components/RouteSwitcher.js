import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Homepage from "./Homepage";
import Products from "./Products";
import Header from "../Components/Header"
import {useState} from "react"

const RouteSwitcher= () => {
    const [counter, setCounter] = useState(0)

    const updateCounter = () => {
      setCounter(counter + 1)
      console.log(counter)
    }

    return ( 
      <HashRouter>
          <Header counter={counter}/>
          <Routes>
            <Route path="/" element ={<Homepage />} />
            <Route path="/products" element ={<Products update={updateCounter}/>} />
            <Route path="/about" element ={<About />} />
          </Routes>
      </HashRouter>
    );
  }
  
  export default RouteSwitcher;