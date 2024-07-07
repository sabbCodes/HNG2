import Footer from "./Footer";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import productsData from "../data";
import ArrowFwrd from "../assets/Arrow forward ios 1.png";
import Laptop from "../assets/headphone.png";
import Heart from "../assets/Heart 1.png";
import AddCart from "../assets/Add shopping cart.png";
import ArrowDown from "../assets/Chevron down large.png";
import Rating from "../assets/rating.png";
import Cart from "../assets/cartButton.png";
import BestSeller from "../assets/bestSeller.png";
import Slider from "../assets/Group 6.png";
import "../css files/productDetails.css";

function ProductDetails() {
    const { id } = useParams();
    const products = productsData;

    return (
        <main>
            <Nav />
            <section className="produtDetailsSection">
                <div className="produtDetailsSectionNav">
                    <p className="produtDetailsSectionNavShop">Shop</p>
                    <img src={ArrowFwrd} alt="arrow forward" />
                    <p className="produtDetailsSectionNavProduct">Headphone</p>
                </div>
                <article className="productDetailsMain">
                    <div className="productDetailImg">
                        <img src={Heart} alt="heart icon" id="productDetailHeartImg" />
                        <img src={Laptop} alt="product image" id="productDetailImgMain" />
                    </div>
                    <div className="productDetailText">
                        <h1>Headphone</h1>
                        <p className="productDetailTextCode">Code: 78205</p>
                        <p className="productDetailTextAmnt">$620.73</p>
                        <p className="productDetailTextColor">Color - Crispy Ash</p>
                        <div className="productDetailColorContainer">
                            <div className="productDetailColor1"></div>
                            <div className="productDetailColor2"></div>
                        </div>
                        <p className="productDetailQuantity">Quantity</p>
                        <div className="productDetailQuantityContainer">
                            <p className="productDetailQuantityInner">-</p>
                            <p className="productDetailQuantityInner">1</p>
                            <p className="productDetailQuantityInner">+</p>
                        </div>
                        <div className="productDetailCTA">
                            <button id="addToCartBtn">
                                <img src={AddCart} alt="add cart icon" />
                                Add to Cart
                            </button>
                            <button id="checkoutBtn">Checkout</button>
                        </div>
                        <div className="productDelivery">
                            <div className="productDeliveryInner">
                                <p>Delivery</p>
                                <img src={ArrowDown} alt="arrow down" />
                            </div>
                            <div className="productDeliveryInner">
                                <p>Payment</p>
                                <img src={ArrowDown} alt="arrow down" />
                            </div>
                            <div className="productDeliveryInner">
                                <p>Warranty</p>
                                <img src={ArrowDown} alt="arrow down" />
                            </div>
                            <div className="productDeliveryInner">
                                <p>Care</p>
                                <img src={ArrowDown} alt="arrow down" />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="relatedProductsSection">
                <h1>Related Products</h1>
                <div className="relatedProductsContainer">
                    <div className="individualRelatedProductContainer" key={id}>
                        <div className="productImageContainer">
                            <img className="productImage" src={Laptop} alt="product item" />
                            <img className="productImageTag" src={BestSeller} alt="best seller tag" />
                        </div>
                        <div className="productDetails">
                            <div className="productTitle">
                                <h3>Headphone</h3>
                                <p>product description</p>
                            </div>
                            <div className="productPriceNCart">
                                <div className="productPrice">
                                    <h2>$32</h2>
                                    <p>$43</p>
                                </div>
                                <img src={Cart} alt="cart button" />
                            </div>
                            <div className="productTag">
                                <img src={Rating} alt="product rating" />
                            </div>
                        </div>
                    </div>
                    <div className="individualRelatedProductContainer" key={id}>
                        <div className="productImageContainer">
                            <img className="productImage" src={Laptop} alt="product item" />
                            <img className="productImageTag" src={BestSeller} alt="best seller tag" />
                        </div>
                        <div className="productDetails">
                            <div className="productTitle">
                                <h3>Headphone</h3>
                                <p>product description</p>
                            </div>
                            <div className="productPriceNCart">
                                <div className="productPrice">
                                    <h2>$32</h2>
                                    <p>$43</p>
                                </div>
                                <img src={Cart} alt="cart button" />
                            </div>
                            <div className="productTag">
                                <img src={Rating} alt="product rating" />
                            </div>
                        </div>
                    </div>
                    <div className="individualRelatedProductContainer" key={id}>
                        <div className="productImageContainer">
                            <img className="productImage" src={Laptop} alt="product item" />
                            <img className="productImageTag" src={BestSeller} alt="best seller tag" />
                        </div>
                        <div className="productDetails">
                            <div className="productTitle">
                                <h3>Headphone</h3>
                                <p>product description</p>
                            </div>
                            <div className="productPriceNCart">
                                <div className="productPrice">
                                    <h2>$32</h2>
                                    <p>$43</p>
                                </div>
                                <img src={Cart} alt="cart button" />
                            </div>
                            <div className="productTag">
                                <img src={Rating} alt="product rating" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Slider} alt="slider" />
            </section>
            <Footer />
        </main>
    )
}

export default ProductDetails;