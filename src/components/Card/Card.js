import "./Card.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { apiConfig } from "../../api/ApiConfig";
function Card({ movie }) {
    return (
        <>
            <Link to={`/movie/${movie.id}`}>
                <div
                    className="card"
                    style={{
                        backgroundImage: `url('${apiConfig.w500Image}${movie.poster_path}')`,
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
