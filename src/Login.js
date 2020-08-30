import React from 'react'
import { loginUrl } from './linkedin'

function Login() {


    return (
        <div className="login">
            <img className="login__img" src="https://www.cbronline.com/wp-content/uploads/2016/06/linkedin.jpg" alt=""/>
            <a href={loginUrl} className="login__button">Login With LinkedIn</a>
        </div>
    )
}

export default Login
