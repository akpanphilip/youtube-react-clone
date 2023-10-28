import { logo } from '../utils/constants'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from "../utils/constants"

const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center">
            <Link to="/">
                <div className="logo-section">
                    <span className="bars">
                        {/* <BarsIcon /> */}
                        <i className="ri-menu-line"></i>
                    </span>
                    <img src={logo} className='logo' alt="" />
                    <span className="logo-text">YouTube <span className="logo-country-text">ng</span></span>
                </div>
            </Link>
            <SearchBox />
            <div className="info-right-pane flex items-center">
                <i className="ri-video-add-line d-none"></i>
                <div className="notification-section d-none">
                    <i className='ri-notification-4-line'></i>
                    <span className="notifications">9+</span>
                </div>
                <div className="user">
                    <img src={demoProfilePicture} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar