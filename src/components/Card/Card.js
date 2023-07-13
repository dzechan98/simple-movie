import "./Card.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
function Card({ movie }) {
    return (
        <>
            <Link to={`/movie/${movie.id}`}>
                <div
                    className="card"
                    style={{
                        backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
                    }}
                >
                    <div className="card__overlay">
                        <Button className="button">
                            <i className="fa-solid fa-play"></i>
                        </Button>
                    </div>
                </div>
                <p className="card-title">{movie.title}</p>
            </Link>
        </>
    );
}

export default Card;
