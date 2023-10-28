/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { demoProfilePicture } from "../utils/constants"
import { Link } from "react-router-dom"
import { formatDistanceToNow } from 'date-fns';

function TimeAgo({ date }) {
    return <span>{formatDistanceToNow(date, { addSuffix: true })}</span>;
}
const SearchedVideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const date = new Date(snippet.publishedAt);

    return (
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <div className="searched-video">
                <div className="video-img">
                    <img src={snippet?.thumbnails?.high?.url || demoProfilePicture} alt={snippet?.title} />
                </div>
                <div className="searched-video-info">
                    <div className="video-desc">

                        <span className="video-title">
                            {snippet?.title}
                        </span>
                        <div className="video-views">890 views <div className="dot"></div><TimeAgo date={date} /></div>
                        <div className="searched-video-desc">
                            {snippet?.description}
                        </div>
                        <div className="flex">
                            <div className="video-channel-img">
                                <img src={snippet?.thumbnails?.medium?.url} width={20} height={20} alt={snippet?.title} />
                            </div>
                            <span className="video-channel-title">
                                {snippet?.channelTitle}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatem cum assumenda quo, tempore at quae expedita nihil adipisci? Totam quidem, nam vel sequi pariatur reiciendis consequatur odit consequuntur cupiditate debitis nisi quas ipsa ex officia, quaerat veritatis aperiam odio, itaque aspernatur unde laboriosam minima. Voluptatem corporis culpa illo repudiandae perspiciatis dolorum praesentium minus ducimus sunt illum necessitatibus tempora rerum, voluptates inventore unde dolorem accusamus eum modi sed magni nisi quaerat blanditiis. Delectus unde aliquid ullam nemo harum culpa omnis. Quibusdam, dolores deserunt doloribus commodi at aut magnam natus. Sequi repellat odit mollitia doloribus ducimus quos blanditiis beatae dolor animi? */}
            </div>
        </Link>
    )
}

export default SearchedVideoCard