import React from "react";
import "./hero.css"

const Hero = () => {
    return (
        <section id="home" className="section-showcase">
            <div className="container">
                <div>
                    <h1>Volunteer Link.</h1>
                    <p>Volunteering made Simple, Change made possible.</p>
                    <p>Our platform serves as a digital meeting place, connecting enthusiastic volunteers with various non-profit organizations and community initiatives.
                    </p>
                    <a href="#about" className="btn">Read More</a>
                </div>
                <img src="volunteerlogo.jpg" alt="volunteer logo" />
            </div>
        </section>
    )
}

export default Hero;
