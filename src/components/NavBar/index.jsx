import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">HOME</a>
            <a href="/#about">ABOUT</a>
            <a href="/#services">SERVICES</a>
            <a href="/#contact">CONTACT US</a>
            <div className="topnav-right">
                <a href="/register/organization">ORGANISATION SIGN UP</a>
                <a href="/register/volunteer">VOLUNTEER SIGN UP</a>
            </div>
        </div>

    )
}

export default NavBar;