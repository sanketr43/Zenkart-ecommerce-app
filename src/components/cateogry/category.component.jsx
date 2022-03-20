import React, { useState,useEffect } from "react";
import './category.styles.css';

import { getProductsByCategory } from "../../data/products";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

function Category() {

    const [products, setProducts] = useState([]);
    let { id } = useParams();

    const { dispatch } = useCart();
    const {stateWishlist, dispatchWishlist} = useWishlist();

    const addToWishlist = (item) => {
        dispatchWishlist({type: "ADD_TO_WISHLIST",payload: item});
    }

    const isWishlist = (id) => {
        const wishlistItemIndex = stateWishlist.wishlistItems.findIndex(product => product.id === id);
        if(wishlistItemIndex === -1) return false;
        return true;
    }

    const addToCart = (item) => {
        dispatch({type: "ADD_TO_CART",payload: item});
    }

    useEffect(()=>{
        setProducts(getProductsByCategory(id));
    },[]);


    return ( 
        <>
            <div className="bui-products-block">
                <div className="bui-products">
                    <div className="bui-products-filter" id="productsFilter">
                        <div className="bui-products-filter-block">
                            <div className="bui-filter-mobile" style={{ textAlign: "right" }}><p>Close</p></div>
                            <div className="bui-filter"><p className="bui-filter-title">Filters</p> <a href="#">Clear</a></div>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title">Price</p>
                            <div className="bui-mb-3 bui-mt-3">
                                <label htmlFor="price" className="bui-form-label" id="priceValue"></label>
                                <input name="price" className="bui-slider" id="priceRange" type="range" min="1" max="100"/>
                            </div>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Category</p>
                            <label className="bui-filter-label"><input type="checkbox"/> Men Clothing</label>
                            <label className="bui-filter-label"><input type="checkbox"/> Women Clothing</label>
                            <label className="bui-filter-label"><input type="checkbox"/> Child Clothing</label>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Rating</p>
                            <label className="bui-filter-label"><input type="radio" name="rating"/> 4 star and above</label>
                            <label className="bui-filter-label"><input type="radio" name="rating"/> 3 star and above</label>
                            <label className="bui-filter-label"><input type="radio" name="rating"/> 2 star and above</label>
                            <label className="bui-filter-label"><input type="radio" name="rating"/> 1 star and above</label>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Sort By</p>
                            <label className="bui-filter-label"><input type="radio" name="sort_by"/> Price - Low to High</label>
                            <label className="bui-filter-label"><input type="radio" name="sort_by"/> Price - High to Low</label>
                        </div>
                    </div>

                    <div className="bui-products-listing">
                        <p className="bui-products-title">Showing all products <span>(showing 20 products)</span></p>
                        <div className="bui-filter-mobile"><i className="bi bi-list"></i> Filters</div>
                        
                        <div className="bui-products-col">

                            {
                                products.map(item => {
                                    return(
                                        <div className="bui-card bui-card-product" key={item.id}>
                                            {
                                                isWishlist(item.id) ?
                                                <div className="bui-card-badge bui-whishlist-icon bui-whishlisted" onClick={() => addToWishlist(item)} ><i className="bi bi-heart-fill"></i></div>
                                                :
                                                <div className="bui-card-badge bui-whishlist-icon" onClick={() => addToWishlist(item)} ><i className="bi bi-heart"></i></div>
                                            }
                                            <img className="bui-card-img-top" src={item.image} alt="card-image"/>
                                            <div className="bui-card-body bui-text-center">
                                                <p className="bui-card-text">{item.title}</p>
                                                <h5 className="bui-card-title">₹{item.price}</h5>
                                            </div>
                                            <div className="bui-card-footer">
                                                <button className="bui-btn bui-btn-info bui-addcart" onClick={() => addToCart(item)}>Add to cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                            

                        </div>
                    </div>

                </div>
            </div>
        </>
     );
}

export default Category;