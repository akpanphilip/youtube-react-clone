import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos"
import Categories from "./Categories";
const VideoLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div className="videos">
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className="videos-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <Videos videos={videos} />
            </div>
        </div>
    )
}

export default VideoLayout