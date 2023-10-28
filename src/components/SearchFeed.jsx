import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Sidebar } from "./Index";
import SearchedLayout from "./SearchedLayout";


const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (

        <div className="feed-section">
            <Sidebar />
            <div className="videos">
                <div className="videos-list grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
                    <SearchedLayout videos={videos} />
                </div>
            </div>
        </div>
    )
}

export default SearchFeed