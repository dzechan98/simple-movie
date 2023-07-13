import "./Movies.scss";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Search from "../../components/Search/Search";
import Banner from "../../components/Banner/Banner";
function Movies() {
    const [query, setQuery] = useState("");
    console.log(query);
    return (
        <div className="movies-page">
            <Banner></Banner>
            <Search setQuery={setQuery}></Search>
            <MovieList type={"popular"} grid query={query} />
        </div>
    );
}

export default Movies;
