import React, { useState,useEffect } from "react";
import './category.styles.css';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory } from "../../data/products";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import axios from 'axios';
import { BASE_URL } from "../../context/global-context";

function Category() {
    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [sortby, setSortby] = useState('');
    const [query, setQuery] = useState('');
    const [categorylist, setCategorylist] = useState([]);

    const { dispatch } = useCart();
    const {stateWishlist, dispatchWishlist} = useWishlist();
    const { state } = useCart();

    const addToWishlist = (item) => {
        dispatchWishlist({type: "ADD_TO_WISHLIST",payload: item});
    }

    const isWishlist = (id) => {
        const wishlistItemIndex = stateWishlist.wishlistItems.findIndex(product => product.id === id);
        if(wishlistItemIndex === -1) return false;
        return true;
    }

    const isAddedToCart = (id) => {
        const cartItemIndex = state.CartItems.findIndex(product => product.id === id);
        if(cartItemIndex === -1) return false;
        return true;
    }

    const addToCart = (item) => {
        dispatch({type: "ADD_TO_CART",payload: item});
    }

    const applyFilter = () => {
        let newQuery = '?id='+categories.join()+'&price='+price+'&rating='+rating+'&sort_by='+sortby;
        setQuery(newQuery);
        navigate("/products" + newQuery);
    }

    const clearFilter = () => {
        let newQuery = '?id='+categories.join();
        setQuery(newQuery);
        navigate("/products" + newQuery);
    }

    const pushCategory = (e) => {
        if(e.target.checked === true){
            setCategories(prev => [...prev, e.target.value]);
        }else{
            setCategories(categories.filter(category => category !== e.target.value));
        }
    }

    useEffect(()=>{
        let q_categories = (searchParams.get('id'))? searchParams.get('id') : '';
        let q_price = (searchParams.get('price'))? searchParams.get('price') : '';
        let q_rating = (searchParams.get('rating'))? searchParams.get('rating') : '';
        let q_sortby = (searchParams.get('sort_by'))? searchParams.get('sort_by') : '';

        let newQuery = '?id='+q_categories+'&price='+q_price+'&rating='+q_rating+'&sort_by='+q_sortby;
        setQuery(newQuery);
        
        setCategories([...q_categories.split(',')]);
        setPrice(q_price);
        setRating(q_rating);
        setSortby(q_sortby);
        

        axios.get(BASE_URL + "product/get" + newQuery).then((response) => {
            setProducts(response.data);
        }).catch(() => {   
        });
    },[query]);

    useEffect(() => {
        const getCategories = ( async () => {
            await axios.get(BASE_URL + "category/get").then((response) => {
                setCategorylist(response.data);
            }).catch(() => {   
            });
        });
        getCategories();
    },[]);
    

    console.log(categories);

    return ( 
        <>
            <div className="bui-products-block">
                <div className="bui-products">
                    <div className="bui-products-filter" id="productsFilter">
                        <div className="bui-products-filter-block">
                            <div className="bui-filter-mobile" style={{ textAlign: "right" }}><p>Close</p></div>
                            <div className="bui-filter"><p className="bui-filter-title">Filters</p> <a href="#" onClick={clearFilter}>Clear</a></div>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title">Price</p>
                            <div className="bui-mb-3 bui-mt-3">
                                <label htmlFor="price" className="bui-form-label" id="priceValue">{(price) ? price : 0}</label>
                                <input name="price" className="bui-slider" id="priceRange" value={price} type="range" min="1" max="10000" onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Category</p>
                            {
                                categorylist.map((category) => {
                                    return(
                                        <label key={category._id} className="bui-filter-label">
                                            <input value={category._id} checked={categories.includes(category._id)} onChange={pushCategory} type="checkbox"/>{category.title}
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Rating</p>
                            <label className="bui-filter-label"><input type="radio" checked={rating == '4'} value={'4'} onChange={(e) => setRating(e.target.value)} name="rating"/> 4 star and above</label>
                            <label className="bui-filter-label"><input type="radio" checked={rating == '3'} value={'3'} onChange={(e) => setRating(e.target.value)} name="rating"/> 3 star and above</label>
                            <label className="bui-filter-label"><input type="radio" checked={rating == '2'} value={'2'} onChange={(e) => setRating(e.target.value)} name="rating"/> 2 star and above</label>
                            <label className="bui-filter-label"><input type="radio" checked={rating == '1'} value={'1'} onChange={(e) => setRating(e.target.value)} name="rating"/> 1 star and above</label>
                        </div>

                        <div className="bui-filter-block">
                            <p className="bui-filter-title bui-mb-2">Sort By</p>
                            <label className="bui-filter-label"><input type="radio" checked={sortby == 'LOW_TO_HIGH'} value={'LOW_TO_HIGH'} onChange={(e) => setSortby(e.target.value)} name="sort_by"/> Price - Low to High</label>
                            <label className="bui-filter-label"><input type="radio" checked={sortby == 'HIGH_TO_LOW'} value={'HIGH_TO_LOW'} onChange={(e) => setSortby(e.target.value)} name="sort_by"/> Price - High to Low</label>
                        </div>

                        <div className="bui-filter-block">
                            <button className="bui-btn bui-btn-block bui-btn-primary" onClick={applyFilter}>Apply</button>
                        </div>
                    </div>

                    <div className="bui-products-listing">
                        <p className="bui-products-title">Showing all products <span>(showing {products.length} products)</span></p>
                        <div className="bui-filter-mobile"><i className="bi bi-list"></i> Filters</div>
                        
                        <div className="bui-products-col">

                            {
                                products.map(item => {
                                    return(
                                        <div className="bui-card bui-card-product" key={item._id}>
                                            {
                                                isWishlist(item._id) ?
                                                <div className="bui-card-badge bui-whishlist-icon bui-whishlisted" onClick={() => addToWishlist({id: item._id, ...item})} ><i className="bi bi-heart-fill"></i></div>
                                                :
                                                <div className="bui-card-badge bui-whishlist-icon" onClick={() => addToWishlist({id: item._id, ...item})} ><i className="bi bi-heart"></i></div>
                                            }
                                            <img className="bui-card-img-top" src={item.image} alt="card-image"/>
                                            <div className="bui-card-body bui-text-center">
                                                <p className="bui-card-text">{item.title} ({item.rating})</p>
                                                <h5 className="bui-card-title">₹{item.price}</h5>
                                            </div>
                                            <div className="bui-card-footer">
                                            {
                                                isAddedToCart(item._id) ? 
                                                <button className="bui-btn bui-btn-warning bui-addcart" onClick={() => navigate('/cart')}>Go to cart</button>
                                                :
                                                <button className="bui-btn bui-btn-info bui-addcart" onClick={() => addToCart({id: item._id, ...item})}>Add to cart</button>
                                            }
                                                
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