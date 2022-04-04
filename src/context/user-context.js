
import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext(null);

const IntialUser = {
    user: null
};

const useUser = () => useContext(UserContext);

const localUser = (user) => {
    if(user == null){
        localStorage.setItem('user',JSON.stringify({user}));
        return;
    }
    const { _id, ...other } = user;
    localStorage.setItem('user',JSON.stringify({user: { id: _id, ...other }}));
}

const getUser = () => {
    if(JSON.parse(localStorage.getItem('user')) == null){
        return IntialUser;
    }
    return JSON.parse(localStorage.getItem('user'));
}

const UserReducer = (state, action) =>{
    switch(action.type){
        case "LOGGED_IN_USER":
            localUser(action.payload);
            return {...state, user: action.payload};
        case "LOGGED_OUT_USER":
            localUser(action.payload);
            return {...state, user: action.payload};
        default:
            return state;
    }
}

const UserProvider = ({children}) => {

    const user = getUser();
    const [stateUser, dispatchUser] = useReducer(UserReducer, user);

    return(
        <UserContext.Provider value={{ stateUser, dispatchUser }}>{children}</UserContext.Provider>
    )
}

export {UserProvider, useUser};