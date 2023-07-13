import "./Videos.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiConfig } from "../../api/ApiConfig";
function Videos({ className }) {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const url = `${apiConfig.baseUrl}${id}/videos?api_key=${apiConfig.apiKey}`;

        const getVideos = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setVideos(data.results ?? []);
            } catch (error) {
                console.log(error);
            }
        };
        getVideos(url);
    }, []);
    console.log(videos);
    return (
        <div className={`videos container ${className}`}>
            {videos.length > 0 &&
                videos.slice(0, 5).map((video) => (
                    <>
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
                    </>
                ))}
        </div>
    );
}

export default Videos;
