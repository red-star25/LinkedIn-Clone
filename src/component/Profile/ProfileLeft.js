import React from 'react'
import "./ProfileLeft.css"
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FeaturePost from './FeaturePost';
import ActivityCard from "../Profile/ActivityCard"
import Interest from './Interest';

function ProfileLeft() {
    return (
        <div className="profileLeft">
            <div className="profileInfo">
                    <div className="profileInfo__img">
                        <img className="userBackground" src="https://static-exp1.licdn.com/sc/h/5qi38njir9vsm46ync2qjvrrs" alt=""/>
                        <div className="userImageSection">
                            <img className="userImg" src="https://media-exp1.licdn.com/dms/image/C4D03AQGy465hYj6qxQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=m4qHAr0m8AB_NgyWNdT7gv27A57ftPLHIZEAsj7ZLec" alt=""/>
                            <div className="button">
                                <button className="button__blue">Add progile section ▽</button>
                                <button className="button__grey">More...</button>
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                <div className="profileInfo__userInfo">
                        <p className="userName">Dhruv Nakum</p>
                        <span className="userAbility">Flutter Developer | Firebase & Web | React | Javascript | Python</span>
                        <div className="user__locationInfo">
                            <span className="location">Ahmedabad, Gujarat, India</span>
                            <span>•</span>
                            <p>103 connections</p>
                            <span>•</span>
                            <p>Contact info</p>
                        </div>
                </div>
            </div>
            <div className="profileAbout">
                <div className="about__TopHeader">
                    <p>About</p>
                    <EditIcon/>
                </div>
                <div className="about__Content">
                <p>★ Experience in Flutter App Development.</p>
                <p>★ Experience with Dart/React/C/JavaScript/Java/Python.</p>
                <p>★ Experience launching and managing Production mobile apps.</p>
                <p>★ Experience of making applications for platforms like Android , iOS and Web.</p>
                <p>★ Proficient in programming skills including Object-Oriented Programming, Data Structures, etc.</p>
                <p>★ Experience developing integrations with common APIs (e.g., Firebase, Facebook login, Google login, etc.)</p>
                <p>★ Published many application on Google Play Store.</p>
                <p>★ Experience in Web Development with React framework. HTML, CSS , JavaScript, Bootstrap, Node.js,MongoDB . </p>
                </div>
            </div>
            <div className="profileFeatured">
                <div className="feature__header">
                    <div className="feature__headerLeft">
                        <p>Featured</p>
                    </div>
                    <div className="feature__headerRight">
                    <p>See All</p>
                    <div className="icon__arrow">
                    <KeyboardArrowLeftIcon/>
                    <KeyboardArrowRightIcon/>
                    </div>
                    <div className="icon__blue">
                    <AddIcon style={{marginRight:"10px"}}/>
                    <EditIcon />
                    </div>
                    </div>
                </div>
                <div className="feature__body">
                    <FeaturePost title="🔥🔥Google Clone using🚀 React.js🔥🔥" img="https://media-exp1.licdn.com/dms/image/C4D22AQFa8yuZuCVDeg/feedshare-shrink_2048_1536/0?e=1601510400&v=beta&t=I5tksJkQZTCd715cR4ptv1jV_lGyfcHRel2W7i0sPds" like="13"/>
                    <FeaturePost title="Netflix Clone using React.js🤩" img="https://media-exp1.licdn.com/dms/image/C4D22AQGi4EfTIIBZMQ/feedshare-shrink_480/0?e=1601510400&v=beta&t=ONzWBw0X1okVuZGTNzs_hykm9ORqMbX1GCnMCtA4K2Q" like="8"/>
                    <FeaturePost title="Made Responsive Portfolio Website using" img="https://media-exp1.licdn.com/dms/image/C4D05AQGBTZkNQ8D9Fg/videocover-low/0?e=1598547600&v=beta&t=J5gvGoQYPDZGLLVF0fSrTajL-6efBxiHJtA2ozWR-L8" like="47"/>
                </div>
            </div>
            <div className="profileActivity">
                <div className="activity__header">
                    <p>Activity</p>
                    <span>104 followers</span>
                </div>
                <div className="activity__body">
                    <div className="body__left">
                        <ActivityCard
                            img="https://media-exp1.licdn.com/dms/image/C4D22AQFa8yuZuCVDeg/feedshare-shrink_480/0?e=1601510400&v=beta&t=yOOPZwM9FkVOwRKHFnM-rWNBJFwc5vg7jZiZ5ZPONYo"
                            title="🔥🔥Google Clone using 🚀 React.js 🔥🔥"
                        />
                        <ActivityCard
                            img="https://media-exp1.licdn.com/dms/image/C4D05AQEuRRFmQdRWpg/videocover-low/0?e=1598547600&v=beta&t=vlpQD8HtvsUtq5wwcalQLe6m1R9rPy4r8PYXgkNMT24"
                            title="Made an AI News Reader App using #React 🤩"
                        />
                    </div>
                    <div className="body__right">
                        <ActivityCard
                            img="https://media-exp1.licdn.com/dms/image/C4D22AQHsdZKF0PQKkA/feedshare-shrink_160/0?e=1601510400&v=beta&t=Fl-MNrXGii2_W1VILva21SEA9sLP31BB7h7YImeSTcQ"
                            title="Made an Awesome ❤ Spotify Clone 🎶 using #React🚀🔥"
                        />
                        <ActivityCard
                            img="https://media-exp1.licdn.com/dms/image/C4D05AQGBTZkNQ8D9Fg/videocover-low/0?e=1598547600&v=beta&t=J5gvGoQYPDZGLLVF0fSrTajL-6efBxiHJtA2ozWR-L8"
                            title="Made Responsive Portfolio Website using #FlutterWeb 🔥🔥"
                        />
                    </div>
                </div>
                <div className="divider"></div>
                <div className="activity__bottom">
                    <p>See all activity</p>
                </div>
            </div>
            <div className="profileExperience">
                <div className="experience">
                    <div className="experience__left">
                        <p>Experience</p>
                        <div className="experience__info">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHjLseCgV_eYA/company-logo_100_100/0?e=1606348800&v=beta&t=5ifS4m7xfqqsvsVnZeHFt-W8suQgOpsXSJ9HlIiQH0w" alt=""/>
                        <div className="experience__detail">
                                <h4>Flutter Developer</h4>
                                <p>Aecor • Internship</p>
                                <span>Jul 2020 - Present • 2 mos</span>
                                <span>Vadodara, Gujarat, India</span>
                        </div>
                        </div>
                    </div>
                    <div className="experience__right">
                        <AddIcon/>
                        <EditIcon/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="experience">
                    <div className="experience__left">
                        <p>Education</p>
                        <div className="experience__info">
                        <img src="https://static-exp1.licdn.com/sc/h/a11fwqfh6dmk0f8i4uwzyui5a" alt=""/>
                        <div className="experience__detail">
                                        <h4>ITM UNIVERSITY</h4>
                                        <p>BTech - Bachelor of Technology, Computer Science</p>
                                        <span>2018 - 2022</span>
                        </div>
                        </div>
                    </div>
                    <div className="experience__right">
                        <AddIcon/>
                        <EditIcon/>
                    </div>
                </div>
            </div>
            <div className="profileSkills">
                <div className="skillsHeader">
                    <p>Skills & Endorsments</p>
                    <div className="rightHeader">
                        <p>Add new skill</p>
                        <EditIcon/>
                    </div>
                </div>
                <div className="skillsBody">
                <button className="button__grey skillButton">Take skill quiz</button>
                <div className="skillsTitle">
                    <h4>Data Structure</h4>
                    <div className="divider"></div>
                    <h4>Flutter</h4>
                    <div className="divider"></div>
                    <h4>Mobile Application Development</h4>
                    <div className="divider"></div>
                </div>
                <div className="activity__bottom skillBottom">
                    <p>Show more ▽</p>
                </div>

                </div>
            </div>
            <div className="profileAccomp">
                <div className="about__TopHeader">
                    <p>Accomplishments</p>
                    <AddIcon/>
                </div>
                <div className="Accomp__body">
                    <div className="left">
                        <p>5</p>
                    </div>
                    <div className="middle">
                        <p>Project</p>
                        <span>
                        E-Commerce Mobile App For Pharmaceutical Company • Inbrief - A News App • Waller - A Weather App • Workout App Wyck - A Weather App
                        </span>
                    </div>
                    <div className="right">
                        ▽
                    </div>
                </div>
                <div className="divider accomp__divider"></div>
                <div className="Accomp__bottom">
                    <div className="left">
                        <p>3</p>
                    </div>
                    <div className="middle">
                        <p>Languages</p>
                        <span>
                        English • Gujarati • Hindi
                        </span>
                    </div>
                </div>
            </div>
            <div className="profileInterest">
                <div className="about__TopHeader">
                    <p>Interests</p>
                    <AddIcon/>
                </div>
                <div className="interese__body">
                <div className="firstThree">
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C4D07AQEfslnQ90bgAA/group-logo_image-shrink_200x200/0?e=1598634000&v=beta&t=Jx6xGTpOlkPfx7sTR2clzg7TncDibN_Xktn0ndzdihc"
                    title="Worldwide Flutter - WWF"
                    member="11,272 member"
                />
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C5603AQHHUuOSlRVA1w/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=0tjKNxlF9ztmQzPOX0iFGLHgv_n8aiwsH5eqifjADGo"
                    title="Satya Nadella"
                    member="8,232,412 followers"
                />
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0?e=1606348800&v=beta&t=93FRlswix7OHAke9W2XGpmQsbkPAKK8g8NYWf_7F1a0"
                    title="LinkedIn"
                    member="12,737,629 followers"
                />
                </div>
                <div className="secondThree">
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C560BAQE1H3S3iDNY6Q/company-logo_100_100/0?e=1606348800&v=beta&t=NNjx_EL5pKffyWumVbIDvMCRTSB3Pf9mNj-3_O1rwiU"
                    title="Yahoo"
                    member="672,532 followers"
                />
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C560BAQHKYaaP_0TyAQ/company-logo_100_100/0?e=1606348800&v=beta&t=591mcvnQOc6PfgdNJMp-eS5vogBsFuKXbXaCaAg17Oc"
                    title="Intel Corporation"
                    member="2,062,487 followers"
                />
                <Interest
                    img="https://media-exp1.licdn.com/dms/image/C4D0BAQEko6uLz7XylA/company-logo_100_100/0?e=1606348800&v=beta&t=VACSzL2Fqutjdvdw1pNfd-H1pcGeJ0QiIheb-_svYwA"
                    title="Microsoft"
                    member="12,235,572 followers"
                />
                </div>
                </div>
                <div className="divider"></div>
                <div className="activity__bottom skillBottom">
                    <p>See all ▽</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileLeft