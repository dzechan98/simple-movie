import "./Similar.scss";
import { useParams } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
function Similar() {
    const { id } = useParams();

    return <MovieList similar="similar" id={id} />;
}

export default Similar;
