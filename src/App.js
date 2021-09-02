import React from 'react'
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import SearchPage from './Main/Search/SearchPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
    </div>

  );
}



export default App;
