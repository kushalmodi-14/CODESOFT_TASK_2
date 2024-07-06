// import React from 'react'
import { useNavigate } from 'react-router-dom'
import './../App.css'
import { auth, provider } from '../firebase-congif.js'
import {signInWithPopup } from 'firebase/auth'

export const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const signInWithGoogle = ()=>{
        signInWithPopup(auth , provider).then(()=>{
            localStorage.setItem("isAuth",true)
            setIsAuth(true);
            navigate("/")
        })
    }

  return (
    <div className='loginPage'>
        <p>Sign in With Google To Continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
            Sign In Google
        </button>

    </div>
  )
}
