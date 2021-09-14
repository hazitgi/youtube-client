import React, { Fragment, useState } from 'react'
import './HomeHeader.css'
import Avatar from "@material-ui/core/Avatar"
import Modals from '../Modal/Modals'
// import Modal from 'react-modal';

const HomeHeader = () => {
    const [ChannelDetails, setChannelDetails] = useState({})


    const [ModalisOpen, setModalisOpen] = useState(false)

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
        },
    };

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
            {/* <Modal isOpen={ModalisOpen}
                onRequestClose={() => setModalisOpen(false)}
                style={customStyles}>
                <h2>Modal title</h2>
                <p>mobal body</p>
                <button className="channel_btn" onClick={() => setModalisOpen(false)}>
                    close
                </button>
            </Modal> */}
            <Modals customStyles={customStyles} ModalisOpen={ModalisOpen} setModalisOpen={setModalisOpen} />

        </Fragment>
    )
}

export default HomeHeader
