import React from 'react'
import "./Home.css"
import LeftFirst from './component/Left/LeftFirst'
import LeftSecond from "./component/Left/LeftSecond"
import Header from './Header'
import SharePost from "./component/Middle/SharePost"
import MiddleCard from "./component/Middle/MiddleCard"
import RightTop from "./component/Right/RightTop"
import RightBottom from "./component/Right/RightBottom"
import RightNav from './component/Right/RightNav'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <Header/>
            </div>
            <div style={{minHeight:"16px",padding:"16px 0"}}></div>
            <div className="home__body">
                <div className="home__left">
                    <div className="home__leftFirst">
                        <LeftFirst/>
                    </div>
                    <div className="home__leftSecond">
                        <LeftSecond/>
                    </div>
                </div>
            <div className="home__middle">
                <div className="home__middleSharePost">
                    <SharePost/>
                </div>
                <div className="home__middleDivider"></div>
                <div className="home__middleCard">
                    <MiddleCard
                        isLiked={true}
                        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/737px-Warner_Bros_logo.svg.png"
                        ownerName="Warner Bros. Entertainment"
                        content="The new era of Wonder Woman begins here. #WW84 only in theaters."
                        image="https://i.ytimg.com/vi/XW2E2Fnh52w/maxresdefault.jpg"
                    />
                </div>
                <div className="home__middleCard">
                <MiddleCard
                    isLiked={false}
                        logo="https://media-exp1.licdn.com/dms/image/C510BAQFiLyPRawarKg/company-logo_100_100/0?e=1606348800&v=beta&t=5j41bRC8mh0pFBiwpH9r8yY7lqpEHd_GqQ1N1aW04TU"
                        ownerName="Flutter Devs"
                        content="Stateful & Stateless: A Doubt Clearing Session : Article By Shivanchal Pandey"
                        image="https://media-exp1.licdn.com/dms/image/sync/C4E27AQFNpyQ9k2HqUQ/articleshare-shrink_800/0?e=1598641200&v=beta&t=l0YRBJJCUSvFqomr8A_DzkAznHVislRLlyFfZrxkkYo"
                />
                </div>
                <div className="home__middleCard">
                <MiddleCard
                    logo="https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_100_100/0?e=1606348800&v=beta&t=VACSzL2Fqutjdvdw1pNfd-H1pcGeJ0QiIheb-_svYwA"
                    ownerName="Microsoft"
                    content="Today we're celebrating the 25th Birthday of Windows 95! It was the first operating system to be named after the year it was launched (1995) and introduced the iconic start button. "
                    image="https://media-exp1.licdn.com/dms/image/C4D22AQE55Oct0pPuXg/feedshare-shrink_800/0?e=1601510400&v=beta&t=uY8ZQubFXIjlFtfSJhkTE4XCsgQjFHnSPWWv24MyzXo"
                />
                </div>
            </div>
            <div className="home__right">
                <div className="home__rightTop">
                    <RightTop/>
                </div>
                <div className="home__rightBottom">
                    <RightBottom/>
                </div>
                <div className="home__rightNav">
                    <RightNav/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
