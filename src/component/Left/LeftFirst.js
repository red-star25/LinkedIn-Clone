import React from 'react'
import "./LeftFirst.css"
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Link } from 'react-router-dom';

function LeftFirst() {
    return (
        <div className="leftFirst">
                <Link style={{textDecoration:"none"}} to="/profile">
                <div className="leftFirst__profile">
                    <div className="leftFirst__banner"></div>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGy465hYj6qxQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=m4qHAr0m8AB_NgyWNdT7gv27A57ftPLHIZEAsj7ZLec" className="leftFirst__profileImg" alt=""/>
                    
                    <h4>Dhruv Nakum</h4>
                    <p>Flutter Developer | Dart | Firebase & Web | React | Javascript | Python</p>
                    
                    <div style={{height:"20px"}}></div>
                </div>
                </Link>
            <div className="leftFirst__feed">
                    <div className="feed__first">
                        <div className="first__left">
                            <div className="primary">
                                <span>Connections</span>
                            </div>
                            <div className="secondary">
                                <span>Grow your network</span>
                            </div>
                        </div>
                        <div className="first__right">
                            <span>
                                96
                            </span>
                        </div>
                    </div>
                    <div className="feed__second">
                        <span>Who viewed your profile</span>
                        <p>78</p>
                    </div>
                    <div className="feed__third">
                        <span>Access exclusive tools & insights</span>
                        <p>Try Premium Free for 1 Month</p>
                    </div>
            </div>
            <div className="leftFirst__savedItem">
                <div className="content">
                <BookmarkBorderIcon/>
                <p>Saved items</p>
                </div>
            </div>
        </div>
    )
}

export default LeftFirst
