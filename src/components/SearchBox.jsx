import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-section">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-box" placeholder='Search' />
            <div className="search-icon">
                <button className="search-btn" type="submit" onClick={handleSubmit}>
                    <i className="ri-search-2-line"></i>
                </button>
            </div>
            <div className="search-voice d-none">
                <i className="ri-mic-fill"></i>
            </div>
        </form>
    )
}

export default SearchBox