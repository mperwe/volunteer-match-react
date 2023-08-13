import React from "react";
import "./services.css"

const Service = () => {
  return (
    <section id="services" className="service-gallery">
      <div className="services-header">
        <h2>Our Services</h2>
        Here is some information about the services we provide...
      </div>
      <div className="gallery">
        <img src="services5.jpg" alt="health" className="big" />
        <img src="services2.jpg" alt="home" className="big" />
        <img src="services3.jpg" alt="home" className="big" />
        <img src="services4.jpg" alt="school" className="big" />
        <img src="services7.jpg" alt="care" className="big" />
        <img src="services8.jpg" alt="farm" className="big" />
      </div>
    </section>

  )
}

export default Service;