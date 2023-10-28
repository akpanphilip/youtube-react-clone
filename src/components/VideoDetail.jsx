/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Videos } from "./Index";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { demoProfilePicture } from "../utils/constants"
import { DefaultIcon } from "../assets/Icons";
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ date }) {
    return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}
const VideoDetail = () => {

    const [videoDetail, setVideoDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))
    }, [id]);

    if (!videoDetail?.snippet) return <p>Loading...</p>;
    const { snippet: { title, description, publishedAt, channelTitle }, statistics: { viewCount, likeCount, commentCount, favoriteCount } } = videoDetail;
    // console.log(videoDetail);
    const date = new Date(publishedAt);
    const likes = likeCount;
    return (
        <div className="video-detail-section">
            <div className="video-detail">
                <div className="video-detail-thumbail">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" playing={true} controls />
                </div>
                <div className="video-detail-title pt-2 pb-2">
                    {title}
                </div>
                <div className="video-detail-inner-info">
                    <div className="flex align-middle">
                        <div className="channel-detail-img">
                            <img src={demoProfilePicture} />
                        </div>
                        <div className="chann-wrap">
                            <div className="chann-title">
                                <span>{channelTitle}</span>
                            </div>
                            <div className="subscibers">104k subscribers</div>
                        </div>
                        <button className="subscribe">Subscribe</button>
                    </div>

                    <div className="flex align-middle">
                        <div className="wrap-reactions">
                            <span className="bdr">
                                <i className="ri-thumb-up-line"></i>
                                {formatNumber(likes)}
                            </span>
                            <span>
                                <i className="ri-thumb-down-line"></i>
                            </span>
                        </div>
                        <div className="wrap-reactions">
                            <span>
                                <i className="ri-share-forward-line"></i>
                                Share
                            </span>
                        </div>
                        <div className="wrap-reactions">
                            <span>
                                <i className="ri-download-line"></i>
                                Download
                            </span>
                        </div>
                    </div>
                </div>
                <div className="video-detail-desc">
                    <span className="views-count"> {formatNumber(viewCount)} views</span> <span className="views-count"><TimeAgo date={date} /></span> <br />
                    {description}
                </div>


            </div>


            {/* <div className="related-videos">
                <div className="related-video">
                    <div className="related-video-thumbail"></div>
                    <div className="related-video-info">
                        <span className="related-video-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nihil!</span>
                        <span className="related-video-channel">Lorem ipsum dolor sit.</span>
                        <div className="related-video-views">89 views <div className="dot"></div> 3 days ago</div>
                    </div>
                </div>
                <div className="related-video">
                    <div className="related-video-thumbail"></div>
                    <div className="related-video-info">
                        <span className="related-video-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nihil!</span>
                        <span className="related-video-channel">Lorem ipsum dolor sit.</span>
                        <div className="related-video-views">89 views <div className="dot"></div> 3 days ago</div>
                    </div>
                </div>
                <div className="related-video">
                    <div className="related-video-thumbail"></div>
                    <div className="related-video-info">
                        <span className="related-video-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nihil!</span>
                        <span className="related-video-channel">Lorem ipsum dolor sit.</span>
                        <div className="related-video-views">89 views <div className="dot"></div> 3 days ago</div>
                    </div>
                </div>
                <div className="related-video">
                    <div className="related-video-thumbail"></div>
                    <div className="related-video-info">
                        <span className="related-video-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nihil!</span>
                        <span className="related-video-channel">Lorem ipsum dolor sit.</span>
                        <div className="related-video-views">89 views <div className="dot"></div> 3 days ago</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default VideoDetail