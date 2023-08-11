import React from "react"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="section-footer">
        <div className="container">
          <div>
            <h2>Follow US.</h2>
            <a href="http://instagram.com">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="http://facebook.com">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="http://youtube.com">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a href="http://twitter.com">
              <i className="fab fa-twitter fa-2x"></i>
            </a>

            </div>
          <div>
            <h3>Company Info</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Services</h3>
            <ul>
              <li><a href="#">What we do</a></li>
             
            </ul>
          </div>
          <div>
            <h3>Sign Up</h3>
            <p>Join our Volunteer matching Platform.</p>
            <form name="email-form" onsubmit="event.preventDefault()">
              <div className="email-form">
                <span className="form-control-wrap"
                  ><input
                    type="email"
                    name="email"
                    id="email"
                    size="100"
                    className="form-control"
                    placeholder="E-mail" /></span><button type="submit" value="Submit" className="form-control submit">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    )
}

export default Footer;