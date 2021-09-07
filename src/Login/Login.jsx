import React, { Fragment, useState, useContext } from 'react'
// import { Formik } from 'formik'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'
import './Login.css'

function Login() {
    const [Login, setLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [mailError, setmailError] = useState('')
    let [PError, setPError] = useState('')
    const { userLogin } = useContext(GlobalContext)

    const SubmitForm = (event) => {
        event.preventDefault()
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
            userLogin(newLogin)
        }

    }


    return (
        <div className="Login">
            <div className="body">
                <span className="Login__head">Login</span>
                <form onSubmit={(e) => SubmitForm(e)}>
                    {Login ?
                        <Fragment>
                            <input type="text" name="email" className="input__Field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span className="ErrorField">{mailError}</span>
                            <input type="password" name="password" className="input__Field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="ErrorField">{PError}</span>

                        </Fragment>
                        :
                        <Fragment>
                            <input type="number" name="mobile" className="input__Field" placeholder="Mobile Number" />
                            <input type="number" name="otp" className="input__Field" placeholder="Enter OTP" />
                        </Fragment>
                    }
                    {/* <input type="text" name="email" className="input__Field" placeholder="Email" />
                    <input type="password" name="password" className="input__Field" placeholder="Password" /> */}
                    <button type='submit' className="Login__btn">Login</button>
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
