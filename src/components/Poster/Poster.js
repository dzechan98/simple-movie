import "./Poster.scss";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { apiConfig } from "../../api/ApiConfig";

function Poster() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const url = `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiKey}`;
        const getMovies = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results ?? []);
        };

        getMovies(url);
    }, []);
    console.log(movies);
    return (
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <Link
                            to={`/movie/${movie.id}`}
                            key={movie.id}
                            className="poster-link"
                        >
                            <div
                                className="poster__img"
                                style={{
                                    backgroundImage: `url('${apiConfig.orginalImage}${movie.backdrop_path}')`,
                                }}
                            >
                                <div className="container ">
                                    <h2 className="poster__img-title">
                                        {movie.original_title}
                                    </h2>

                                    <div className="poster__img-runtime">
                                        <span>{movie.release_date}</span>
                                        <span>
                                            {movie.vote_average}
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <p className="poster__img-description">
                                        {movie.overview.slice(0, 350) + "..."}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </Carousel>
        </div>
    );
}

export default Poster;
