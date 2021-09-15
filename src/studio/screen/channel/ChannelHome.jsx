import React, { useEffect, useContext } from 'react'
import './ChannelHome.css'
// import global context
import { GlobalContext } from '../../../context/GlobalState'
import HomeHeader from '../../Studio Components/HomeHeader/HomeHeader'


const ChannelHome = () => {
    const { getChannelDetails } = useContext(GlobalContext)

    useEffect(() => {
        console.log("did mount");
        getChannelDetails()
    }, [])

    return (
        <div className="studio__screen">
            <HomeHeader />
        </div>
    )
}

export default ChannelHome
