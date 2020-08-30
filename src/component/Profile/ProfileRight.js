import React from 'react'
import "./ProfileRight.css"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RightBottom from "../Right/RightBottom"
import "../Right/RightBottom.css"

function ProfileRight() {
    return (
        <div className="profileRight">
            <div className="profileEdit">
                <p>Edit public profile & URL</p>
                <HelpOutlineIcon/>
            </div>
            <div className="divider"></div>
            <div className="profileInAnotherLanguage">
                <p>Add profile in another language</p>
                <HelpOutlineIcon/>
            </div>
            <div className="profile__profileView">
                <RightBottom/>
            </div>
        </div>
    )
}

export default ProfileRight
