import React, { Fragment, useState, useEffect, useContext } from 'react'
import './HomeHeader.css'
import Avatar from "@material-ui/core/Avatar"
import Modals from '../Modal/Modals'
import Modal from 'react-modal';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CreateChannel from '../CreateChannel/CreateChannel';
import { GlobalContext } from '../../../context/GlobalState';

const HomeHeader = ({ channelDetails }) => {
    const [ModalisOpen, setModalisOpen] = useState(false)
    console.log(channelDetails.length);
    if (channelDetails.length > 0) {
        return (
            <Fragment>
                <div className="channel__header">
                    <div className="channel__left">
                        <Avatar src="/logo512.png" className="channel__image" />
                        <span>React Js</span>
                    </div>
                    <div className="channel__right">
                        <button className="channel_btn" onClick={() => setModalisOpen(true)}>Add New Channel</button>
                    </div>
                </div>
                <div className="channel_nav">
                    <ul>
                        <li> HOME </li>
                        <li>VIDEOS</li>
                        <li>PLAYLISTS</li>
                        <li>CHANNELS</li>
                        <li>ABOUT</li>
                        <li>PROFILE</li>
                    </ul>
                </div>
                <Modals />
            </Fragment>
        )
    } else {
        return (
            <CreateChannel />
        )
    }



}

export default HomeHeader
