import ShippingImg from "../assets/shipping.png";
import GuaranteeImg from "../assets/Guarantee.png";
import SecureImg from "../assets/payment.png";
import SupportImg from "../assets/support.png";
import "../css files/hero.css";

function SubHero() {
    return (
        <main className="subHeroMain">
            <section className="bottomSection">
                <div className="storeStrength">
                    <img src={ShippingImg} alt="Shipping icon" />
                    <div className="storeStrengthInner">
                        <h5>Free Shipping</h5>
                        <p>Order up to $500</p>
                    </div>
                </div>
                <div className="storeStrength">
                    <img src={GuaranteeImg} alt="Guarantee icon" />
                    <div className="storeStrengthInner">
                        <h5>100% Guarantee</h5>
                        <p>1 year Guarantee</p>
                    </div>
                </div>
                <div className="storeStrength">
                    <img src={SecureImg} alt="Secure icon" />
                    <div className="storeStrengthInner">
                        <h5>Secure Payment</h5>
                        <p>12 mnths Installment</p>
                    </div>
                </div>
                <div className="storeStrength">
                    <img src={SupportImg} alt="24/7 icon" />
                    <div className="storeStrengthInner">
                        <h5>24/7 Support</h5>
                        <p>Always available</p>
                    </div>
                </div>
            </section>
            <h1>All Products</h1>
        </main>
    )
}

export default SubHero;