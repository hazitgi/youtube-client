import React, { useState, useEffect } from 'react'
// import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
// import * as yup from 'yup'
import './Login.css'
import inputCustomHook from './inputCustomHook';
import { userSignUP } from '../Utils/APIService'
import { useHistory } from 'react-router-dom'


function SignUP() {

    const [Name, bindName] = inputCustomHook('')
    const [Email, bindEmail] = inputCustomHook('')
    const [Mobile, bindMobile] = inputCustomHook('')
    const [Password, bindPassword] = inputCustomHook('')
    const [ConfirmPassword, bindConfirmPassword] = inputCustomHook('')


    const [NameErr, setNameErr] = useState('')
    const [EmailErr, setEmailErr] = useState('')
    const [MobileErr, setMobileErr] = useState('')
    const [PasswordErr, setPasswordErr] = useState('')
    const [CPasswordErr, setCPasswordErr] = useState('')

    const [AccountOPEN, setAccountOPEN] = useState(false)
    let history = useHistory();



    const handleSubmit = (event) => {
        event.preventDefault()
        if (!Name) {
            setNameErr("Required")
        } else if (Name.length < 3) {
            setNameErr("Name must have 3 charactor")
        } else if (!Email) {
            setEmailErr("Required")
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
            setEmailErr("Invalid Email formate")
        } else if (!Mobile) {
            setMobileErr("Required")
        } else if (Mobile.length < 10) {
            setMobileErr("Mobile number must have 10 digit")
        } else if (Mobile.length > 10) {
            setMobileErr("Mobile number not more than 10 digit ")
        } else if (!Password) {
            setPasswordErr("Required")
        } else if (Password.length < 6) {
            setPasswordErr("Password length not less than 6 digit")
        } else if (Password !== ConfirmPassword) {
            setCPasswordErr("Confrim password same as password")
        } else {
            setNameErr("")
            setEmailErr("")
            setMobileErr("")
            setPasswordErr("")
            setCPasswordErr("")
            const data = {
                username: Name,
                email: Email,
                mobile: Mobile,
                password: Password
            }
            userSignUP(data)
                .then(response => {
                    console.log(response);
                    console.log('success');
                    if (response.success) {
                        setAccountOPEN(true)
                    }
                }).catch(error => {
                    console.log('catch');
                    console.log("error");
                    console.error(error);
                })
        }
    }

    useEffect(() => {
        if (AccountOPEN) {
            history.push('/')
        }
    }, [AccountOPEN])


    return (
        <div className="Login">
            <div className="body">
                <span className="Login__head">SignUp</span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" name="username" className="input__Field" placeholder="Enter Your Name" {...bindName}
                    // onKeyPress={(e) => verifyInput(e)} 
                    />
                    <span className="ErrorField">{NameErr}</span>
                    <input type="text" name="email" className="input__Field" placeholder="Email" {...bindEmail}
                    // onKeyPress={(e) => verifyInput(e)} 
                    />
                    <span className="ErrorField">{EmailErr}</span>
                    <input type="number" name="mobile" className="input__Field" placeholder="Mobile Number" {...bindMobile}
                    // onKeyPress={(e) => verifyInput(e)} 
                    />
                    <span className="ErrorField">{MobileErr}</span>
                    <input type="password" name="password" className="input__Field" placeholder="Password" {...bindPassword}
                    // onKeyPress={(e) => verifyInput(e)} 
                    />
                    <span className="ErrorField">{PasswordErr}</span>
                    <input type="password" name="cpassword" className="input__Field" placeholder="Confirm Password" {...bindConfirmPassword}
                    // onKeyPress={(e) => verifyInput(e)} 
                    />
                    <span className="ErrorField">{CPasswordErr}</span>
                    <button className="Login__btn">Sign UP</button>
                </form>

                <div className="Login__social">
                    <span>Sign Up with</span>
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

export default SignUP
