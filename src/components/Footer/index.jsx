import React from "react"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="section-footer">
        <div className="container">
          <div>
            <h2>Follow Us.</h2>
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
              <li><a href="#services">What we do</a></li>
            </ul>
          </div>
          <div className="footer-register">
            <h3>Sign Up</h3>
            <a href="/register/organization">Join our Volunteer matching Platform.</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;