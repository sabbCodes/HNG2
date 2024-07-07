import HeroImg from "../assets/heroo 1.png";
import "../css files/hero.css";

function Hero() {
    return (
        <main className="heroMain">
            <section className="topSection">
                <article>
                    <p className="articleTop">Best Assessories Ever</p>
                    <div className="articleMainText">
                        <h3>One-Stop Shop for Gadget</h3>
                        <h3>Accessories</h3>
                    </div>
                    <p className="articleBottom">At Gadget Haven, we offer a wide range of high-quality accessories to enhance your tech experience.</p>
                    <button id="buyNowBtn">Buy Now</button>
                </article>
                <div>
                    <img src={HeroImg} alt="Fine girl with her headphone" />
                </div>
            </section>
        </main>
    )
}

export default Hero;