import React, { createContext, useContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';


// const Token = localStorage.getItem('userToken')

const initialState = {
    isAuthenticated: localStorage.getItem("isAuthenticated") || false,
    user: localStorage.getItem("user"),
    id: localStorage.getItem("id"),
    token: null,
    error: false
}
const UserAuthContext = createContext(initialState)

const AuthPorvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    // console.log(state);
    return (
        <UserAuthContext.Provider value={{
            state,
            dispatch,
            isAuthenticated: state.isAuthenticated,
            error: state.error
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

// const userAuth = () => useContext(UserAuthContext)


export { AuthPorvider, UserAuthContext }

