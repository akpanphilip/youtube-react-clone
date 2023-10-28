/* eslint-disable react/prop-types */
import { VideoCard, ChannelCard } from "./Index"
// import LoadingSkeleton from "./LoadingSkeleton"
import LoadingSkeleton from "./LoadingSkeleton";
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Videos = ({ videos }) => {
    if (!videos.length) return <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
    </SkeletonTheme>;
    // console.log(videos);
    return (
        <>
            {videos.map((item, idx) => (
                <div key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </div>
            ))}
        </>
    )
}

export default Videos