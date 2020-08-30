import React from 'react'
import "./ActivityCard.css"

function ActivityCard({img,title}) {
    return (
        <div className="activityCard">
            <img src={img} alt=""/>
            <div className="info">
                <p className="title">{title}</p>
                <p className="whoShared">Dhruv shared this</p>
                <p className="reactions">50 Reactions • 20 comment</p>
            </div>
        </div>
    )
}

export default ActivityCard
