import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';


function Header() {
    const [searchData, setSearchData] = useState('')



    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to={'/'}>
                    <img
                        className="header__logo"
                        src="/images/logo.png" alt="" wdith="100" />
                </Link>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search"
                    onChange={(event) => { setSearchData(event.target.value) }}
                />
                    <Link to={`/search/${searchData}`}>
                        <SearchIcon className="header__inputButton" />
                    </Link>
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Remy Sharp"
                    src="/images/logo.png"
                />
            </div>


        </div>
    )


}

export default Header
