import React from 'react'
import "./RightNav.css"


function RightNav() {
    return (
        <div className='nav'>
            <div className="divider"></div>
            <div className="nav__text">
            <div className="nav__text1">
                <p>About</p>
                <p>Accessibility</p>
                <p>Help Center</p>
            </div>
            <div className="nav__text2">
                <p>Privacy & Terms</p>
                <p>Ad Choices</p>
                <p>Advertising</p>
            </div>
            <div className="nav__text3">
                <p>Business</p>
                <p>Get the LinkedIn App</p>
            </div>
            <div className="nav__text4">
                
            </div>
            </div>
            <div className="logo__text">
                <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt=""/>
                <p>LinkedIn Corporation 2020</p>
            </div>
        </div>
    )
}



export default RightNav
