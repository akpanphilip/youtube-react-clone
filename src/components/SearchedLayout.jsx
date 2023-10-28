/* eslint-disable react/prop-types */
import { SearchedVideoCard } from "./Index";
import LoadingSkeleton from "./LoadingSkeleton";
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const SearchedLayout = ({ videos }) => {
    if (!videos.length) return <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <LoadingSkeleton />
    <LoadingSkeleton />
    <LoadingSkeleton />
    <LoadingSkeleton />
    <LoadingSkeleton />
    <LoadingSkeleton />
</SkeletonTheme>;

    return (
        <div>
            {videos.map((item, idx) => (
                <div key={idx}>
                    {item.id.videoId && <SearchedVideoCard video={item} />}
                </div>
            ))}
        </div>
    )
}

export default SearchedLayout