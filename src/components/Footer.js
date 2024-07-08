import "../css files/footer.css";
import ArrowDown from "../assets/Chevron down large.png";
import Mail from "../assets/Mail.png";
import Socils from "../assets/Frame 30.png";

function Footer() {
    return(
        <footer>
            <div className="footerInner">
                <div className="footerInnerLeft">
                    <div>
                        <h4>About</h4>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li className="boldFooter">
                                Shop
                            </li>
                            <li>
                                Blog
                            </li>
                        </ul>
                        <div className="footerLang">
                            <p>English</p>
                            <img src={ArrowDown} alt="arrow down" />
                        </div>
                    </div>
                    <div className="footerHelp">
                        <h4>Help</h4>
                        <ul>
                            <li>
                                Shipping & Returns
                            </li>
                            <li>
                                Track Order
                            </li>
                            <li>
                                FAQs
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li className="boldFooter">
                                Phone:
                            </li>
                            <li className="boldFooter">
                                (+234) 803 456 7893
                            </li>
                            <li className="boldFooter">
                                Email:
                            </li>
                            <li className="boldFooter">
                                info@timbu.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerSubscribe desktopHidden">
                    <h4 className="footerInnerRightHeader">Subscribe to our Newsletter</h4>
                    <p className="footerInnerRightText">Keep up-to-date</p>
                    <div className="footerInnerRightInput">
                        <img src={Mail} alt="mail icon" />
                        <input type="text" placeholder="Input your email" />
                        <button id="footerInnerRightInputButton">Subscribe</button>
                    </div>
                    <div>
                        <img src={Socils} alt="socials" />
                    </div>
                </div>
                <div className="footerInnerRight">
                    <div className="footerSubscribe mobileHidden">
                        <h4 className="footerInnerRightHeader">Subscribe to our Newsletter</h4>
                        <p className="footerInnerRightText">Keep up-to-date</p>
                        <div className="footerInnerRightInput">
                            <img src={Mail} alt="mail icon" />
                            <input type="text" placeholder="Input your email" />
                            <button id="footerInnerRightInputButton">Subscribe</button>
                        </div>
                        <div>
                            <img src={Socils} alt="socials" />
                        </div>
                    </div>
                    <div className="footerInnerRightBottom">
                        <p>© 2024 Timbu store</p>
                        <ul>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;