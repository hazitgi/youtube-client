import React, { Fragment, useContext } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// user
import Header from "./user/Header/Header";
import Sidebar from "./user/Sidebar/Sidebar";
import Main from "./user/Main/Main";
import Search from "./user/Search/SearchPage";
import Explore from "./user/Explore/Explore";
import StudioSIdebar from "./studio/Studio Sidebar/StudioSIdebar";
import StudioHeader from "./studio/Studio Header/StudioHeader";
// import User from './user/User';
// import Studio from './studio/Studio';
import Login from "./Login/Login";
import SignUP from "./Login/SignUp";
import { UserAuthContext } from "./context/AuthContext";
// admin
import AdminHeader from "./admin/Admin Header/AdminHeader";
import AdminSIdebar from "./admin/Admin Sidebar/AdminSIdebar";

import ChannelHome from "./studio/screen/channel/ChannelHome";

function App() {
  const { isAuthenticated } = useContext(UserAuthContext);

  const StudioLayout = ({ children }) => {
    return (
      <Fragment>
        <StudioHeader />
        <div className="app__page">
          <StudioSIdebar />
          {children}
        </div>
      </Fragment>
    );
  };

  return (
    // user

    <div className="app">
      <Switch>
        <Route path={"/userLogin"} exact>
          {isAuthenticated ? <Redirect to={"/"} /> : <Login />}
        </Route>
        <Route path={"/userSignup"} exact>
          <SignUP />
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

        {/* <Route path="/studio" exact>
          {!isAuthenticated ? <Redirect to={"/userLogin"} /> : <Studio />}
        </Route> */}

        <Route path="/studio" exact>
          {!isAuthenticated ? <Redirect to="/userLogin" /> :
            <StudioLayout>
              <h1>Hello</h1>
            </StudioLayout>
          }
        </Route>
        <Route path="/studio/channel" exact>
          {!isAuthenticated ? <Redirect to="/userLogin" /> :
            <StudioLayout>
              <ChannelHome />
            </StudioLayout>
          }
        </Route>

        {/* <Route path={"/studio"} exact>
              {!isAuthenticated ? (
                <Redirect to={"/userLogin"} />
              ) : (
                <Fragment>
                  <StudioHeader />
                  <div className="app__page">
                    <StudioSIdebar />
                  </div>
                </Fragment>
              )}
            </Route> */}

        <Route path={"/admin"} exact>
          <Fragment>
            <AdminHeader />
            <div className="app__page">
              <AdminSIdebar />
            </div>
          </Fragment>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
