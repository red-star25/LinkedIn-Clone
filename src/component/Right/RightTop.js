import React from 'react'
import "./RightTop.css"
import InfoIcon from '@material-ui/icons/Info';

function RightTop() {
    return (
        <div className="rightTop">
            <div className="rightTop__headLine">
                <p>Today's news and views</p>
                <InfoIcon/>
            </div>
            <ul className="rightTop__news-views">
                <div className="news__div">
                <li className="news__viewTitle">
                    <div className="titleText">
                        <span className="bullet"></span>
                        <p>Liquor firms focus on smaller packs</p>
                    </div>
                    <span className="time">1h ago</span>
                </li>
                </div>
                <li className="news__viewTitle">
                    <div className="titleText">
                        <span className="bullet"></span>
                        <p>Are you oversharing on your CV?</p>
                    </div>
                    <span className="time">1h ago</span>
                </li>
                <li className="news__viewTitle">
                    <div className="titleText">
                        <span className="bullet"></span>
                       <p>India's cleanest cities are....</p>
                    </div>
                    <span className="time">1h ago</span>
                </li>
                <li className="news__viewTitle">
                    <div className="titleText">
                        <span className="bullet"></span>
                       <p>Tatas to take on Jio,Amazon</p>
                    </div>
                    <span className="time">1h ago</span>
                </li>
                <li className="news__viewTitle">
                    <div className="titleText">
                        <span className="bullet"></span>
                        <p>How to stay forever employable</p>
                    </div>
                    <span className="time">1h ago</span>
                </li>
            </ul>
            <div className="rightTop__showMore">
                <p>Show more ▽</p>
            </div>
        </div>
    )
}

export default RightTop
