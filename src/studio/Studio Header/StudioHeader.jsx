import React, { useState } from 'react'
import '../../user/Header/Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function StudioHeader() {
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
                <input type="text" placeholder="Search" value={searchData}
                    onChange={(event) => { setSearchData(event.target.value) }}
                />

                <SearchIcon className="header__inputButton" />

            </div>
            <div className="header__right">
                <Link to={'/'} className="Link_items">
                    <ExitToAppIcon className="header__icon" />
                </Link>
            </div>


        </div >
    )


}

export default StudioHeader
