import "./DetailMovie.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import Casts from "../../components/Casts/Casts";
import Videos from "../../components/Videos/Videos";
import Similar from "../../components/Similar/Similar";
import { apiConfig } from "../../api/ApiConfig";
import { useFetch } from "../../hooks/useFetch";
function DetailMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isTablet, setIsTablet] = useState(
        window.innerWidth > 1023 ? false : true
    );
    const url = ` ${apiConfig.baseUrl}${id}?api_key=${apiConfig.apiKey}`;
    useFetch(url, setMovie);

    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth > 900 ? false : true);
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="DetailMovie">
            {Object.keys(movie).length > 0 && (
                <>
                    <div
                        className="movie__banner"
                        style={{
                            backgroundImage: `url("${apiConfig.orginalImage}${movie?.backdrop_path}")`,
                        }}
                    ></div>
                    <div className="movie__poster">
                        <div className="wrapper">
                            <img
                                className="movie__poster-img"
                                src={`${apiConfig.w500Image}${movie?.poster_path}`}
                                alt=""
                            />
                            <div className="movie__poster__content">
                                <h2 className="movie__poster__content-title">
                                    {movie?.original_title}
                                </h2>
                                <div className="genres">
                                    {movie?.genres.map((item) => (
                                        <Button
                                            key={item.id}
                                            className="button bg-black no-hover"
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                </div>
                                <p className="movie__poster__content-description">
                                    {movie?.overview}
                                </p>
                                {!isTablet && (
                                    <div className="casts">
                                        <Casts id={movie?.id} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {isTablet && (
                        <div className="casts mb-10 container">
                            <Casts id={movie?.id} />
                        </div>
                    )}
                    {isTablet ? (
                        <Videos className="video-tablet" />
                    ) : (
                        <Videos />
                    )}

                    <Similar />
                </>
            )}
        </div>
    );
}

export default DetailMovie;
