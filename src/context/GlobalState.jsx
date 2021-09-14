import axios from 'axios'
import React, { useState, createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// import { Redirect } from 'react-router'


const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    LoginSatus: false,
    error: false
}

// create context
const GlobalContext = createContext(initialState)


// Provider Component
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const [Sidebar, toggleSidebar] = useState(false)
    const handleToggleSidebar = () => {
        toggleSidebar(value => !value)
    }

    const [ChannelDetails, setChannelDetails] = useState()

    return (
        <GlobalContext.Provider value={{
            handleToggleSidebar,
            Sidebar
        }}>{children}</GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
