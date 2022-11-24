import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Homepage from "./Homepage";
import Products from "./Products";


const RouteSwitcher= () => {
    return ( 
      <BrowserRouter>
          <Routes>
            <Route path="/" element ={<Homepage />} />
            <Route path="/products" element ={<Products />} />
            <Route path="/about" element ={<About />} />
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default RouteSwitcher;