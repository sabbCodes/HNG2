import ArrowUp from "../assets/arrowUp.png";
import Slider from "../assets/slider.png";
import Rating from "../assets/rating.png";
import Search from "../assets/Search.png";
import ArrowDown from "../assets/Chevron up large 1.png";
import Funnel from "../assets/Funnel simple.png";
import Cart from "../assets/cartButton.png";
import BestSeller from "../assets/bestSeller.png";
import PageDetail from "../assets/Frame 29.png";
import "../css files/products.css";
import productsData from "../data";
import { Link } from "react-router-dom";

function Products() {
    const products = productsData;

    function doNothing() {
        return;
    }

    return (
        <main className="productsMain">
            <section className="productsAside">
                <div className="productsAsideInner1">
                    <h3>Filters</h3>
                </div>
                <div className="productsAsideInner">
                    <div className="productAsideInnerTop">
                        <h5>Condition 1</h5>
                        <img src={ArrowUp} alt="arrow up" />
                    </div>
                    <div className="productAsideInnerBottom">
                        <div className="productAsideInnerBottomInput">
                            <label>
                                <input type="checkbox" />
                                Option 1
                            </label>
                            <label>
                                <input type="checkbox" />
                                Option 2
                            </label>
                        </div>
                        <div className="productAsideInnerBottomInput">
                            <label>
                                <input type="checkbox" />
                                Option 3
                            </label>
                            <label>
                                <input type="checkbox" />
                                Option 4
                            </label>
                        </div>
                    </div>
                </div>
                <div className="productsAsideInner">
                    <div className="productAsideInnerTop">
                        <h5>Condition 2</h5>
                        <img src={ArrowUp} alt="arrow up" />
                    </div>
                    <div className="productAsideInnerBottom">
                        <div className="productAsideInnerBottomInput">
                            <label>
                                <input type="checkbox" />
                                Option 1
                            </label>
                            <label>
                                <input type="checkbox" />
                                Option 2
                            </label>
                        </div>
                        <div className="productAsideInnerBottomInput">
                            <label>
                                <input type="checkbox" />
                                Option 3
                            </label>
                            <label>
                                <input type="checkbox" />
                                Option 4
                            </label>
                        </div>
                    </div>
                </div>
                <div className="productsAsideInner">
                    <div className="productAsideInnerTop">
                        <h5>Price range</h5>
                        <img src={ArrowUp} alt="arrow up" />
                    </div>
                    <div className="productAsideInnerBottomRange">
                        <div className="productAsideInnerBottomPrice">
                            <input type="text" value="$10" onChange={doNothing} />
                            <input type="text" value="$200" onChange={doNothing} />
                        </div>
                        <img src={Slider} alt="Slider" />
                    </div>
                </div>
                <div className="productsAsideInner">
                    <div className="productAsideInnerTop">
                        <h5>Rating</h5>
                        <img src={ArrowUp} alt="arrow up" />
                    </div>
                    <div className="productAsideInnerBottomRating">
                        <img src={Rating} alt="Rating" />
                    </div>
                </div>
                <div className="productsAsideButtons">
                    <button id="resetBtn">Reset</button>
                    <button id="applyBtn">Apply</button>
                </div>
            </section>
            <article className="productsContainer">
                <div className="productsContainerTop">
                    <div className="productsContainerTopLeft">
                        <p>Set Columns</p>
                        <div className="productsContainerTopLeftInner">
                            <p>3</p>
                            <img src={ArrowDown} alt="arrow down" />
                        </div>
                    </div>
                    <div className="productsContainerTopRight">
                        <div className="productsSearchBox">
                            <img src={Search} alt="search icon" />
                            <input
                                type="text"
                                placeholder="Search product..."
                            />
                        </div>
                        <div className="productsSortBy">
                            <p>Sort By</p>
                            <img src={Funnel} alt="funnel icon" />
                        </div>
                    </div>
                </div>
                <div className="productsContainerBottom">
                    {products.map( product => (
                        <Link to={`/${product.id}`} className="individualProductContainer" key={product.id}>
                            <div className="productImageContainer">
                                <img className="productImage" src={`${process.env.PUBLIC_URL}/${product.image}.png`} alt="product item" />
                                <img className="productImageTag" src={BestSeller} alt="best seller tag" />
                            </div>
                            <div className="productDetails">
                                <div className="productTitle">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                                <div className="productPriceNCart">
                                    <div className="productPrice">
                                        <h2>{product.newPrice}</h2>
                                        <p>{product.oldPrice}</p>
                                    </div>
                                    <img src={Cart} alt="cart button" />
                                </div>
                                <div className="productTag">
                                    <img src={Rating} alt="product rating" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="pageSlider">
                    <img src={PageDetail} alt="next" />
                </div>
            </article>
        </main>
    )
}

export default Products;