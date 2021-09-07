import React from 'react'
import './VideoCard.css'
import Avatar from "@material-ui/core/Avatar"

function VideoCard({ thumbnail, title, channel, channelImage, timeStamp, Views }) {
    return (
        <div className="VideoCard">
            <img src={thumbnail} alt={title} className="VideoCard__thumbnail"/>
            <div className="video__info">
                <Avatar className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{Views} · {timeStamp}</p>
                </div>
            </div>

        </div>
    )
}

export default VideoCard
