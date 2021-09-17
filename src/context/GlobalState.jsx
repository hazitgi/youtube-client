import { CardActions } from '@material-ui/core'
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
                console.log(channel.data);
                dispatch({
                    type: 'GET_CHANNEL_DETAILS',
                    payload: channel.data
                })
            }
        } catch (err) {
            console.log("err");
        }
    }

    let AddChannel = async (data) => {
        axios.post("/api/v1/youtube/studio/channel/add_channel", data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                type: "formData",
            },
        }).then((response) => {
            console.log(response);
            dispatch({
                type: 'ADD_NEW_CHANNEL',
                payload: response.data
            })
        })
    }


    return (
        <GlobalContext.Provider value={{
            channelDetails: state.channelDetails,
            dispatch,
            getChannelDetails,
            AddChannel
        }}>{children}</GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext }
