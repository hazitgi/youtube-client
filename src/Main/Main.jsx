import React from 'react'
import './Main.css'
import VideoCard from './Videos/VideoCard'

function Main() {
    return (
        <div className="Main">
            <div className="Main__videos">
                {/* thumbnail, title, channel, channelImage, timeStamp, Views */}
                <VideoCard 
                    title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                    channel="hazitgi"
                    timeStamp="3 days ago"
                    Views="2.5M views"
                    channelImage="/video/channel.png"
                    thumbnail="/video/thumbnail.jpg"

                />
                <VideoCard 
                    title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                    channel="hazitgi"
                    timeStamp="3 days ago"
                    Views="2.5M views"
                    channelImage="/video/channel.png"
                    thumbnail="/video/thumbnail.jpg"

                />
                <VideoCard 
                    title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                    channel="hazitgi"
                    timeStamp="3 days ago"
                    Views="2.5M views"
                    channelImage="/video/channel.png"
                    thumbnail="/video/thumbnail.jpg"

                />
                <VideoCard 
                    title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                    channel="hazitgi"
                    timeStamp="3 days ago"
                    Views="2.5M views"
                    channelImage="/video/channel.png"
                    thumbnail="/video/thumbnail.jpg"

                />

            </div>
        </div>
    )
}

export default Main
