import React from 'react'
import { Link } from 'react-router-dom';
import '../../user/Sidebar/Sidebar.css'
import SidebarRow from '../../user/Sidebar/SideBar items/SidebarRow';



import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SettingsIcon from '@material-ui/icons/Settings';



function StudioSIdebar() {
    return (
        <div className="sidebar">
            <Link to={'/studio'} key={1} className="Sidebar__item">
                <SidebarRow Icon={DashboardIcon} title="Dashboard" />
            </Link>
            <Link to={'/content'} key={1} className="Sidebar__item">
                <SidebarRow Icon={MovieFilterIcon} title="Content" />
            </Link>
            <Link to={'/playlist'} key={1} className="Sidebar__item">
                <SidebarRow Icon={PlaylistAddIcon} title="Playlist" />
            </Link>
            <hr />
            <Link to={'/comments'} key={1} className="Sidebar__item">
                <SidebarRow Icon={InsertCommentIcon} title="Comments" />
            </Link>
            <Link to={'/settings'} key={1} className="Sidebar__item">
                <SidebarRow Icon={SettingsIcon} title="Settings" />
            </Link>
        </div>
    )
}

export default StudioSIdebar
