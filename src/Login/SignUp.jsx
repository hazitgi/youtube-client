import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import * as yup from 'yup'


import './Login.css'

function Login() {
    return (
        <div className="Login">
            <div className="body">
                <span className="Login__head">SignUp</span>
                <form>
                    <input type="text" name="username" className="input__Field" placeholder="Enter Your Name" />
                    <input type="text" name="email" className="input__Field" placeholder="Email" />
                    <input type="number" name="mobile" className="input__Field" placeholder="Mobile Number" />
                    <input type="password" name="password" className="input__Field" placeholder="Password" />
                    <input type="password" name="cpassword" className="input__Field" placeholder="Confirm Password" />
                    <button className="Login__btn">Login</button>
                </form>

                <div className="Login__social">
                    <span>SignUp with</span>
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
                        <Link to={'/userLogin'} className="Login__signup__Link">
                            Do you have an Account ?
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login
