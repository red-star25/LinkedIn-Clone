import React from 'react'
import Header from "./Header"
import ProfileLeft from './component/Profile/ProfileLeft'
import ProfileRight from './component/Profile/ProfileRight'
import "./Profile.css"

function Profile() {
    return (
        <div className="profile">
            <div className="profile__header">
                <Header/>
            </div>
            <div className="profile__body">
            <div className="profile__left">
                <ProfileLeft/>
            </div>
            <div className="profile__right">
                <ProfileRight/>
            </div>
            </div>
        </div>
    )
}

export default Profile
