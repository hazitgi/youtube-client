import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// user
import App from './App';
import SearchPage from './Main/Search/SearchPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={App} />
    </Router>
    {/* <Router  */}
    {/* <Router path='path="/search/:data"' component={SearchPage} /> */}
  </React.StrictMode>,
  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
