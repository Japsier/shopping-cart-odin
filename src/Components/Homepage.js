import Header from "./Header";
import {Link} from "react-router-dom"
import homepage from "../Assets/homepage.jpg"

const Homepage = () => {
    return ( 
        <div className="main  ">
            <div className="homepage w-full  text-white  font-bold flex flex-col">
                <div className="flex h-80 bg-neutral-900 w-full">
                    <div className="w-2/4 flex">
                        <img src={homepage} alt="cozy home" className="max-w-md w-4/5 h-4/5  m-auto mr-0"/>
                    </div>
                    
                    <div className="60vw pl-10 mr-auto mb-auto mt-auto flex flex-col gap-4">
                        <h1 className="text-5xl max-w-lg">Being creative at home has never been so simple & fun!</h1>
                        <Link to="/products">
                            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold p-4 px-4 rounded">Shop now!</button>
                        </Link>
                    </div>

                </div>

                
            </div>
            <div className="flex flex-col mt-5 text-center gap-3">
                <h1 className="text-4xl font-semibold ">Our Services</h1>
                <p className="max-w-3xl mt-3">We over the best furniture and home-appliances you can wish for! Whether you're into DIY-projects or rather just want to use something right away, we have just the thing you need!</p>
                <div className="flex justify-evenly mt-10">
                    <div className="w-52 bg-neutral-100 p-4">
                        <h3 className="text-lg font-semibold mb-4">Local Shops</h3>
                        <p >We have lots of stores all over the world.
                            Rather buy something online? Order now and benefit of our 3-day delivery policy.
                        </p>
                    </div>        
                    <div className="w-52 bg-neutral-100 p-4">
                        <h3 className="text-lg font-semibold mb-4">Sustainable Materials</h3>
                        <p>All of our products are built with sustainability in mind. This guarentees that we our products are carbon neutral and will last a long time
                        </p>

                    </div>
                    <div className="w-52 bg-neutral-100 p-4">
                        <h3 className="text-lg font-semibold mb-4">Large Collection</h3>
                        <p>We have a very large collection of not only products but also services. From physical retial stores to online ordering, DIY to pre-built, we have exactly what you need!</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  export default Homepage;