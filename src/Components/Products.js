import Header from "./Header";
import {useEffect, useState } from "react"
import Item from "./Item";
import uniqid from "uniqid"
import bank from "../Assets/bank.avif"
import balloonLamp from "../Assets/balloonlamp.avif"
import bed from "../Assets/bed.avif"
import can from "../Assets/can.avif"
import chair from "../Assets/chair.avif"
import closet from "../Assets/closet.avif"
import cup from "../Assets/cup.avif"
import curtains from "../Assets/curtains.avif"
import desk from "../Assets/desk.avif"
import lamp from "../Assets/lamp.avif"
import PreviousMap from "postcss/lib/previous-map";

//import

const Products = (props) => {
    const createProduct = (prodName, prodImg, prodPrice) => {
        let name = prodName
        let img = prodImg
        let price = prodPrice
        let id = uniqid()

        return {name, price, img, id}
    }
    const [products, setProducts] = useState([
        createProduct("Bank", bank, "$140"),
        createProduct("Balloon Lamp", balloonLamp, "$23"),
        createProduct("Bed", bed, "$89"),
        createProduct("Can", can, "$13"),
        createProduct("Chair", chair, "$75"),
        createProduct("Closet", closet, "$120"),
        createProduct("Cup", cup, "$8"),
        createProduct("Curtains", curtains, "$69"),
        createProduct("Desk", desk, "$115"),
        createProduct("Lamp", lamp, "$45"),
        
    ])


    return ( 
        <div className="main h-full">
            <div className="productDisplay h-full">
                {products.map((element) => {
                    return <Item 
                            img={element.img} 
                            name={element.name} 
                            price={element.price} 
                            id={element.id}
                            onClickFunc={props.update}
                            />
                            
                })}
            </div>

            
        </div>
    );
  }
  
  export default Products;