import React from "react";
import "./hero.css"

const Hero = () => {
    return (
        <section id="home" className="section-showcase">
            <div className="container">
                <div>
                    <h1>Volunteer Link.</h1>
                    <h3>Volunteering made Simple, Change made possible.</h3>
                    <p>Our platform serves as a digital meeting place, connecting enthusiastic volunteers with various non-profit organizations and community initiatives.
                    </p>
                    <a href="/register/organization" className="btn">Get Started</a>
                </div>
                <img src="volunteerlogo.jpg" alt="volunteer logo" />
            </div>
        </section>
    )
}

export default Hero;
