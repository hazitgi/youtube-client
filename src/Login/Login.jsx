import React, { Fragment, useState, useContext, useEffect } from 'react'
// import { Formik } from 'formik'
import { Link } from 'react-router-dom';
import './Login.css'
import { useHistory } from 'react-router-dom'
// import { userLogin } from '../Utils/APIService';
import { useCookies } from 'react-cookie';
import inputCustomHook from './inputCustomHook';

import { UserAuthContext } from '../context/AuthContext'

import axios from 'axios';


function Login() {

    const [Login, setLogin] = useState(true)
    const [email, bindEmail] = inputCustomHook('')
    const [password, bindPassword] = inputCustomHook('')
    const [mobile, bindMobile] = inputCustomHook('')
    const [mailError, setmailError] = useState('')
    const [PError, setPError] = useState('')
    const [loginError, setLoginError] = useState('')
    const [userToken, setUserToken] = useCookies(['userToken'])
    // const [cookies, setCookie] = useCookies(['userToken']);


    const { dispatch, isAuthenticated, error, state } = useContext(UserAuthContext)


    let history = useHistory();
    console.log(state);
    const SubmitForm = async (event) => {
        event.preventDefault()
        if (Login) {
            const newLogin = {
                email,
                password
            }
            if (!email) {
                setmailError("this field is required")
            } else if (!password) {
                setPError("Password can't empty")
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setmailError("Invalid Email Address")
            } else {
                setPError("")
                setmailError("")
                setLoginError("")
              
                try {
                    let userLoggin = await axios.post(`/api/v1/youtube/userLogin`, newLogin)
                    console.log("loggin");
                    console.log(userLoggin);
                    if (userLoggin && userLoggin.data.success) {
                        console.log('ready');
                        setUserToken('userToken', userLoggin.data.token)
                        console.log("userToken", userToken);
                        dispatch({
                            type: 'USER_LOGIN',
                            payload: userLoggin.data
                        })
                        history.push('/')
                    }
                } catch (error) {
                    console.log("error");
                    console.log(error);
                    dispatch({
                        type: 'USER_LOGIN_ERROR',
                        payload: error
                    })
                    setLoginError("Invalid email or password")
                }

            }
        }else{
            
        }

    }

    return (
        <div className="Login">
            <div className="body">
                <span className="Login__head">Login</span>
                <form onSubmit={(e) => SubmitForm(e)}>
                    {error}
                    {Login ?
                        <Fragment>
                            <input type="text" name="email" className="input__Field" placeholder="Email" {...bindEmail} />
                            <span className="ErrorField">{mailError}</span>
                            <input type="password" name="password" className="input__Field" placeholder="Password" {...bindPassword} />
                            <span className="ErrorField">{PError}</span>
                        </Fragment>
                        :
                        <Fragment>
                            <input type="number" name="mobile" className="input__Field" placeholder="Mobile Number" {...bindMobile} />
                            {/* <input type="number" name="otp" className="input__Field" placeholder="Enter OTP" /> */}
                        </Fragment>
                    }
                    {/* <input type="text" name="email" className="input__Field" placeholder="Email" />
                    <input type="password" name="password" className="input__Field" placeholder="Password" /> */}
                    <span className="ErrorField">{loginError}</span>
                    <button type='submit' className="Login__btn">{Login ? "Login" : "Next"}</button>
                    <span className="Login__Method" onClick={() => setLogin(!Login)}>Login with {Login ? "OTP" : "Email"}</span>
                </form>

                <div className="Login__social">
                    <span className="Login__Method">Login with</span>
                    <div className="Login__social__icon">
                        <div>

                            <i className="icon fab fa-github"></i>
                        </div>
                        <div>
                            <i className="icon fab fa-facebook-f"></i>
                        </div>
                        <div>
                            <i className="icon fab fa-google"></i>
                        </div>
                        <div>
                            <i className="icon fab fa-twitter"></i>
                        </div>
                    </div>
                    <div className="Login__signup">
                        <Link to={'/userSignup'} className="Login__signup__Link">
                            Create An Account
                        </Link>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default Login
