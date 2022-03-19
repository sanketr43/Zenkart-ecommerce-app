import { useCart } from "../../context/cart-context";
import "./cart.styles.css";
import { NavLink } from 'react-router-dom';

function Cart() {

    const { state, dispatch } = useCart();
    const { CartItems, totalQty, totalPrice } = state;

    const addToCart = (item) => {
        dispatch({type: "ADD_TO_CART",payload: item});
    }

    const removeFromCart = (item, all = false) => {
        if(all == true){
            dispatch({type: "REMOVE_FROM_CART_ALL",payload: item});
        }else{
            dispatch({type: "REMOVE_FROM_CART",payload: item});
        }
    }

    return ( 
        <>
            <div className="bui-container">
                <p className="bui-cart-title bui-text-center">My Cart ({totalQty})</p>

                {   
                    CartItems.length === 0 && 
                    <div className="bui-text-center bui-pt-5 bui-pb-5 bui-mt-5">
                        <h5><i className="bi bi-cart3"></i> Empty Cart</h5>
                        <div className="bui-mt-3">
                            <NavLink to={'/'} className="bui-btn bui-btn-info bui-btn-sm" >Shop Now</NavLink>
                        </div>
                    </div>
                }

                {
                    CartItems.length > 0 &&
                    <div className="bui-cart">
                        <div className="bui-cart-items-container bui-mb-5">
                            {
                                CartItems.map((item,index) => {
                                    return(
                                        <div className="bui-card" key={item.id}>
                                            <div className="bui-card-body bui-cart-item">
                                                <div className="bui-cart-img">
                                                    <img src={item.image} alt=""/>
                                                </div>
                                                <div className="bui-cart-name">
                                                    <p className="bui-card-text">{item.title}</p>
                                                    <h5 className="bui-card-title">{item.price}</h5>
                                                </div>
                                                <div className="bui-cart-qty">
                                                    <button className="bui-btn" onClick={() => removeFromCart(item)}><i className="bi bi-dash"></i></button>
                                                    <input type="text" className="bui-form-control" value={item.quantity} min="0"/>
                                                    <button className="bui-btn" onClick={() => addToCart(item)}><i className="bi bi-plus"></i></button>
                                                </div>
                                                <div className="bui-cart-btn">
                                                    <button className="bui-btn bui-btn-info" onClick={() => removeFromCart(item,true)}>Remove from cart</button>
                                                    <button className="bui-btn bui-btn-default">Move to wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            

                            
                        </div>

                        <div className="bui-cart-total-container">
                            <div className="bui-card">
                                <div className="bui-card-body bui-cart-total">
                                    <h5 className="bui-card-title">Price Details</h5>
                                    <hr/>
                                    <div className="bui-cart-price"><span>Sub-total ({totalQty} items)</span><span>₹{totalPrice}</span></div>
                                    <div className="bui-cart-price"><span>Discount</span><span>₹0</span></div>
                                    <div className="bui-cart-price"><span>Delivery Charges</span><span>₹0</span></div>
                                    <hr/>
                                    <h5 className="bui-card-title"><span>Total Price</span><span>₹{totalPrice}</span></h5>
                                    <hr/>
                                    <p>You will save ₹0 on this order</p>
                                    <button className="bui-btn bui-btn-info">Place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
     );
}

export default Cart;