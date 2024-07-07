import Logo from "../assets/logo.png";
import Search from "../assets/Search.png";
import Frame from "../assets/Frame.png";
import Cart from "../assets/Shopping cart.png";
import "../css files/nav.css";

function Nav() {
    return (
        <section className="navWrapper">
            <nav>
                <img src={Logo} alt="Our Logo" />
                <ul>
                    <li>Home</li>
                    <li>Blog</li>
                    <li className="acitveTab">Shop</li>
                    <li>Contact</li>
                </ul>
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