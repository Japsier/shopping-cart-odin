import Header from "./Header"
import facebook from "../Assets/Downloads/facebook.png"
import instagram from "../Assets/Downloads/instagram.png"
import twitter from "../Assets/Downloads/twitter.png"

const About = () => {
    return ( 
        <div className="main">
            <Header />
            <div className="w-full h-full p-4 px-40 flex flex-col gap-10">
                <h1 className="text-3xl text-center font-semibold">About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas viverra lacinia nunc, nec feugiat tellus vestibulum sollicitudin. 
                    Donec ut tortor leo. Mauris id urna pharetra, tincidunt elit in, ullamcorper ex. 
                    Phasellus pulvinar lacus eu fringilla faucibus. Vivamus cursus tincidunt urna, ultrices luctus orci elementum nec.
                    Aenean facilisis mauris et nisl laoreet suscipit. Praesent eu orci laoreet, consectetur est non, pharetra mauris. 
                    Praesent viverra, odio eu efficitur dapibus, dolor velit viverra urna, ac tempor urna sem ut orci. Ut faucibus magna ac tortor molestie, id commodo nisi scelerisque. 
                    Proin ultricies volutpat augue eget mollis.
                </p>
                <p>
                Nunc pellentesque convallis lectus eu vulputate. 
                Fusce hendrerit sit amet eros non viverra. 
                Praesent ac risus est. Quisque ac porta dui. 
                Cras in dapibus ipsum, sit amet aliquam nibh.
                In ac enim accumsan, gravida leo quis, semper dui.
                Praesent fringilla posuere nunc vitae tempus. 
                Fusce a massa pharetra, tincidunt metus vel, lobortis ipsum. 
                Duis dapibus eget arcu et facilisis. 
                Duis in velit non massa finibus blandit ac eu tortor. 
                Mauris ullamcorper erat aliquam euismod porttitor. 
                Nulla mauris dui, tincidunt ut libero id, finibus vulputate purus. 
                Quisque sit amet pulvinar felis, a iaculis dui. 
                </p>
                <h1 className="text-3xl mb-12 text-center font-semibold">Our Socials</h1>
                <div className="flex justify-evenly">
                    <a href="https://www.facebook.com/">
                        <img src={facebook} alt="facebook logo" className="h-20"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="instagram logo" className="h-20"/>
                    </a>
                    <a href="https://www.twitter.com/">
                        <img src={twitter} alt="twitter logo" className="h-20"/>
                    </a>
                </div>

            </div>
        </div>
    );
  }
  
  export default About;