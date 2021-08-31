import React from 'react'
import { Avatar } from "@material-ui/core"
import VerifyIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import './ChannelRaw.css'


function ChannelRaw(props) {
    const { image, channel, verified, subcribers, noOfVideos, description } = props
    return (
        <div className="ChannelRaw">
            <Avatar
                className="ChannelRaw__logo" alt={channel}
                src={image}
            />
            <div className="ChannelRaw__text">
                <h4>{channel} {verified && <VerifyIcon />}</h4>
                <p>
                    {subcribers} subscribers · {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
            <div className="ChannelRaw__subscription">
                <button>Subscribe</button>
                <NotificationsNoneIcon className="ChannelRaw__notify"/>
            </div>
        </div>
    )
}

export default ChannelRaw
