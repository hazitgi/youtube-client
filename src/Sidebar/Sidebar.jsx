import React from 'react'
import SidebarRow from './SideBar items/SidebarRow'
import './Sidebar.css'
import { Link } from 'react-router-dom';
// icone
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


function Sidebar({ selected }) {
    return (
        <div className="sidebar">
            <Link to={'/'} className="Sidebar__item">
                <SidebarRow selected={selected} Icon={HomeIcon} title="Home" />
            </Link>
            <Link className="Sidebar__item" to={'/Explore'}>
                <SidebarRow Icon={ExploreIcon} title="Explore" />
            </Link>
            <Link className="Sidebar__item" to={'/Subscription'}>
                <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
            </Link>
            <hr />
            <Link className="Sidebar__item" to={'/Librery'}>
                <SidebarRow Icon={VideoLibraryIcon} title="Librery" />
            </Link>
            <Link className="Sidebar__item" to={'/History'}>
                <SidebarRow Icon={HistoryIcon} title="History" />
            </Link>
            <Link className="Sidebar__item" to={'/your-video'}>
                <SidebarRow Icon={OndemandVideoIcon} title="Your Video" />
            </Link>
            <Link className="Sidebar__item" to={'/watch-later'}>
                <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            </Link>
            <Link className="Sidebar__item" to={'/liked-videos'}>
                <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
            </Link>

            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <hr />

        </div>
    )
}

export default Sidebar
