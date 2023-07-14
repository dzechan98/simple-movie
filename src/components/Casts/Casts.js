import { apiConfig } from "../../api/ApiConfig";
import "./Casts.scss";

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
function Casts({ id }) {
    const [casts, setCasts] = useState([]);
    const url = `${apiConfig.baseUrl}${id}/credits?api_key=${apiConfig.apiKey}`;
    useFetch(url, setCasts);

    return (
        <div className="casts">
            <h2 className="casts-title">Casts</h2>
            <div className="casts-list">
                {casts.length > 0 &&
                    casts.splice(0, 5).map((item) => (
                        <div className="cast-info" key={item.id}>
                            <img
                                src={`${apiConfig.w500Image}${item?.profile_path}`}
                                alt=""
                            />
                            <h3>{item?.name}</h3>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Casts;
