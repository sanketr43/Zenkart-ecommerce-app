import { useWishlist } from "../../context/wishlist-context";
import "./wishlist.styles.css";
import { NavLink } from 'react-router-dom';
import { useCart } from "../../context/cart-context";

function Wishlist() {

    const { dispatch } = useCart();
    const {stateWishlist, dispatchWishlist} = useWishlist();

    const addToWishlist = (item) => {
        dispatchWishlist({type: "ADD_TO_WISHLIST",payload: item});
    }

    const moveToCart = (item) => {
        dispatchWishlist({type: "REMOVE_FROM_WISHLIST",payload: item});
        dispatch({type: "ADD_TO_CART",payload: item});
    }

    return ( 
        <>
            <div className="bui-container">
                <p className="bui-wishlist-title bui-text-center">Wishlist ({stateWishlist.wishlistItems.length})</p>


                {   
                    stateWishlist.wishlistItems.length === 0 && 
                    <div className="bui-text-center bui-pt-5 bui-pb-5 bui-mt-5">
                        <h5><i className="bi bi-heart"></i> Empty Wishlist</h5>
                        <div className="bui-mt-3">
                            <NavLink to={'/'} className="bui-btn bui-btn-info bui-btn-sm" >Shop Now</NavLink>
                        </div>
                    </div>
                }

                {   
                    stateWishlist.wishlistItems.length > 0 && 
                    <div className="bui-wishlist">
                    {
                        stateWishlist.wishlistItems.map(item => {
                            return(
                                <div className="bui-card bui-card-product"  key={item.id}>
                                    <div className="bui-card-badge bui-whishlist-icon bui-whishlisted" onClick={() => addToWishlist(item)}><i className="bi bi-heart-fill"></i></div>
                                    <img className="bui-card-img-top" src={item.image} alt="card-image"/>
                                    <div className="bui-card-body bui-text-center">
                                        <p className="bui-card-text">{item.title}</p>
                                        <h5 className="bui-card-title">₹{item.price}</h5>
                                    </div>
                                    <div className="bui-card-footer">
                                        <button className="bui-btn bui-btn-default bui-addcart" onClick={() => moveToCart(item)}>Move to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                }
            </div>
        </>
     );
}

export default Wishlist;