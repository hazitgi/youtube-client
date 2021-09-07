import React, { Fragment, useContext } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

// user
import Header from './user/Header/Header';
import Sidebar from './user/Sidebar/Sidebar';
import Main from './user/Main/Main';
import Search from './user/Search/SearchPage';
import Explore from './user/Explore/Explore';
import StudioSIdebar from './studio/Studio Sidebar/StudioSIdebar';
import StudioHeader from './studio/Studio Header/StudioHeader';
// import User from './user/User';
// import Studio from './studio/Studio';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import { GlobalContext, GlobalProvider } from './context/GlobalState'




function App() {
  const { userLogged } = useContext(GlobalContext)
  console.log(userLogged);
  return (
    // user
    <GlobalProvider>
      <div className="app">
        <Router>
          <Switch>
            <Route path={'/userLogin'} exact>
              <Login />
            </Route>
            <Route path={'/userSignup'} exact>
              <SignUp />
            </Route>
            <Route path={"/"} exact>
              <Header />
              <div className="app__page">
                <Sidebar />
                <Main />
              </div>
            </Route>
            <Route path={"/search"}>
              <Header />
              <div className="app__page">
                <Sidebar />
                <Search />
              </div>
            </Route>
            <Route path={"/Explore"}>
              <Header />
              <div className="app__page">
                <Sidebar />
                <Explore />
              </div>
            </Route>
            <Route path={"/studio"} exact>
              {!userLogged ? <Redirect to="/userLogin" /> :
                <Fragment>
                  <StudioHeader />
                  <div className="app__page">
                    <StudioSIdebar />
                  </div>
                </Fragment>
              }
            </Route>
          </Switch>
        </Router>
      </div >
    </GlobalProvider>
  );
}



export default App;
