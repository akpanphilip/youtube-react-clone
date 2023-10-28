/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { userImg } from "../utils/constants"
import { Link } from "react-router-dom"
import { demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { formatDistanceToNow } from 'date-fns';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function TimeAgo({ date }) {
    return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const date = new Date(snippet.publishedAt);
    return (
        <div className="video">
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                <div className="video-img">
                    <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} />
                </div>
            </Link>
            <div className="video-info">
                <div className="video-channel-img">
                    <img src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl} alt={snippet?.title} />
                </div>
                <div className="video-desc">
                    <span className="video-title">
                        {snippet?.title || demoVideoTitle}
                    </span>
                    <span className="video-channel-title">
                        {snippet?.channelTitle || demoChannelTitle}
                    </span>
                    <div className="video-views">870 views <div className="dot"></div><TimeAgo date={date} /></div>
                </div>
            </div>
        </div>
    )
}
export default VideoCard