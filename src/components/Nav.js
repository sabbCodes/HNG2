import Logo from "../assets/logo.svg";
import Search from "../assets/Search.png";
import Frame from "../assets/Frame.png";
import Cart from "../assets/Shopping cart.png";
import Burger from "../assets/Burger Icon.png";
import { Link } from "react-router-dom";
import "../css files/nav.css";

function Nav() {
    return (
        <section className="navWrapper">
            <nav>
                <Link to="/" className="timbuLogo">
                    <img src={Logo} alt="Our Logo" />
                </Link>
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li className="acitveTab">Shop</li>
                    <li>Contact</li>
                </ul>
                <img src={Burger} alt="burger icon" id="burgerIcon" />
                <div className="navRight">
                    <div className="navRightSearchBox">
                        <img src={Search} alt="search icon" />
                        <input
                            type="text"
                            placeholder="Search product..."
                        />
                    </div>
                    <div className="cartDiv">
                        <img src={Cart} alt="cart icon" />
                        <p>Cart(<span>0</span>)</p>
                    </div>
                    <img src={Frame} alt="user icon" />
                </div>
            </nav>
        </section>
    )
}

export default Nav;