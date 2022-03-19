
import { createContext, useReducer } from 'react';
import { useContext } from 'react';

const IntialCartItems = {
    CartItems: [],
    totalQty: 0,
    totalPrice: 0
};

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const localCart = (cart) => {
    localStorage.setItem('cart',JSON.stringify(cart));
}

const getCart = () => {
    if(JSON.parse(localStorage.getItem('cart')) == null){
        return IntialCartItems;
    }
    return JSON.parse(localStorage.getItem('cart'));
}


function AddProductToCart(product,state){
    const updateCartItems = [...state.CartItems];
    const updatedItemIndex = updateCartItems.findIndex(item => item.id === product.id);

    if(updatedItemIndex === -1){
        updateCartItems.push({
            quantity: 1,
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        });
    }else{
        const updateItem = { ...updateCartItems[updatedItemIndex] };
        updateItem.quantity++;
        updateItem.price = product.price;
        updateCartItems[updatedItemIndex] = updateItem;
    }

    const totalQty = updateCartItems.reduce(function(quantity,item){
        return quantity + item.quantity
    },0);

    const totalPrice = updateCartItems.reduce(function(price,item){
        return price + (item.price * item.quantity)
    },0);

    const newState = { ...state, CartItems: updateCartItems, totalQty: totalQty, totalPrice: totalPrice };

    localCart(newState);

    return newState;
}

function removeProductFromCart(product,state, all = false){
    const updateCartItems = [...state.CartItems];
    const updatedItemIndex = updateCartItems.findIndex(item => item.id === product.id);

    const updateItem = { ...updateCartItems[updatedItemIndex] };

    if(all == true){
        updateCartItems.splice(updatedItemIndex,1);
    }else{
        updateItem.quantity--;
        if(updateItem.quantity <= 0){
            updateCartItems.splice(updatedItemIndex,1);
        }else{
            updateCartItems[updatedItemIndex] = updateItem;
        }
    }
    
    const totalQty = updateCartItems.reduce(function(quantity,item){
        return quantity + item.quantity
    },0);

    const totalPrice = updateCartItems.reduce(function(price,item){
        return price + (item.price * item.quantity)
    },0);

    const newState = { ...state, CartItems: updateCartItems, totalQty: totalQty, totalPrice: totalPrice };

    localCart(newState);

    return newState;
}


const CartReducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return AddProductToCart(action.payload,state);
        case "REMOVE_FROM_CART":
            return removeProductFromCart(action.payload,state);
        case "REMOVE_FROM_CART_ALL":
            return removeProductFromCart(action.payload,state,true);
        default:
            return state;
    }
}


const CartProvider = ({ children }) => {

    const getCartItems = getCart();

    const [state, dispatch] = useReducer(CartReducer,getCartItems);

    return(
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, useCart};



