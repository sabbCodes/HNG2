import HeroImg from "../assets/heroo 1.svg";
import "../css files/hero.css";

function Hero() {
    return (
        <main className="heroMain">
            <section className="topSection">
                <article className="topSectionAritcle">
                    <p className="articleTop">Best Assessories Ever</p>
                    <div className="articleMainText">
                        <h3>One-Stop</h3>
                        <h3>Shop for Gadget</h3>
                        <h3>Accessories</h3>
                    </div>
                    <p className="articleBottom">At Gadget Haven, we offer a wide range of high-quality accessories to enhance your tech experience.</p>
                    <button id="buyNowBtn">Buy Now</button>
                </article>
                <div className="heroImg">
                    <img src={HeroImg} alt="Fine girl with her headphone" />
                </div>
            </section>
        </main>
    )
}

export default Hero;