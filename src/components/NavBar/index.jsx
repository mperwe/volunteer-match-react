import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <div className="topnav">
            <a className="active" href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#contact">Contact Us</a>
            <div className="topnav-right">
                <a href="/dashboard">Dashboard</a>
                <a href="/register/organization">Organisation Sign Up</a>
                <a href="/register/volunteer">Volunteer Sign Up</a>
            </div>
        </div>

    )
}

export default NavBar;