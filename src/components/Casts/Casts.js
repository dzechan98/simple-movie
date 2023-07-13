import { apiConfig } from "../../api/ApiConfig";
import "./Casts.scss";

import { useState, useEffect } from "react";
function Casts({ id }) {
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const url = `${apiConfig.baseUrl}${id}/credits?api_key=${apiConfig.apiKey}`;
        const getCasts = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                setCasts(data.cast ?? []);
            } catch (error) {
                console.log(error);
            }
        };
        getCasts(url);
    }, []);

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
