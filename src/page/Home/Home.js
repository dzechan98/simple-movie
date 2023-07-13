import "./Home.scss";

import Poster from "../../components/Poster/Poster";
import MovieList from "../../components/MovieList/MovieList";
function Home() {
    return (
        <>
            <Poster />
            <MovieList type="popular" />
            <MovieList type="top_rated" />
            <MovieList type="now_playing" />
        </>
    );
}

export default Home;
