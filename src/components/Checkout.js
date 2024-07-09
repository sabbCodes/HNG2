import Footer from "./Footer";
import Nav from "./Nav";
import Cart from "../assets/Shopping cart 3.png";
import CheckoutBt from "../assets/chkoutBt.svg";
import CheckoutAirpod from "../assets/chckoutArpd.svg";
import CheckoutHeadphone from "../assets/chckoutHdpn.svg";
import Delete from "../assets/create.png";
import Delivery from "../assets/Delivery 1.png";
import Checked from "../assets/C check 1.png";
import Recipient from "../assets/Circle 09 2.png";
import Info from "../assets/C info 1.png";
import Money from "../assets/Money 13 1.png";
import Card from "../assets/Container 56.png";
import Receipt from "../assets/Receipt list 43 1.png";
import "../css files/checkout.css";

function Checkout() {
    return(
        <main>
            <Nav />
            <section className="checkoutSectionWrapper">
                <h1>Checkout</h1>
                <section className="chectoutSectionInner">
                    <article>
                        <div className="orderSummary">
                            <div className="lilNav">
                                <img src={Cart} alt="shopping cart" />
                                <p>Order Summary</p>
                            </div>
                            <div className="orderSummaryMain">
                                <div className="orderSummaryMainInner">
                                    <p className="orderSummaryMainInner1">Name</p>
                                    <p className="orderSummaryMainInner2">Price</p>
                                    <p className="orderSummaryMainInner3">Quantity</p>
                                    <p className="orderSummaryMainInner4">Total</p>
                                    <img src={Delete} alt="delete icon" id="invisibleDel" />
                                </div>
                                <div className="orderSummaryMainInner">
                                    <div className="orderSummaryMainInnerNmae">
                                        <div className="orderSummaryMainInnerNmaeImg">
                                            <img src={CheckoutBt} alt="product image" />
                                        </div>
                                        <p>Bluetooth</p>
                                    </div>
                                    <p className="orderSummaryMainPrice2">$49</p>
                                    <p className="orderSummaryMainPrice3">1</p>
                                    <p className="orderSummaryMainPrice4">$49</p>
                                    <img src={Delete} alt="delete icon" />
                                </div>
                                <div className="orderSummaryMainInner">
                                    <div className="orderSummaryMainInnerNmae">
                                        <div className="orderSummaryMainInnerNmaeImg">
                                            <img src={CheckoutHeadphone} alt="product image" />
                                        </div>
                                        <p>Headphone</p>
                                    </div>
                                    <p className="orderSummaryMainPrice2">$32</p>
                                    <p className="orderSummaryMainPrice3">2</p>
                                    <p className="orderSummaryMainPrice4">$64</p>
                                    <img src={Delete} alt="delete icon" />
                                </div>
                                <div className="orderSummaryMainInner">
                                    <div className="orderSummaryMainInnerNmae">
                                        <div className="orderSummaryMainInnerNmaeImg">
                                            <img src={CheckoutAirpod} alt="product image" />
                                        </div>
                                        <p>Airpod</p>
                                    </div>
                                    <p className="orderSummaryMainPrice2">$18</p>
                                    <p className="orderSummaryMainPrice3">4</p>
                                    <p className="orderSummaryMainPrice4">$72</p>
                                    <img src={Delete} alt="delete icon" />
                                </div>
                            </div>
                        </div>
                        <div className="deliveryDetails">
                            <div className="deliveryDetailsNav">
                                <img src={Delivery} alt="delivery icon" />
                                <p>Delivery options</p>
                            </div>
                            <div className="deliveryDetailsOperator">
                                <p>Operator</p>
                                <div className="deliveryDetailsOperatorRadio">
                                    <label>
                                        <input type="radio" />
                                        UPS
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        Amazon
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        DHL
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        FedEx
                                    </label>
                                </div>
                            </div>
                            <div className="deliveryDetailsDate">
                                <div className="deliveryDetailsDate1">
                                    <img src={Checked} alt="check icon" />
                                    <div>
                                        <p className="deliveryDetailsDate1Price">$22</p>
                                        <p>Instant delivery</p>
                                        <p>Est. arrival: Today</p>
                                    </div>
                                </div>
                                <div className="deliveryDetailsDate2">
                                    <img src={Checked} alt="check icon" />
                                    <div>
                                        <p>$22</p>
                                        <p>Standard delivery</p>
                                        <p>Est. arrival: DD/MMh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recipientInfo">
                            <div className="recipientInfoNav">
                                <img src={Recipient} alt="user icon" />
                                <p>Recipient information</p>
                            </div>
                            <div className="recipientInfoNameNNo">
                                <div className="recipientInfoNameNNoInner">
                                    <p>Full name</p>
                                    <div className="recipientInfoNameNNoInnerDiv">
                                        <p>Sabb Jason</p>
                                    </div>
                                </div>
                                <div className="recipientInfoNameNNoInner">
                                    <p>Phone number</p>
                                    <div className="recipientInfoNameNNoInnerDiv">
                                        <p>732-123-4567</p>
                                    </div>
                                </div>
                            </div>
                            <div className="recipientInfoAdd">
                                <p>Address</p>
                                <div className="recipientInfoAddInner">
                                    <p>4706 Pooz Street, Bayville, New Jersey(NJ)</p>
                                </div>
                            </div>
                            <div className="saveDefault">
                                <label>
                                    <input type="checkbox" />
                                    Save as default
                                </label>
                            </div>
                            <div className="deliveryNotice">
                                <img src={Info} alt="info icon" />
                                <div>
                                    <h5>Delivery note</h5>
                                    <p>Eiusmod et nisi non sunt dolor proident consequat irure ut exercitation consectetur fugiat</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <aside className="checkoutAside">
                        <div className="checkoutAsideNav">
                            <img src={Money} alt="money icon" />
                            <h3>Payment method</h3>
                        </div>
                        <div className="checkoutAsideCard">
                            <p>Change payment method</p>
                            <img src={Card} alt="card details" />
                        </div>
                        <div className="checkoutAsideVoucher">
                            <p>Voucher</p>
                            <div className="checkoutAsideVoucherInner">
                                <div className="checkoutAsideVoucherInnerInput">
                                    <p>$15 Off</p>
                                </div>
                                <div className="checkoutAsideVoucherInnerBtn">
                                    <p>Apply</p>
                                </div>
                            </div>
                            <div className="checkoutAsideVoucherOff">
                                <p>$15 Off</p>
                            </div>
                        </div>
                        <div className="checkoutAsideSummary">
                            <div className="checkoutAsideSummaryNav">
                                <img src={Recipient} alt="summary icon" />
                                <p>Summary</p>
                            </div>
                            <div className="checkoutAsideSummaryPrice">
                                <div className="checkoutAsideSummaryPriceInner">
                                    <p>Subtotal</p>
                                    <p className="boldPrice">$180</p>
                                </div>
                                <div className="checkoutAsideSummaryPriceInner">
                                    <p>Discount</p>
                                    <p className="boldPrice">-$15</p>
                                </div>
                                <div className="checkoutAsideSummaryPriceInner">
                                    <p>Delivery Fee</p>
                                    <p className="boldPrice">$22</p>
                                </div>
                            </div>
                        </div>
                        <div className="proceedBtn">
                            <p>Proceed to payment</p>
                        </div>
                    </aside>
                </section>
            </section>
            <Footer />
        </main>
    )
}

export default Checkout;