import React, { createContext, useState, useContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'


const Token = localStorage.getItem('userToken')
const initialState = {
    isAuthenticated: sessionStorage.getItem("isAuthenticated") || false,
    user: sessionStorage.getItem("user") || null,
    id: sessionStorage.getItem("id") || null,
    token: localStorage.getItem('userToken') || null,
    error: false
}
const UserAuthContext = createContext(initialState)

const AuthPorvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState)
    console.log(state);
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

const userAuth = () => useContext(UserAuthContext)


export { AuthPorvider, UserAuthContext }

