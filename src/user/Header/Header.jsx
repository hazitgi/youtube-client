import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';


function Header() {
    const [searchData, setSearchData] = useState('')



    return (
        <div className="header">
            <div className="header__left">

                <MenuIcon id="Menu_icon" />
                <Link to={'/'}>
                    <img
                        className="header__logo"
                        src="/images/logo.png" alt="" wdith="100" />
                </Link>
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" value={searchData}
                    onChange={(event) => { setSearchData(event.target.value) }}
                />
                <Link to={`/search`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__right">
                <Link to={'/studio'} >
                    <VideoCallIcon className="header__icon" className="Link_items" />
                </Link>
                <NotificationsIcon className="header__icon" />
                <Link to={'/userLogin'} className="drop_down_btn">
                    <Avatar alt="Remy Sharp" className="Profile__Image"
                        src="/images/logo.png"
                    />
                </Link>
            </div>


        </div >
    )


}

export default Header
