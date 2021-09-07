import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './User.css'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
// user
import Main from './Main/Main';
import SearchPage from './Search/SearchPage'
import Explore from './Explore/Explore';


function User() {
    return (
        <Router>
            <Switch>
                <div className="app">
                    <Header />
                    <div className="app__page">
                        <Sidebar />
                        <Route path='/' exact component={Main} />
                        <Route path='/search/:data' component={SearchPage} />
                        <Route path='/Explore' component={Explore} />
                    </div>
                </div >
            </Switch>
        </Router>
    )
}

export default User
