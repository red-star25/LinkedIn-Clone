import React from 'react'
import "./LeftSecond.css"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function LeftSecond() {
    return (
        <div className="leftSecond">
            <div className="leftSecond__recent">
                <p>Recent</p>
                <span> <AlternateEmailIcon fontSize="small"/> Flutter Developer Community</span>
                <span> <AlternateEmailIcon fontSize="small"/> Worldwide Flutter - WWF</span>
            </div>
            <div className="leftSecond__groups">
                <p>Groups</p>
                <span> <AlternateEmailIcon fontSize="small"/>Flutter Developer Community</span>
                <span> <AlternateEmailIcon fontSize="small"/>Worldwide Flutter - WWF</span>
            </div>
            <div className="leftSecond__groups">
                <p>Followed Hashtag</p>
                <span># flutter</span>
                <span># react</span>
                <span># python</span>
            </div>
        </div>
    )
}

export default LeftSecond
