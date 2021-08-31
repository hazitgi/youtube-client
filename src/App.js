import React from 'react'
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from './Main/Search/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <div className="app__page" >
            <Route exact path="/" selected>
              <Sidebar />
              <Main />
            </Route>
            <Route path="/Explore">
              <Sidebar />
              <h1>Explore</h1>
            </Route>
            <Route path="/Subscription">
              <Sidebar />
              <h1>Subscription</h1>
            </Route>
            <Route path="/Librery">
              <Sidebar />
              <h1>Librery</h1>
            </Route>
            <Route path="/History">
              <Sidebar />
              <h1>History</h1>
            </Route>
            <Route path="/your-video">
              <Sidebar />
              <h1>your-video</h1>
            </Route>
            <Route path="/watch-later">
              <Sidebar />
              <h1>watch-later</h1>
            </Route>
            <Route path="/liked-videos">
              <Sidebar />
              <h1>liked-videos</h1>
            </Route>
            <Route path="/search/:data">
              <Sidebar />
              <SearchPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}



export default App;
