import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRaw from './ChannelRaw/ChannelRaw';
import VideoRaw from './VideoRaw/VideoRaw';

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRaw
                image="/video/thumbnail.jpg"
                channel="Crossroads"
                verified
                subcribers="150K"
                noOfVideos={382}
                description="You can find awesome programming lessons here !"
                subscribe
            />
            <hr />

            <VideoRaw
                views="2.5M"
                thumbnail="/video/thumbnail.jpg"
                description="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                timeStamp="3 days ago"
                channel="hazitgi"
                title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                channelLogo="/video/channel.png"
            />
            <VideoRaw
                views="2.5M"
                thumbnail="/video/thumbnail.jpg"
                description="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                timeStamp="3 days ago"
                channel="hazitgi"
                title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                channelLogo="/video/channel.png"
            />
            <VideoRaw
                views="2.5M"
                thumbnail="/video/thumbnail.jpg"
                description="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                timeStamp="3 days ago"
                channel="hazitgi"
                title="KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe KARI IDLI | Meat Inside Idli Recipe Cooking In village | Stuffed Idli Recipe | Mutton keema Recipe"
                channelLogo="/video/channel.png"
            />

        </div>
    )
}

export default SearchPage
