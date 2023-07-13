import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

import LogoImg from "../../assets/logo.png";
import { useEffect, useRef } from "react";
function Header() {
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add("shrink");
            } else headerRef.current.classList.remove("shrink");
        };

        window.addEventListener("scroll", shrinkHeader);

        return () => window.removeEventListener("scroll", shrinkHeader);
    });

    const headerRef = useRef(null);
    return (
        <header className="header" ref={headerRef}>
            <div className="header__wrap container">
                <div className="header__wrap-left">
                    <Link to="/">
                        <img src={LogoImg} alt="" />
                    </Link>
                </div>
                <div className="header__wrap-right">
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Movies
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
