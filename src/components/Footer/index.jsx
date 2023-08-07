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
          </div>
          <div>
            <h3>Company Info</h3>
            <ul>
              <li><a href="#">All Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Blog Posts</h3>
            <ul>
              <li><a href="#">Post 1.</a></li>
              <li><a href="#">Post 2.</a></li>
              <li><a href="#">Post 3.</a></li>
              <li><a href="#">Post 3.</a></li>
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
                    size="40"
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