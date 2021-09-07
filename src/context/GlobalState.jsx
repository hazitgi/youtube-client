import axios from 'axios'
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// import { Redirect } from 'react-router'

const initialState = {
    userLogged: false
}

// create context
const GlobalContext = createContext(initialState)

// Provider Component
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    let userLogin = async (data) => {
        axios.post('http://localhost:5000/api/v1/youtube/userLogin', data)
            .then(response => {
                console.log(response);
                dispatch({
                    type: "USER_LOGIN",
                    payload: response
                })
                // { state.userLogin ? <Redirect to={"/"} /> : <Redirect to={"/userLogin"} /> }
            }).catch(error => {
                console.log('error',error);
                dispatch({
                    type: "USER_LOGIN_ERROR",
                    payload: error
                })
            })
    }
    console.log(state);
    return (
        <GlobalContext.Provider value={{
            userLogin,
            userLogged: state.userLogged
        }}>{children}</GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
