import React, { Fragment } from 'react'
import './HomeHeader.css'
import Avatar from "@material-ui/core/Avatar"
import Modal from 'react-modal';

const HomeHeader = () => {
    return (
        <Fragment>
            <div className="channel__header">
                <div className="channel__left">
                    <Avatar src="/logo512.png" className="channel__image" />
                    <span>React Js</span>
                </div>
                <div className="channel__right">
                    <button>Add New Channel</button>
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
            <Modal isOpen={true}>
                <h2>Modal title</h2>
                <p>mobal body</p>
            </Modal>

        </Fragment>
    )
}

export default HomeHeader
