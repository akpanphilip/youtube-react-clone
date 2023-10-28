import { fejobabatv, emmasings, javascriptMastery, timGodfrey } from "../utils/constants"
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="side-ins">
                <div className="sidebar-in">
                    <Link to="/">
                        <span className="sidebar-link ">
                            <i className="ri-home-3-line"></i>
                            Home
                        </span>
                    </Link>
                    <span className="sidebar-link">
                        <i className="ri-links-fill"></i>
                        Shorts
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-archive-2-line"></i>
                        Subscriptions
                    </span>
                </div>
                <div className="sidebar-in">
                    <span className="sidebar-link">
                        <i className="ri-scissors-line"></i>
                        Your clips
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-history-line"></i>
                        History
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-video-line"></i>
                        Your Videos
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-time-line"></i>
                        Watch Later
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-download-line"></i>
                        Downloads
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-thumb-up-line"></i>
                        Liked Videos
                    </span>
                </div>
                <div className="sidebar-in">
                    <div className="title-sidebar-in">Subscriptions</div>
                    <div className="subscribed-item">
                        <div className="subscribed-channel-img">
                            <img src={fejobabatv} alt="" />
                        </div>
                        <span className="subscribed-channel">FEJOSBABA TV</span>
                        <span className="subscribed-icon"></span>
                    </div>
                    <div className="subscribed-item">
                        <div className="subscribed-channel-img">
                            <img src={javascriptMastery} alt="" />
                        </div>
                        <span className="subscribed-channel">JavaScript Mastery</span>
                        <span className="subscribed-icon"></span>
                    </div>
                    <div className="subscribed-item">
                        <div className="subscribed-channel-img">
                            <img src={timGodfrey} alt="" />
                        </div>
                        <span className="subscribed-channel">TimGodfreyWorld</span>
                        <span className="subscribed-icon"></span>
                    </div>
                    <div className="subscribed-item">
                        <div className="subscribed-channel-img">
                            <img src={emmasings} alt="" />
                        </div>
                        <span className="subscribed-channel">Emmasings</span>
                        <span className="subscribed-icon"></span>
                    </div>
                </div>
                <div className="sidebar-in">
                    <div className="title-sidebar-in">Explore</div>
                    <span className="sidebar-link ">
                        <i className="ri-fire-line"></i>
                        Trending
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-music-line"></i>
                        Music
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-gamepad-line"></i>
                        Gaming
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-article-line"></i>
                        News
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-trophy-line"></i>
                        Sports
                    </span>
                </div>
                {/* <div className="sidebar-in">
                    <div className="title-sidebar-in">More from YouTube</div>
                    <span className="sidebar-link ">
                        <i className="ri-home-3-line"></i>
                        YouTube Premium
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-home-3-line"></i>
                        YouTUbe Studio
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-home-3-line"></i>
                        YouTube Music
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-home-3-line"></i>
                        YouTube Kids
                    </span>
                </div> */}
                <div className="sidebar-in">
                    <span className="sidebar-link ">
                        <i className="ri-settings-3-line"></i>
                        Settings
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-flag-line"></i>
                        Report History
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-question-line"></i>
                        Help
                    </span>
                    <span className="sidebar-link">
                        <i className="ri-feedback-line"></i>
                        Send Feedback
                    </span>
                </div>
                <div className="sidebar-in">
                    <span className="about-info">
                        Philddev 2023
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Sidebar