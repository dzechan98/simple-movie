import "./Footer.scss";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__wrap container">
                <div className="footer__wrap-logo">
                    <img src={`${logo}`} alt="" />
                </div>
                <div className="footer__wrap-info">
                    <div className="footer__wrap-item">
                        <p>Home</p>
                        <p>Contact us</p>
                        <p>Term of services</p>
                        <p>About us</p>
                    </div>
                    <div className="footer__wrap-item">
                        <p>Live</p>
                        <p>FAQ</p>
                        <p>Permium</p>
                        <p>Pravacy policy</p>
                    </div>
                    <div className="footer__wrap-item">
                        <p>You must watch</p>
                        <p>Recent release</p>
                        <p>Top TMDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
