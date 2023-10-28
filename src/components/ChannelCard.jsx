import { demoThumbnailUrl, demoVideoTitle, demoChannelTitle } from "../utils/constants";
import { Link } from "react-router-dom";
const ChannelCard = (channelDetail) => {
    return (
        <div className="video">
            <Link to={`/video/cV2gBU6hKfY`}>
                <div className="video-img">
                    <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={channelDetail?.snippet?.title} />
                </div>
            </Link>
            <div className="video-info">
                <div className="video-channel-img">
                    <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="" />
                </div>
                <div className="video-desc">
                    <span className="video-title">
                        {channelDetail?.snippet?.title || demoVideoTitle}
                    </span>
                    <span className="video-channel-title">
                        {channelDetail?.snippet?.title || demoChannelTitle}
                        {/* {snippet?.channelTitle} */}
                    </span>
                    <div className="video-views">870 views</div>
                </div>
            </div>
        </div>


    )
}

export default ChannelCard