import "./MovieList.scss";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function MovieList({ type, similar, id, grid, query = "" }) {
    const [movieList, setMoviList] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&page=${page}`;
        if (similar) {
            url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4e44d9029b1270a757cddc766a1bcb63`;
        } else if (query !== "") {
            url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`;
        }
        const getMovieList = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            if (query !== "") {
                setMoviList(data.results);
            } else setMoviList([...movieList, ...data.results]);
        };

        getMovieList(url);
    }, [page, query]);

    let movieTitle = type;
    if (type === "top_rated") {
        movieTitle = "top rated";
    } else if (type === "now_playing") {
        movieTitle = "now playing";
    } else if (similar) {
        movieTitle = "similar";
    }

    const handleClickLoadMore = () => {
        setPage(page + 1);
    };
    return (
        <div className="movie__list container">
            <div className="movie-top">
                {!grid ? (
                    <>
                        <h2 className="list__title">
                            {movieTitle.toUpperCase() + " MOVIES"}
                        </h2>
                        <Link to={`/movies`}>
                            <Button className="bg-black button">
                                View More
                            </Button>
                        </Link>
                    </>
                ) : (
                    ""
                )}
            </div>
            <div className="list__cards">
                {grid ? (
                    <>
                        <div className="list__cards-grid">
                            {movieList.length > 0 &&
                                movieList.map((movie) => (
                                    <Card key={movie.id} movie={movie} />
                                ))}
                        </div>
                        <div className="loadmore">
                            {!(query.length > 0) && (
                                <Button
                                    className="button btn-load"
                                    onClick={handleClickLoadMore}
                                >
                                    Load More
                                </Button>
                            )}
                        </div>
                    </>
                ) : (
                    <Swiper
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={"auto"}
                    >
                        {movieList.length > 0 &&
                            movieList.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <Card movie={movie} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default MovieList;
