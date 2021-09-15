import axios from 'axios'
import React, { createContext, useReducer, useContext } from 'react'
import AppReducer from './AppReducer'
// import { Redirect } from 'react-router'


const initialState = {
    channelDetails: [

    ],

}

// create context
const GlobalContext = createContext(initialState)


// Provider Component
const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    // studio get channel Details
    const userId = JSON.parse(localStorage.getItem('id'))
    let getChannelDetails = async () => {
        try {
            const channel = await axios.get(`/api/v1/youtube/studio/channel/getChannel/${userId}`)
            if (channel) {
                console.log(channel);
                // dispatch({
                //     type: 'GET_CHANNEL_DETAILS',
                //     // payload:
                // })
            }
        } catch (err) {
            console.log("err");
        }
    }


    return (
        <GlobalContext.Provider value={{
            channelDetails: state.channelDetails,
            dispatch,
            getChannelDetails
        }}>{children}</GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
