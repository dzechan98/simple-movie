import "./Videos.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { apiConfig } from "../../api/ApiConfig";
import { useFetch } from "../../hooks/useFetch";
function Videos({ className }) {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);
    const url = `${apiConfig.baseUrl}${id}/videos?api_key=${apiConfig.apiKey}`;
    useFetch(url, setVideos);
    return (
        <div className={`videos container ${className}`}>
            {videos.length > 0 &&
                videos.slice(0, 5).map((video) => (
                    <div className="video-wrap" key={video.id}>
                        <h2 className="video-title">{video?.name}</h2>
                        <div className="video" key={video?.id}>
                            <iframe
                                width="100%"
                                src={`https://www.youtube.com/embed/${video?.key}`}
                                title={video?.name}
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Videos;
