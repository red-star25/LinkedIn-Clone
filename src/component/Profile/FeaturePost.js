import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import "./FeaturePost.css"

function FeaturePost({title,img,like}) {
    return (
        <div className="feature__post">
            <p>{title}</p>
            <img src={img} alt=""/>
            <div className="like">
            <ThumbUpIcon/>
            <p>{like}</p>
            </div>
        </div>
    )
}

export default FeaturePost
