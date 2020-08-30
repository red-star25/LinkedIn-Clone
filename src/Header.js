import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png" alt=""/>
                <div className="header__search">
                    <SearchIcon fontSize="small"/>
                    <input placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__linkIcons">
                        <div className="linkIcon">
                            <HomeIcon/>
                            <p>Home</p>
                        </div>
                        <div className="linkIcon">
                            <PeopleOutlineIcon/>
                            <p>My Network</p>
                        </div>
                        <div className="linkIcon">
                            <WorkOutlineIcon/>
                            <p>Jobs</p>
                        </div>
                        <div className="linkIcon">
                            <QuestionAnswerIcon/>
                            <p>Messaging</p>
                        </div>
                        <div className="linkIcon">
                            <NotificationsNoneIcon/>
                            <p>Notifications</p>
                        </div>
                        <div className="linkIcon">
                            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGy465hYj6qxQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=m4qHAr0m8AB_NgyWNdT7gv27A57ftPLHIZEAsj7ZLec" className="my__image" alt=""/>
                            <p>Me</p>
                        </div>
                        <div className="empty"></div>
                    <div className="header__more">
                        <div className="linkIcon">
                        <AppsIcon/>
                        <p>Work</p>
                        </div>
                        <p>Try Premium Free for 1 Month</p>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Header
