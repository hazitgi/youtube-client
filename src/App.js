import React from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// user
import Main from './Main/Main';
import SearchPage from './Main/Search/SearchPage'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__page">
          <Sidebar />
          <Route path='/' exact component={Main} />
          <Route path='/search/:data' exact component={SearchPage} />
        </div>
      </div >
    </Router>


  );
}



export default App;
