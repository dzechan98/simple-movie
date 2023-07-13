import "./Search.scss";
import { useState } from "react";
import Button from "../Button/Button";
function Search({ setQuery }) {
    const [value, setValue] = useState("");
    const handleSearch = () => {
        setQuery(value);
    };
    return (
        <div className="container">
            <div className="search-input">
                <input
                    type="text"
                    placeholder="Enter Keyword"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button className="button button-search" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
}

export default Search;
