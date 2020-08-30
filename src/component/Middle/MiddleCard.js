import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./MiddleCard.css"
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ReplyIcon from '@material-ui/icons/Reply';

function MiddleCard({isLiked, logo,ownerName,content,image}) {
    return (
        <div className="middleCard">
            {isLiked?(<div className="middleCard__wholiked">
                <div className="name">
                    <span>Dennis Tank</span>
                    <p>likes this</p>
                </div>
                <div className="more">
                    <MoreHorizIcon/>
                </div>
            </div>):(null)}
            <div className="divider"></div>
            <div className="middleCard__mainContent">
                <div className="mainContent__header">
                    <img className="header__logo" src={logo} alt=""/>
                    <div className="header__info">
                        <h4>{ownerName}</h4>
                        <p>1,233,352 followers</p>
                        <p>23h • 🌐</p>
                    </div>
                </div>
                <div className="postContent">
                        <p>{content}</p>
                </div>
                <div className="postMedia">
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="divider"></div>
            <div className="middleCard__likes">
                <img className="likes__image" src="https://socialmediaweek.org/wp-content/blogs.dir/1/files/linkedinlikes.jpg" alt=""/>
                <p>1,747 • 47 Comments</p>
            </div>
            <div className="divider"></div>
            <div className="middleCard__bottomIcons">
                <div className="like">
                <ThumbUpAltOutlinedIcon/>
                <p>Like</p>
                </div>
                <div className="comment">
                <CommentOutlinedIcon/>
                <p>Comment</p>
                </div>
                <div className="reply">
                <ReplyIcon/>
                <p>Share</p>
                </div>
                
            </div>
        </div>
    )
}

export default MiddleCard
