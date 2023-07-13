import "./Banner.scss";
import bg from "../../assets/bg.jpg";
function Banner() {
    return (
        <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
            <div className="banner__overlay"></div>
        </div>
    );
}

export default Banner;
