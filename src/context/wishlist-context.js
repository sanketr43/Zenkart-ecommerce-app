
import { createContext, useContext, useReducer } from 'react';
import { act } from 'react-dom/test-utils';

const InitialWishlistItems = {
    wishlistItems: []
};

const WishlistContext = createContext(null);

const useWishlist = () => useContext(WishlistContext);

const localWishlist = (wishlist) => {
    localStorage.setItem('wishlist',JSON.stringify(wishlist));
}

const getWishlist = () => {
    if(JSON.parse(localStorage.getItem('wishlist')) == null){
        return InitialWishlistItems;
    }
    return JSON.parse(localStorage.getItem('wishlist'));
}

function addToWishlist(product,state){
    const updatedWishlist = [...state.wishlistItems];
    const wishlistItemIndex = updatedWishlist.findIndex(item => item.id === product.id);
    if(wishlistItemIndex === -1){
        updatedWishlist.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        });
    }else{
        updatedWishlist.splice(wishlistItemIndex,1);
    }

    const newState = { wishlistItems: updatedWishlist };
    localWishlist(newState);

    return newState;
}

function removeFromWishlist(product,state){
    const updatedWishlist = [...state.wishlistItems];
    const wishlistItemIndex = updatedWishlist.findIndex(item => item.id === product.id);
    if(wishlistItemIndex >= 0){
        updatedWishlist.splice(wishlistItemIndex,1);
    }

    const newState = { wishlistItems: updatedWishlist };
    localWishlist(newState);

    return newState;
}


function wishlistReducer(state,action){
    switch(action.type){
        case "ADD_TO_WISHLIST": 
            return addToWishlist(action.payload,state);
        case "REMOVE_FROM_WISHLIST":
            return removeFromWishlist(action.payload,state);
        default:
            return state;
    }
}

const WishlistProvider = ({ children }) => {
    const wishlistItems = getWishlist();
    const [stateWishlist, dispatchWishlist] = useReducer(wishlistReducer, wishlistItems);

    return(
        <WishlistContext.Provider value={{ stateWishlist, dispatchWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist };