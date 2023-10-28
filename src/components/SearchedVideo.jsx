/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const SearchedVideo = ({videos}) => {
    if (!videos.length) return <p>Loading...</p>;
    
    return (
        <div className="searchedVideo grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-blue-200">1</div>
            <div className="w-full md:w-1/2 lg:w-2/3 bg-green-200">222</div>
        </div>
    )
}

export default SearchedVideo