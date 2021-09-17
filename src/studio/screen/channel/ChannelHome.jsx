import React, { useEffect, useContext } from 'react'
import './ChannelHome.css'
// import global context
import { GlobalContext } from '../../../context/GlobalState'
import HomeHeader from '../../Studio Components/HomeHeader/HomeHeader'


const ChannelHome = () => {
    const { getChannelDetails, channelDetails } = useContext(GlobalContext)

    useEffect(() => {
        console.log("did mount");
        getChannelDetails()
    }, [])

    return (
        <div className="studio__screen">
            <HomeHeader channelDetails={channelDetails} />
        </div>
    )
}

export default ChannelHome
