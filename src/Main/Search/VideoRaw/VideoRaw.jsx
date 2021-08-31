import React from 'react'
import './VideoRaw.css'
import Avatar from "@material-ui/core/Avatar"
function VideoRaw({
    views,
    channelLogo,
    description,
    timeStamp,
    channel,
    title,
    thumbnail
})
{
    return (
        <div className="VideoRaw">
            <img src={thumbnail} alt={title} />
            <div className="videoRow__text">
                <h3>{title.slice(0,150)}</h3>
                <p className="VideoRaw__headline">
                    <span className="VideoRow__subs">
                        {views} views · {timeStamp}
                    </span>
                </p>
                <div className="VideoRaw__Logo">
                    <Avatar className="VideoRaw__avatar"
                        alt={channel}
                        src={channelLogo}
                    />
                    <span className="VideRaw__Channel">
                        {channel}
                    </span>
                </div>
                <p className="VideoRaw__description">{description.slice(0,200)} ...</p>
            </div>
        </div>
    )
}

export default VideoRaw
