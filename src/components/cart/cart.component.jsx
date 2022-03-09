import "./cart.styles.css";

function Cart() {
    return ( 
        <>
            <div className="bui-container">
                <p className="bui-cart-title bui-text-center">My Cart (2)</p>

                <div className="bui-cart">
                    <div className="bui-cart-items-container">
                        <div className="bui-card">
                            <div className="bui-card-body bui-cart-item">
                                <div className="bui-cart-img">
                                    <img src="https://img.mensxp.com/media/shop/catalog/products/M/742352/maroon-front-zip-bomber-jacket-61998-default.jpg" alt=""/>
                                </div>
                                <div className="bui-cart-name">
                                    <p className="bui-card-text">Men Premium Jacker</p>
                                    <h5 className="bui-card-title">$2000</h5>
                                </div>
                                <div className="bui-cart-qty">
                                    <button className="bui-btn"><i className="bi bi-plus"></i></button>
                                    <input type="text" className="bui-form-control" value={2} min="0"/>
                                    <button className="bui-btn"><i className="bi bi-dash"></i></button>
                                </div>
                                <div className="bui-cart-btn">
                                    <button className="bui-btn bui-btn-info">Remove from cart</button>
                                    <button className="bui-btn bui-btn-default">Move to wishlist</button>
                                </div>
                            </div>
                        </div>

                        <div className="bui-card">
                            <div className="bui-card-body bui-cart-item">
                                <div className="bui-cart-img">
                                    <img src="https://img.mensxp.com/media/shop/catalog/products/M/742352/maroon-front-zip-bomber-jacket-61998-default.jpg" alt=""/>
                                </div>
                                <div className="bui-cart-name">
                                    <p className="bui-card-text">Men Premium Jacker</p>
                                    <h5 className="bui-card-title">$2000</h5>
                                </div>
                                <div className="bui-cart-qty">
                                    <button className="bui-btn"><i className="bi bi-plus"></i></button>
                                    <input type="text" className="bui-form-control" value={2} min="0"/>
                                    <button className="bui-btn"><i className="bi bi-dash"></i></button>
                                </div>
                                <div className="bui-cart-btn">
                                    <button className="bui-btn bui-btn-info">Remove from cart</button>
                                    <button className="bui-btn bui-btn-default">Move to wishlist</button>
                                </div>
                            </div>
                        </div>

                        <div className="bui-card">
                            <div className="bui-card-body bui-cart-item">
                                <div className="bui-cart-img">
                                    <img src="https://img.mensxp.com/media/shop/catalog/products/M/742352/maroon-front-zip-bomber-jacket-61998-default.jpg" alt=""/>
                                </div>
                                <div className="bui-cart-name">
                                    <p className="bui-card-text">Men Premium Jacker</p>
                                    <h5 className="bui-card-title">$2000</h5>
                                </div>
                                <div className="bui-cart-qty">
                                    <button className="bui-btn"><i className="bi bi-plus"></i></button>
                                    <input type="text" className="bui-form-control" value={2} min="0"/>
                                    <button className="bui-btn"><i className="bi bi-dash"></i></button>
                                </div>
                                <div className="bui-cart-btn">
                                    <button className="bui-btn bui-btn-info">Remove from cart</button>
                                    <button className="bui-btn bui-btn-default">Move to wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bui-cart-total-container">
                        <div className="bui-card">
                            <div className="bui-card-body bui-cart-total">
                                <h5 className="bui-card-title">Price Details</h5>
                                <hr/>
                                <div className="bui-cart-price"><span>Sub-total (5 items)</span><span>$2000</span></div>
                                <div className="bui-cart-price"><span>Discount</span><span>$599</span></div>
                                <div className="bui-cart-price"><span>Delivery Charges</span><span>$100</span></div>
                                <hr/>
                                <h5 className="bui-card-title"><span>Total Price</span><span>$5000</span></h5>
                                <hr/>
                                <p>You will save ₹1999 on this order</p>
                                <button className="bui-btn bui-btn-info">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Cart;